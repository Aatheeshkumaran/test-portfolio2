import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function TechGalaxy3D({ activeCategoryColor = '#00f0ff' }) {
  const mountRef = useRef(null);
  const colorRef = useRef(activeCategoryColor);

  useEffect(() => {
    colorRef.current = activeCategoryColor;
  }, [activeCategoryColor]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'low-power'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group
    const group = new THREE.Group();
    scene.add(group);

    // Wireframe Sphere
    const sphereGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    group.add(sphereMesh);

    // Tech Point Particles
    const particleCount = 280;
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 1.6 + (Math.random() - 0.5) * 0.4;

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.065,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(pGeo, pMat);
    group.add(particles);

    // Orbital Rings
    const ringGeo = new THREE.TorusGeometry(1.9, 0.015, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.5
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    group.add(ring);

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    container.addEventListener('mousemove', handleMouseMove);

    let frameId;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Dynamic color tint update
      const targetColor = new THREE.Color(colorRef.current);
      sphereMat.color.lerp(targetColor, 0.05);
      pMat.color.lerp(targetColor, 0.05);

      group.rotation.y = elapsed * 0.35 + mouseX * 0.4;
      group.rotation.x = Math.sin(elapsed * 0.2) * 0.2 + mouseY * 0.4;
      ring.rotation.z = elapsed * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      pGeo.dispose();
      pMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
    };
  }, []);

  return (
    <div className="tech-galaxy-3d-box">
      <div ref={mountRef} className="tech-galaxy-canvas" />
      <div className="tech-galaxy-label">
        <span className="pulse-indicator" style={{ backgroundColor: activeCategoryColor }} />
        <span>3D Skill Matrix Active</span>
      </div>
    </div>
  );
}
