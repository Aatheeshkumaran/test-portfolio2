import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { sound } from '../utils/audio';
import { Sparkles, RefreshCw, Eye } from 'lucide-react';

export default function Hero3D() {
  const mountRef = useRef(null);
  const [currentShape, setCurrentShape] = useState('core'); // 'core' | 'torus' | 'neural'
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);
  const sceneElementsRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06080f, 0.035);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Root Group for interactive rotation
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const cyanPoint = new THREE.PointLight(0x00f0ff, 3, 20);
    cyanPoint.position.set(4, 3, 4);
    scene.add(cyanPoint);

    const purplePoint = new THREE.PointLight(0xa855f7, 3, 20);
    purplePoint.position.set(-4, -3, 3);
    scene.add(purplePoint);

    const emeraldPoint = new THREE.PointLight(0x10b981, 2, 15);
    emeraldPoint.position.set(0, 4, -2);
    scene.add(emeraldPoint);

    // 1. Quantum Core Group
    const coreGroup = new THREE.Group();

    // Central faceted crystal
    const crystalGeo = new THREE.IcosahedronGeometry(1.4, 0);
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: 0x071528,
      emissive: 0x002c44,
      roughness: 0.1,
      metalness: 0.9,
      reflectivity: 0.9,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      flatShading: true
    });
    const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
    coreGroup.add(crystalMesh);

    // Outer wireframe shell
    const wireGeo = new THREE.IcosahedronGeometry(1.5, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    coreGroup.add(wireMesh);

    // Inner glowing energy core
    const energyGeo = new THREE.SphereGeometry(0.7, 16, 16);
    const energyMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    const energyMesh = new THREE.Mesh(energyGeo, energyMat);
    coreGroup.add(energyMesh);

    // Orbit Ring 1 (Cyan)
    const ring1Geo = new THREE.TorusGeometry(2.3, 0.025, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x0088aa,
      roughness: 0.3,
      metalness: 0.8
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    // Orbit Ring 2 (Purple)
    const ring2Geo = new THREE.TorusGeometry(2.6, 0.02, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0x6622aa,
      roughness: 0.3,
      metalness: 0.8
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 5;
    coreGroup.add(ring2);

    // Orbit Ring 3 (Emerald)
    const ring3Geo = new THREE.TorusGeometry(2.85, 0.015, 16, 100);
    const ring3Mat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x056633,
      roughness: 0.3,
      metalness: 0.8
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.z = Math.PI / 6;
    ring3.rotation.y = -Math.PI / 3;
    coreGroup.add(ring3);

    // Satellite nodes orbiting
    const satellites = [];
    for (let i = 0; i < 6; i++) {
      const satGeo = new THREE.OctahedronGeometry(0.12);
      const satMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00f0ff : 0xa855f7
      });
      const sat = new THREE.Mesh(satGeo, satMat);
      coreGroup.add(sat);
      satellites.push({
        mesh: sat,
        radius: 2.3 + (i % 3) * 0.3,
        speed: 0.8 + i * 0.25,
        offset: (i * Math.PI) / 3,
        axis: i % 3
      });
    }

    // 2. Torus Matrix Group
    const torusGroup = new THREE.Group();
    torusGroup.visible = false;

    const knotGeo = new THREE.TorusKnotGeometry(1.6, 0.42, 120, 24, 2, 3);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0x11162b,
      emissive: 0x4f1271,
      roughness: 0.2,
      metalness: 0.85,
      wireframe: false
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    torusGroup.add(knotMesh);

    const knotWireMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const knotWire = new THREE.Mesh(knotGeo, knotWireMat);
    knotWire.scale.set(1.02, 1.02, 1.02);
    torusGroup.add(knotWire);

    // 3. Neural Constellation Group
    const neuralGroup = new THREE.Group();
    neuralGroup.visible = false;

    const neuralParticleCount = 600;
    const neuralGeo = new THREE.BufferGeometry();
    const neuralPos = new Float32Array(neuralParticleCount * 3);
    const neuralOriginalPos = new Float32Array(neuralParticleCount * 3);

    for (let i = 0; i < neuralParticleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.0 + Math.random() * 0.8;
      const sinPhi = Math.sin(phi);

      const x = r * sinPhi * Math.cos(theta);
      const y = r * sinPhi * Math.sin(theta);
      const z = r * Math.cos(phi);

      neuralPos[i * 3] = x;
      neuralPos[i * 3 + 1] = y;
      neuralPos[i * 3 + 2] = z;

      neuralOriginalPos[i * 3] = x;
      neuralOriginalPos[i * 3 + 1] = y;
      neuralOriginalPos[i * 3 + 2] = z;
    }

    neuralGeo.setAttribute('position', new THREE.BufferAttribute(neuralPos, 3));
    const neuralMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.08,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const neuralPoints = new THREE.Points(neuralGeo, neuralMat);
    neuralGroup.add(neuralPoints);

    // Lines between nearby neural points
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.25
    });
    const lineGeo = new THREE.BufferGeometry();
    const linePositions = [];

    for (let i = 0; i < 90; i++) {
      const idxA = Math.floor(Math.random() * neuralParticleCount);
      const idxB = Math.floor(Math.random() * neuralParticleCount);
      linePositions.push(
        neuralPos[idxA * 3], neuralPos[idxA * 3 + 1], neuralPos[idxA * 3 + 2],
        neuralPos[idxB * 3], neuralPos[idxB * 3 + 1], neuralPos[idxB * 3 + 2]
      );
    }
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const neuralLines = new THREE.LineSegments(lineGeo, lineMat);
    neuralGroup.add(neuralLines);

    // Add all 3 groups to main group
    mainGroup.add(coreGroup);
    mainGroup.add(torusGroup);
    mainGroup.add(neuralGroup);

    // Background Particle Starfield
    const starCount = 1200;
    const starGeo = new THREE.BufferGeometry();
    const starCoords = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const palette = [
      new THREE.Color(0x00f0ff),
      new THREE.Color(0xa855f7),
      new THREE.Color(0x10b981),
      new THREE.Color(0x3b82f6)
    ];

    for (let i = 0; i < starCount; i++) {
      starCoords[i * 3] = (Math.random() - 0.5) * 35;
      starCoords[i * 3 + 1] = (Math.random() - 0.5) * 35;
      starCoords[i * 3 + 2] = (Math.random() - 0.5) * 30 - 5;

      const col = palette[Math.floor(Math.random() * palette.length)];
      starColors[i * 3] = col.r;
      starColors[i * 3 + 1] = col.g;
      starColors[i * 3 + 2] = col.b;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starCoords, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // Pointer Interaction & Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;

      if (isDragging) {
        const deltaX = e.clientX - prevMousePos.x;
        const deltaY = e.clientY - prevMousePos.y;
        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;
        prevMousePos = { x: e.clientX, y: e.clientY };
      }
    };

    const handlePointerDown = (e) => {
      isDragging = true;
      setIsInteracting(true);
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    // Touch support for mobile devices
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        setIsInteracting(true);
        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - prevMousePos.x;
        const deltaY = e.touches[0].clientY - prevMousePos.y;
        targetRotationY += deltaX * 0.01;
        targetRotationX += deltaY * 0.01;
        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mouseup', handlePointerUp);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // Responsive Window Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);

      // Adjust camera distance for mobile responsiveness
      if (newWidth < 600) {
        camera.position.z = 9.5;
      } else if (newWidth < 1024) {
        camera.position.z = 8.5;
      } else {
        camera.position.z = 7.5;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Store references for external control
    sceneElementsRef.current = {
      coreGroup,
      torusGroup,
      neuralGroup,
      knotMesh,
      knotWire,
      crystalMesh,
      energyMesh,
      ring1,
      ring2,
      ring3,
      satellites,
      neuralPositions: neuralPos,
      neuralOriginal: neuralOriginalPos,
      neuralGeo,
      starField
    };

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth auto rotation + drag tilt
      if (isAutoRotating && !isDragging) {
        targetRotationY += 0.0035;
      }

      // Parallax mouse tilt
      const targetLeanX = mouseY * 0.35 + targetRotationX;
      const targetLeanY = mouseX * 0.35 + targetRotationY;

      mainGroup.rotation.x += (targetLeanX - mainGroup.rotation.x) * 0.05;
      mainGroup.rotation.y += (targetLeanY - mainGroup.rotation.y) * 0.05;

      // Animate Core elements
      if (coreGroup.visible) {
        crystalMesh.rotation.y = elapsedTime * 0.25;
        crystalMesh.rotation.x = elapsedTime * 0.15;
        wireMesh.rotation.y = -elapsedTime * 0.3;
        energyMesh.scale.setScalar(0.75 + Math.sin(elapsedTime * 3) * 0.08);

        ring1.rotation.z = elapsedTime * 0.4;
        ring2.rotation.x = elapsedTime * 0.3;
        ring3.rotation.y = elapsedTime * 0.35;

        satellites.forEach((sat) => {
          const t = elapsedTime * sat.speed + sat.offset;
          if (sat.axis === 0) {
            sat.mesh.position.set(Math.cos(t) * sat.radius, Math.sin(t) * sat.radius, Math.sin(t * 2) * 0.5);
          } else if (sat.axis === 1) {
            sat.mesh.position.set(Math.cos(t) * sat.radius, Math.sin(t * 2) * 0.5, Math.sin(t) * sat.radius);
          } else {
            sat.mesh.position.set(Math.sin(t * 2) * 0.5, Math.cos(t) * sat.radius, Math.sin(t) * sat.radius);
          }
          sat.mesh.rotation.x += 0.02;
          sat.mesh.rotation.y += 0.03;
        });
      }

      // Animate Torus Knot
      if (torusGroup.visible) {
        knotMesh.rotation.x = elapsedTime * 0.3;
        knotMesh.rotation.y = elapsedTime * 0.45;
        knotWire.rotation.x = elapsedTime * 0.3;
        knotWire.rotation.y = elapsedTime * 0.45;
      }

      // Animate Neural Constellation
      if (neuralGroup.visible) {
        neuralGroup.rotation.y = elapsedTime * 0.2;
        neuralGroup.rotation.z = Math.sin(elapsedTime * 0.5) * 0.15;

        // Wave deformation
        const posAttr = neuralGeo.attributes.position;
        const arr = posAttr.array;
        for (let i = 0; i < neuralParticleCount; i++) {
          const i3 = i * 3;
          const origX = neuralOriginalPos[i3];
          const origY = neuralOriginalPos[i3 + 1];
          const origZ = neuralOriginalPos[i3 + 2];

          const wave = Math.sin(origX * 1.5 + elapsedTime * 2) * 0.12;
          arr[i3] = origX + wave;
          arr[i3 + 1] = origY + wave * 0.8;
          arr[i3 + 2] = origZ + Math.cos(origY * 1.5 + elapsedTime * 2) * 0.12;
        }
        posAttr.needsUpdate = true;
      }

      // Background Starfield Slow Rotation
      starField.rotation.y = elapsedTime * 0.02;
      starField.rotation.x = Math.sin(elapsedTime * 0.01) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handlePointerMove);
      container.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mouseup', handlePointerUp);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      crystalGeo.dispose();
      crystalMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      ring3Geo.dispose();
      knotGeo.dispose();
      starGeo.dispose();
      neuralGeo.dispose();
    };
  }, []);

  // Handle shape toggle
  const switchShape = (shapeKey) => {
    sound.playClick();
    setCurrentShape(shapeKey);

    const elements = sceneElementsRef.current;
    if (!elements) return;

    elements.coreGroup.visible = shapeKey === 'core';
    elements.torusGroup.visible = shapeKey === 'torus';
    elements.neuralGroup.visible = shapeKey === 'neural';
  };

  return (
    <div className="hero-3d-wrapper">
      {/* Three.js Canvas Container */}
      <div
        ref={mountRef}
        className={`hero-3d-canvas ${isInteracting ? 'cursor-grabbing' : 'cursor-grab'}`}
      />

      {/* Floating 3D Interaction HUD */}
      <div className="hero-3d-controls">
        <div className="hud-badge">
          <span className="hud-dot"></span>
          <span>WebGL 3D Core Active</span>
        </div>

        <div className="shape-switcher-pill">
          <button
            type="button"
            className={`shape-btn ${currentShape === 'core' ? 'active' : ''}`}
            onClick={() => switchShape('core')}
            title="Quantum Core"
          >
            <Sparkles size={14} />
            <span>Quantum</span>
          </button>
          <button
            type="button"
            className={`shape-btn ${currentShape === 'torus' ? 'active' : ''}`}
            onClick={() => switchShape('torus')}
            title="Cyber Torus"
          >
            <RefreshCw size={14} />
            <span>Torus</span>
          </button>
          <button
            type="button"
            className={`shape-btn ${currentShape === 'neural' ? 'active' : ''}`}
            onClick={() => switchShape('neural')}
            title="Neural Grid"
          >
            <Eye size={14} />
            <span>Neural</span>
          </button>
        </div>

        <div className="hud-hint">
          <span>Drag to Orbit · Real-time Three.js</span>
        </div>
      </div>
    </div>
  );
}
