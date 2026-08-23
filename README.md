# Karmaox — Technology & Innovation

A modern, cinematic 3D company website for **Karmaox**, built with React, Vite, Tailwind CSS, Three.js, and React Three Fiber.

---

## 🚀 Quick Start (Local Development)

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Permanent Custom Domain Deployment Guide

You can deploy this site 24/7 with zero hosting fees and free automated SSL certificate on **Vercel**, **Netlify**, or **Cloudflare Pages**.

### Option A: Deploy to Vercel (Recommended - Instant 1-Click)

1. **Push to GitHub**:
   Create a new GitHub repository (e.g. `karmaox-website`) and push this code:
   ```bash
   git init
   git add .
   git commit -m "feat: initial Karmaox 3D website"
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/karmaox-website.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   * Go to [vercel.com](https://vercel.com) and sign in with GitHub.
   * Click **"Add New Project"** and select your `karmaox-website` repository.
   * Framework Preset: **Vite** (detected automatically).
   * Click **"Deploy"**.

3. **Connect Your Custom Domain**:
   * In the Vercel dashboard for this project, go to **Settings → Domains**.
   * Enter your domain name (e.g., `karmaox.com` or `www.karmaox.com`).
   * Vercel will give you two DNS records to add at your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):
     * **A Record**: `@` → `76.76.21.21`
     * **CNAME Record**: `www` → `cname.vercel-dns.com`
   * Once added, your domain will automatically activate with free SSL/HTTPS in a few minutes!

---

### Option B: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and log in.
2. Click **"Add new site" → "Import an existing project"** and select GitHub.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **"Deploy site"**.
6. Go to **Domain management → Add custom domain** and configure DNS records.

---

## 🛠 Tech Stack

* **Core Framework**: React 18 + Vite 6
* **3D WebGL**: Three.js, `@react-three/fiber`, `@react-three/drei`
* **Styling & Effects**: Tailwind CSS, Custom Glassmorphism, CSS Shaders
* **Animations**: Framer Motion (orchestrated reveals, spring cursor, responsive parallax)
* **Icons**: Lucide React
