import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 18, 38);
    camera.lookAt(0, 4, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Group for entire city cluster
    const cityGroup = new THREE.Group();
    scene.add(cityGroup);

    // Materials - SupraControl Royal Blue & Vibrant Lime Green
    const blueEdgeMat = new THREE.LineBasicMaterial({ color: 0x1a56db, transparent: true, opacity: 0.85 });
    const greenEdgeMat = new THREE.LineBasicMaterial({ color: 0x78c043, transparent: true, opacity: 0.95 });
    const buildingBodyMat = new THREE.MeshPhongMaterial({
      color: 0x0c1b3d,
      transparent: true,
      opacity: 0.45,
      shininess: 60
    });

    // Generate procedural 3D Smart City buildings
    const buildingCount = 28;
    const nodes = [];

    for (let i = 0; i < buildingCount; i++) {
      const bHeight = 4 + Math.random() * 12;
      const bWidth = 2.2 + Math.random() * 2.5;
      const bDepth = 2.2 + Math.random() * 2.5;

      const angle = (i / buildingCount) * Math.PI * 2 + (Math.random() * 0.4);
      const radius = 5 + Math.random() * 14;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      const geom = new THREE.BoxGeometry(bWidth, bHeight, bDepth);
      const mesh = new THREE.Mesh(geom, buildingBodyMat);
      mesh.position.set(x, bHeight / 2, z);
      cityGroup.add(mesh);

      // Edges for cyber architectural look
      const edges = new THREE.EdgesGeometry(geom);
      const isGreen = i % 3 === 0;
      const line = new THREE.LineSegments(edges, isGreen ? greenEdgeMat : blueEdgeMat);
      line.position.copy(mesh.position);
      cityGroup.add(line);

      // Spire / IoT Rooftop Node
      const nodeGeom = new THREE.SphereGeometry(0.3, 12, 12);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: isGreen ? 0x78c043 : 0x3b82f6
      });
      const node = new THREE.Mesh(nodeGeom, nodeMat);
      node.position.set(x, bHeight + 0.5, z);
      cityGroup.add(node);
      nodes.push(node);
    }

    // Connect top nodes with digital telemetry lines
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x78c043,
      transparent: true,
      opacity: 0.4
    });

    for (let i = 0; i < nodes.length - 1; i += 2) {
      const p1 = nodes[i].position;
      const p2 = nodes[(i + 1) % nodes.length].position;
      const geom = new THREE.BufferGeometry().setFromPoints([p1, p2]);
      const l = new THREE.Line(geom, lineMat);
      cityGroup.add(l);
    }

    // Ground Grid
    const gridHelper = new THREE.GridHelper(50, 30, 0x1a56db, 0xe2e8f0);
    gridHelper.position.y = 0;
    scene.add(gridHelper);

    // Floating IoT Sensor Particles (Blue & Green)
    const particleCount = 200;
    const particleGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 45;
      positions[i * 3 + 1] = Math.random() * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 45;

      const isGreen = Math.random() > 0.5;
      if (isGreen) {
        colors[i * 3] = 0.47;     // #78c043
        colors[i * 3 + 1] = 0.75;
        colors[i * 3 + 2] = 0.26;
      } else {
        colors[i * 3] = 0.10;     // #1a56db
        colors[i * 3 + 1] = 0.34;
        colors[i * 3 + 2] = 0.86;
      }
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.45,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x78c043, 2);
    dirLight.position.set(20, 30, 20);
    scene.add(dirLight);

    const blueLight = new THREE.PointLight(0x1a56db, 3, 50);
    blueLight.position.set(-15, 12, 10);
    scene.add(blueLight);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / mount.clientWidth) * 2 - 1;
      const y = -((e.clientY - rect.top) / mount.clientHeight) * 2 + 1;
      targetRotationY = x * 0.3;
      targetRotationX = y * 0.15;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Slow elegant rotation
      cityGroup.rotation.y += 0.003;
      cityGroup.rotation.y += (targetRotationY - cityGroup.rotation.y) * 0.05;
      cityGroup.rotation.x += (targetRotationX - cityGroup.rotation.x) * 0.05;

      // Pulse rooftop spires
      nodes.forEach((n, idx) => {
        n.scale.setScalar(1 + 0.25 * Math.sin(time * 3 + idx));
      });

      // Float particles
      particles.rotation.y = time * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="sc-canvas-hero-wrapper"
      style={{
        width: '100%',
        height: '100%',
        minHeight: '440px',
        cursor: 'grab'
      }}
    />
  );
}
