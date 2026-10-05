# SupraControl International - Middle East BMS & Smart Building Solutions

Enterprise Building Management Systems (BMS), IoT integration, and HVAC Chiller Plant Automation web application modeled after international BMS corporate standards.

---

## 🌐 Live Vercel Demo Link
- **Vercel Demo URL:** [https://supracontrol-middleeast.vercel.app](https://supracontrol-middleeast.vercel.app)
- **Local Dev Server:** [http://localhost:3000](http://localhost:3000)

---

## 🚀 How to Deploy to Vercel

The project is pre-configured with `vercel.json` for seamless client-side SPA routing (`react-router-dom`).

### Method 1: Using Vercel CLI (Fastest - 1 Step)
In your project terminal directory (`d:\supercontrol`), run:
```bash
npx vercel
```
- Set project name: `supracontrol-middleeast`
- Framework preset: `Vite` (auto-detected)
- Build command: `vite build`
- Output directory: `dist`

To deploy directly to production:
```bash
npx vercel --prod
```

### Method 2: Via GitHub / Vercel Dashboard
1. Push this folder to your GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your GitHub repository.
4. Click **Deploy** (Settings are automatically configured via `vercel.json`).

---

## 📁 Pre-Configured Vercel Routing (`vercel.json`)
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🛠️ Local Development
```bash
npm install
npm run dev
```
Runs at `http://localhost:3000/`.
