"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

export default function ThreeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // --- SCENE SETUP ---
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040408, 0.015);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 25;
    camera.position.y = 0;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- 3D OBJECTS ---

    // 1. Particle Cosmos (Background Starfield)
    const starsCount = 2000;
    const starsGeometry = new THREE.BufferGeometry();
    const starsPositions = new Float32Array(starsCount * 3);
    const starsColors = new Float32Array(starsCount * 3);

    const colorCyan = new THREE.Color("#00f0ff");
    const colorPurple = new THREE.Color("#bd00ff");
    const colorWhite = new THREE.Color("#ffffff");

    for (let i = 0; i < starsCount; i++) {
      // Position
      starsPositions[i * 3] = (Math.random() - 0.5) * 80;
      starsPositions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      starsPositions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      // Color mix
      const rand = Math.random();
      let mixedColor = colorWhite;
      if (rand < 0.4) {
        mixedColor = colorCyan;
      } else if (rand < 0.8) {
        mixedColor = colorPurple;
      }

      starsColors[i * 3] = mixedColor.r;
      starsColors[i * 3 + 1] = mixedColor.g;
      starsColors[i * 3 + 2] = mixedColor.b;
    }

    starsGeometry.setAttribute("position", new THREE.BufferAttribute(starsPositions, 3));
    starsGeometry.setAttribute("color", new THREE.BufferAttribute(starsColors, 3));

    // Create a circular particle texture using standard HTML Canvas API (no external asset needed)
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 16;
    pCanvas.height = 16;
    const pCtx = pCanvas.getContext("2d");
    if (pCtx) {
      const grad = pCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(1, "rgba(255, 255, 255, 0)");
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 16, 16);
    }
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    const starsMaterial = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      map: particleTexture,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const starfield = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starfield);

    // 2. Central Full-Stack Node Mesh (representing databases, servers, APIs)
    const nodeGroup = new THREE.Group();
    scene.add(nodeGroup);

    // Dynamic Central Core Sphere (Wireframe network)
    const coreGeometry = new THREE.IcosahedronGeometry(6, 2);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0xbd00ff,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    nodeGroup.add(coreMesh);

    // Central Sphere glowing nodes
    const corePointsMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.25,
      transparent: true,
      opacity: 0.8,
      map: particleTexture,
      blending: THREE.AdditiveBlending,
    });
    const corePoints = new THREE.Points(coreGeometry, corePointsMat);
    nodeGroup.add(corePoints);

    // Outer Orbiting Nodes (Floating Skills representation)
    const outerGroup = new THREE.Group();
    scene.add(outerGroup);

    const outerCount = 8;
    const outerPositions: THREE.Vector3[] = [];
    const outerMeshes: THREE.Mesh[] = [];

    const outerGeom = new THREE.SphereGeometry(0.3, 16, 16);
    const skillColors = [
      0x00f0ff, // React/Next (Cyan)
      0xbd00ff, // GSAP/Three (Purple)
      0x10b981, // PostgreSQL/Database (Green)
      0xf59e0b, // API Node (Orange)
      0x3b82f6, // DevOps Docker (Blue)
      0xec4899, // Frontend (Pink)
      0x8b5cf6, // Economics/Analytics (Violet)
      0x14b8a6, // Node.js Server (Teal)
    ];

    for (let i = 0; i < outerCount; i++) {
      const angle = (i / outerCount) * Math.PI * 2;
      const radius = 10;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = (Math.random() - 0.5) * 5;

      const pos = new THREE.Vector3(x, y, z);
      outerPositions.push(pos);

      const skillMat = new THREE.MeshBasicMaterial({
        color: skillColors[i],
        transparent: true,
        opacity: 0.8,
      });
      const skillMesh = new THREE.Mesh(outerGeom, skillMat);
      skillMesh.position.copy(pos);
      outerGroup.add(skillMesh);
      outerMeshes.push(skillMesh);

      // Connect orbital node to core via lines
      const lineGeom = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        pos
      ]);
      const lineMat = new THREE.LineBasicMaterial({
        color: skillColors[i],
        transparent: true,
        opacity: 0.15,
      });
      const connectionLine = new THREE.Line(lineGeom, lineMat);
      outerGroup.add(connectionLine);
    }

    // --- LIGHTS ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x00f0ff, 1.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xbd00ff, 1.5);
    dirLight2.position.set(-5, -5, -5);
    scene.add(dirLight2);

    // --- INTERACTION & ANIMATION ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Scroll mapping via GSAP & Scroll Events
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1);
      
      // Dynamic camera flying through space on scroll
      gsap.to(camera.position, {
        z: 25 - scrollPercent * 15, // zoom in
        y: -scrollPercent * 18,     // pan down
        x: Math.sin(scrollPercent * Math.PI) * 5, // curve motion
        duration: 1.5,
        ease: "power2.out",
        overwrite: "auto",
      });

      // Tilt scene based on scroll progress
      gsap.to(nodeGroup.rotation, {
        x: scrollPercent * Math.PI * 0.5,
        y: scrollPercent * Math.PI * 1.5,
        duration: 2,
        ease: "power2.out",
        overwrite: "auto",
      });

      gsap.to(outerGroup.rotation, {
        y: -scrollPercent * Math.PI * 2,
        x: scrollPercent * Math.PI * 0.25,
        duration: 2.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Resize Handler
    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Slow idle rotations
      starfield.rotation.y = elapsedTime * 0.015;
      starfield.rotation.x = elapsedTime * 0.005;

      coreMesh.rotation.y = elapsedTime * 0.15;
      coreMesh.rotation.x = elapsedTime * 0.1;
      
      corePoints.rotation.y = -elapsedTime * 0.1;

      // Make outer nodes float slightly up/down
      outerMeshes.forEach((mesh, index) => {
        const offset = index * 10;
        mesh.position.y = outerPositions[index].y + Math.sin(elapsedTime * 1.2 + offset) * 0.4;
      });

      // Lerp mouse interaction
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Subtly rotate nodes/camera with mouse move (parallax)
      nodeGroup.position.x = targetX * 1.5;
      nodeGroup.position.y = -targetY * 1.5;

      outerGroup.position.x = targetX * 2.5;
      outerGroup.position.y = -targetY * 2.5;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", onResize);
      
      starsGeometry.dispose();
      starsMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      corePointsMat.dispose();
      outerGeom.dispose();
      particleTexture.dispose();
      
      outerMeshes.forEach((mesh) => {
        (mesh.material as THREE.Material).dispose();
      });

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10 bg-[#040408]"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
      {/* Background radial gradient overlay to add depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(4,4,8,0.85)_100%)] pointer-events-none" />
    </div>
  );
}
