import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Layers, ShieldCheck, Thermometer, Zap, Activity } from 'lucide-react';

export default function DigitalTwin3D() {
  const mountRef = useRef(null);
  const [activeLayer, setActiveLayer] = useState('hvac'); // 'hvac' | 'security' | 'energy' | 'lighting'
  const [telemetry, setTelemetry] = useState({
    temp: '21.4°C',
    power: '428 kW',
    occupancy: '86%',
    status: 'OPTIMAL (Energy Saved: 30%)'
  });

  const layerRef = useRef(activeLayer);
  useEffect(() => {
    layerRef.current = activeLayer;
  }, [activeLayer]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight || 420;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a1329);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(22, 18, 28);
    camera.lookAt(0, 7, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const towerGroup = new THREE.Group();
    scene.add(towerGroup);

    // Floor slabs
    const floorCount = 10;
    const floorSlabMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.7
    });

    const edgeBlue = new THREE.LineBasicMaterial({ color: 0x1a56db });

    for (let f = 0; f < floorCount; f++) {
      const y = f * 1.5;
      const geom = new THREE.BoxGeometry(9, 0.35, 9);
      const mesh = new THREE.Mesh(geom, floorSlabMat);
      mesh.position.set(0, y, 0);
      towerGroup.add(mesh);

      const edges = new THREE.EdgesGeometry(geom);
      const edgeLine = new THREE.LineSegments(edges, edgeBlue);
      edgeLine.position.copy(mesh.position);
      towerGroup.add(edgeLine);

      // Glass core
      const coreGeom = new THREE.BoxGeometry(7, 1.15, 7);
      const coreMat = new THREE.MeshPhysicalMaterial({
        color: 0x0f2b5c,
        transmission: 0.6,
        opacity: 0.5,
        transparent: true,
        roughness: 0.1
      });
      const core = new THREE.Mesh(coreGeom, coreMat);
      core.position.set(0, y + 0.75, 0);
      towerGroup.add(core);
    }

    // Central Elevator & MEP Riser
    const riserGeom = new THREE.BoxGeometry(2.5, floorCount * 1.5 + 2, 2.5);
    const riserMat = new THREE.MeshBasicMaterial({ color: 0x1a56db, wireframe: true });
    riserMat.transparent = true;
    riserMat.opacity = 0.35;
    const riser = new THREE.Mesh(riserGeom, riserMat);
    riser.position.set(0, (floorCount * 1.5) / 2, 0);
    towerGroup.add(riser);

    // Dynamic Sensor Nodes on facades
    const sensorNodes = [];
    for (let i = 0; i < 20; i++) {
      const sGeom = new THREE.SphereGeometry(0.25, 8, 8);
      const sMat = new THREE.MeshBasicMaterial({ color: 0x78c043 });
      const sensor = new THREE.Mesh(sGeom, sMat);
      const floorIdx = Math.floor(Math.random() * floorCount);
      const angle = (i / 20) * Math.PI * 2;
      sensor.position.set(Math.cos(angle) * 5, floorIdx * 1.5 + 0.75, Math.sin(angle) * 5);
      towerGroup.add(sensor);
      sensorNodes.push(sensor);
    }

    // Grid Floor
    const grid = new THREE.GridHelper(35, 20, 0x1a56db, 0x1e293b);
    grid.position.y = -0.5;
    scene.add(grid);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x78c043, 2);
    dirLight.position.set(15, 25, 15);
    scene.add(dirLight);

    const blueLight = new THREE.PointLight(0x1a56db, 5, 40);
    blueLight.position.set(-10, 10, -10);
    scene.add(blueLight);

    // Interaction controls (drag to rotate)
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };

    const onMouseDown = (e) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;
      towerGroup.rotation.y += deltaX * 0.008;
      towerGroup.rotation.x += deltaY * 0.005;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch support for mobile
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const onTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMousePos.x;
      towerGroup.rotation.y += deltaX * 0.01;
      prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTouchEnd = () => {
      isDragging = false;
    };

    domEl.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      if (!isDragging) {
        towerGroup.rotation.y += 0.004;
      }

      const current = layerRef.current;
      sensorNodes.forEach((s, idx) => {
        if (current === 'hvac') {
          s.material.color.setHex(0x38bdf8);
          s.position.y += Math.sin(time * 3 + idx) * 0.003;
        } else if (current === 'security') {
          s.material.color.setHex(0x78c043);
          s.scale.setScalar(1 + 0.3 * Math.sin(time * 5 + idx));
        } else if (current === 'energy') {
          s.material.color.setHex(0xfacc15);
        } else {
          s.material.color.setHex(0xa855f7);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight || 420;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      domEl.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domEl.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const handleLayerSwitch = (layer) => {
    setActiveLayer(layer);
    if (layer === 'hvac') {
      setTelemetry({ temp: '21.2°C', power: '412 kW', occupancy: '84%', status: 'OPTIMAL (30% SAVINGS)' });
    } else if (layer === 'security') {
      setTelemetry({ temp: '22.0°C', power: '430 kW', occupancy: '89%', status: 'ALL ZONES SECURE & MONITORED' });
    } else if (layer === 'energy') {
      setTelemetry({ temp: '21.5°C', power: '385 kW (Peak Avoided)', occupancy: '82%', status: 'SMART METERING ACTIVE' });
    } else {
      setTelemetry({ temp: '21.3°C', power: '395 kW', occupancy: '85%', status: 'HUMAN CENTRIC LIGHTING ACTIVE' });
    }
  };

  return (
    <section id="digital-twin" className="py-5" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="badge px-3 py-2 rounded-pill fw-bold mb-2" style={{ backgroundColor: 'rgba(26, 86, 219, 0.1)', color: '#1a56db' }}>
            Digital Twin & Smart BIM
          </span>
          <h2 className="sc-section-title mb-3" style={{ color: '#1a56db' }}>
            Interactive 3D Digital Building Platform
          </h2>
          <p className="sc-section-subtitle">
            Create Digital twin of the building & integrated smart BIM. Data from multiple systems integrated seamlessly and analyzed for sustainable performance.
          </p>
        </div>

        <div className="row g-4 align-items-center">
          {/* 3D Model Display */}
          <div className="col-12 col-lg-8">
            <div className="sc-digital-twin-container position-relative" style={{ height: '480px', borderRadius: '20px' }}>
              <div ref={mountRef} style={{ width: '100%', height: '100%', cursor: 'grab' }} />

              {/* Overlay Badge */}
              <div className="position-absolute top-0 start-0 m-3 d-flex gap-2 align-items-center">
                <span className="badge bg-dark text-white border border-secondary px-3 py-2 small d-inline-flex align-items-center gap-2">
                  <Activity size={14} style={{ color: '#78c043' }} /> Live 3D Digital Twin Simulation
                </span>
                <span className="badge text-white px-2 py-1 small d-none d-sm-inline" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  Drag to rotate 360°
                </span>
              </div>

              {/* Overlay Telemetry Bar */}
              <div
                className="position-absolute bottom-0 start-0 end-0 p-3 mx-3 mb-3 rounded-3 d-flex flex-wrap justify-content-between align-items-center gap-2"
                style={{ backgroundColor: 'rgba(15, 28, 61, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(59, 130, 246, 0.3)' }}
              >
                <div className="d-flex align-items-center text-white small">
                  <Thermometer size={16} className="me-1 text-info" />
                  <span className="text-white-50 me-1">Indoor Comfort:</span>
                  <span className="fw-bold">{telemetry.temp}</span>
                </div>
                <div className="d-flex align-items-center text-white small">
                  <Zap size={16} className="me-1 text-warning" />
                  <span className="text-white-50 me-1">Active Load:</span>
                  <span className="fw-bold">{telemetry.power}</span>
                </div>
                <div className="d-flex align-items-center text-white small">
                  <ShieldCheck size={16} className="me-1 text-success" />
                  <span className="text-white-50 me-1">System Health:</span>
                  <span className="fw-bold text-success">{telemetry.status}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subsystem Layer Control & Details */}
          <div className="col-12 col-lg-4">
            <div className="card border-0 shadow-sm p-4 rounded-4" style={{ backgroundColor: '#ffffff' }}>
              <h5 className="fw-bold text-dark mb-3 d-flex align-items-center gap-2">
                <Layers size={20} style={{ color: '#1a56db' }} /> Integrated Building Subsystems
              </h5>
              <p className="text-secondary small mb-4">
                Integrate disparate systems into a single centralized platform, break operational silos, and optimize enterprise facility performance.
              </p>

              <div className="d-flex flex-column gap-2 mb-4">
                <button
                  type="button"
                  className={`btn text-start p-3 rounded-3 d-flex align-items-center justify-content-between ${
                    activeLayer === 'hvac' ? 'btn-primary text-white shadow-sm' : 'btn-light border'
                  }`}
                  style={activeLayer === 'hvac' ? { backgroundColor: '#1a56db', borderColor: '#1a56db' } : {}}
                  onClick={() => handleLayerSwitch('hvac')}
                >
                  <div className="d-flex align-items-center gap-3">
                    <Thermometer size={20} style={{ color: activeLayer === 'hvac' ? '#ffffff' : '#1a56db' }} />
                    <div>
                      <div className="fw-bold small">Smart Buildings & IFM</div>
                      <div className="small opacity-75" style={{ fontSize: '0.75rem' }}>Centralized MEP regulation, HVAC & occupant comfort</div>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  className={`btn text-start p-3 rounded-3 d-flex align-items-center justify-content-between ${
                    activeLayer === 'security' ? 'btn-primary text-white shadow-sm' : 'btn-light border'
                  }`}
                  style={activeLayer === 'security' ? { backgroundColor: '#78c043', borderColor: '#78c043' } : {}}
                  onClick={() => handleLayerSwitch('security')}
                >
                  <div className="d-flex align-items-center gap-3">
                    <ShieldCheck size={20} style={{ color: activeLayer === 'security' ? '#ffffff' : '#78c043' }} />
                    <div>
                      <div className="fw-bold small">Physical Security & Analytics</div>
                      <div className="small opacity-75" style={{ fontSize: '0.75rem' }}>Access control, intrusion, and AI video analytics</div>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  className={`btn text-start p-3 rounded-3 d-flex align-items-center justify-content-between ${
                    activeLayer === 'energy' ? 'btn-primary text-white shadow-sm' : 'btn-light border'
                  }`}
                  style={activeLayer === 'energy' ? { backgroundColor: '#1a56db', borderColor: '#1a56db' } : {}}
                  onClick={() => handleLayerSwitch('energy')}
                >
                  <div className="d-flex align-items-center gap-3">
                    <Zap size={20} style={{ color: activeLayer === 'energy' ? '#ffffff' : '#eab308' }} />
                    <div>
                      <div className="fw-bold small">Smart Metering & Energy</div>
                      <div className="small opacity-75" style={{ fontSize: '0.75rem' }}>BTU, water, power meters & billing software</div>
                    </div>
                  </div>
                </button>
              </div>

              <div className="p-3 rounded-3" style={{ backgroundColor: '#f1f5f9' }}>
                <div className="fw-bold small text-dark mb-1">Unified Digital Twin Platform</div>
                <div className="text-secondary small" style={{ fontSize: '0.8rem' }}>
                  Open platform connecting IoT, AI, Data Analytics, Cybersecurity, Big Data, Machine Learning, and Cloud services under one roof.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
