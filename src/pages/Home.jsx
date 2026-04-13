import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaChevronDown, FaDownload } from 'react-icons/fa';
import { ReactSVG } from 'react-svg';
import { TypeAnimation } from 'react-type-animation';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef as useThreeRef, useMemo } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img1 from '../assets/images/img1.png';
import ppImage from '../assets/images/PP.png';
import Certifications from '../components/Certifications';
import Education from '../components/Education';
import Experience from '../components/Experience';
import SkillsSection from '../components/SkillsSection';

gsap.registerPlugin(ScrollTrigger);

// ============================================
// 3D BACKGROUND COMPONENT - Floating Tech Particles
// ============================================
function TechParticles() {
  const pointsRef = useThreeRef();
  const linesRef = useThreeRef();
  const { viewport, mouse } = useThree();
  
  const count = 100;
  const connectionDistance = 1.5;
  
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = [];
    
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      
      vel.push({
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.005
      });
    }
    return [pos, vel];
  }, []);

  const linePositions = useMemo(() => {
    return new Float32Array(count * count * 6);
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const positions = pointsRef.current.geometry.attributes.position.array;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      const mouseX = (mouse.x * viewport.width) / 2;
      const mouseY = (mouse.y * viewport.height) / 2;
      const dx = positions[i3] - mouseX;
      const dy = positions[i3 + 1] - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 2) {
        positions[i3] += dx * 0.02;
        positions[i3 + 1] += dy * 0.02;
      }
      
      positions[i3] += velocities[i].x;
      positions[i3 + 1] += velocities[i].y;
      positions[i3 + 2] += velocities[i].z;
      
      if (positions[i3] > 7.5) positions[i3] = -7.5;
      if (positions[i3] < -7.5) positions[i3] = 7.5;
      if (positions[i3 + 1] > 7.5) positions[i3 + 1] = -7.5;
      if (positions[i3 + 1] < -7.5) positions[i3 + 1] = 7.5;
      if (positions[i3 + 2] > 4) positions[i3 + 2] = -4;
      if (positions[i3 + 2] < -4) positions[i3 + 2] = 4;
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    let lineIndex = 0;
    const lineGeo = linesRef.current.geometry;
    const linePos = linePositions;
    
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (dist < connectionDistance) {
          linePos[lineIndex++] = positions[i * 3];
          linePos[lineIndex++] = positions[i * 3 + 1];
          linePos[lineIndex++] = positions[i * 3 + 2];
          linePos[lineIndex++] = positions[j * 3];
          linePos[lineIndex++] = positions[j * 3 + 1];
          linePos[lineIndex++] = positions[j * 3 + 2];
        }
      }
    }
    
    lineGeo.setDrawRange(0, lineIndex / 3);
    lineGeo.attributes.position.array.set(linePos);
    lineGeo.attributes.position.needsUpdate = true;
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#00d4ff"
          transparent
          opacity={0.9}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
      
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count * count * 2}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff00cc" />
    </>
  );
}

function Background3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <TechParticles />
      </Canvas>
    </div>
  );
}

// ============================================
// CUSTOM CURSOR COMPONENT
// ============================================
function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleElementHover = () => {
      const hoverables = document.querySelectorAll('a, button, [data-cursor="pointer"]');
      hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };
    
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    handleElementHover();
    const observer = new MutationObserver(handleElementHover);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: 'rgba(0, 212, 255, 0.2)',
      border: '2px solid rgba(0, 212, 255, 0.8)',
      mixBlendMode: 'difference'
    },
    hovering: {
      width: 64,
      height: 64,
      backgroundColor: 'rgba(0, 212, 255, 0.1)',
      border: '2px solid rgba(0, 212, 255, 1)',
      mixBlendMode: 'difference'
    },
    clicking: {
      width: 24,
      height: 24,
      backgroundColor: 'rgba(255, 0, 150, 0.4)',
      border: '2px solid rgba(255, 0, 150, 1)'
    }
  };

  const currentVariant = isClicking ? 'clicking' : isHovering ? 'hovering' : 'default';

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{ x: cursorXSpring, y: cursorYSpring }}
        animate={currentVariant}
        variants={variants}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: useTransform(cursorXSpring, (v) => v + 12),
          y: useTransform(cursorYSpring, (v) => v + 12),
        }}
        animate={{ scale: isClicking ? 0.5 : 1 }}
      />
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9998] hidden lg:block"
          style={{
            x: useSpring(useTransform(cursorX, (v) => v + 8), { damping: 30 + i * 5, stiffness: 200 }),
            y: useSpring(useTransform(cursorY, (v) => v + 8), { damping: 30 + i * 5, stiffness: 200 }),
            backgroundColor: `rgba(0, 212, 255, ${0.1 - i * 0.02})`,
          }}
        />
      ))}
    </>
  );
}

// ============================================
// TEXT SCRAMBLE EFFECT HOOK
// ============================================
const useTextScramble = (text, trigger = true) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = '!<>-_\\\\/[]{}—=+*^?#________';
  
  useEffect(() => {
    if (!trigger) return;
    
    let iteration = 0;
    const originalText = text;
    
    const interval = setInterval(() => {
      setDisplayText(
        originalText
          .split('')
          .map((char, index) => {
            if (index < iteration) return originalText[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      
      if (iteration >= originalText.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    
    return () => clearInterval(interval);
  }, [text, trigger]);
  
  return displayText;
};

// ============================================
// SCROLL INDICATOR
// ============================================
function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <span className="text-xs text-gray-400 uppercase tracking-[0.3em]">Scroll to explore</span>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
        <FaChevronDown className="text-cyan-400 text-xl" />
      </motion.div>
    </motion.div>
  );
}

// ============================================
// SOCIAL LINKS COMPONENT
// ============================================
function SocialLinks() {
  const links = [
    { href: 'https://github.com/ImmanuelJoya', icon: <FaGithub />, label: 'GitHub', color: 'from-gray-400 to-gray-600', hoverColor: 'rgba(100,100,100,0.8)' },
    { href: 'https://www.linkedin.com/in/immanuel-joy-178b66294/', icon: <FaLinkedin />, label: 'LinkedIn', color: 'from-blue-400 to-blue-600', hoverColor: 'rgba(0,119,181,0.8)' },
    { href: 'mailto:immanueljoy107@gmail.com', icon: <FaEnvelope />, label: 'Email', color: 'from-red-400 to-red-600', hoverColor: 'rgba(234,67,53,0.8)' },
  ];

  return (
    <motion.div
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden xl:flex flex-col gap-6"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      {links.map((link, index) => (
        <motion.div
          key={link.label}
          className="relative group"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8 + index * 0.2, duration: 0.5 }}
        >
          <motion.a
            href={link.href}
            target={link.href.includes('mailto') ? '_self' : '_blank'}
            rel={link.href.includes('mailto') ? '' : 'noopener noreferrer'}
            className="relative z-10 flex items-center justify-center w-12 h-12 text-lg text-gray-300 bg-white/5 backdrop-blur-md rounded-full border border-white/10 transition-all duration-300 overflow-hidden group"
            whileHover={{ scale: 1.2, borderColor: 'rgba(0, 212, 255, 0.5)', boxShadow: `0 0 20px ${link.hoverColor}` }}
            whileTap={{ scale: 0.95 }}
            data-cursor="pointer"
          >
            <motion.div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">{link.icon}</span>
          </motion.a>
          <motion.span className="absolute right-full mr-4 top-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 backdrop-blur-md rounded-lg text-xs text-white whitespace-nowrap border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {link.label}
          </motion.span>
        </motion.div>
      ))}
      <div className="w-px h-20 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent mx-auto" />
    </motion.div>
  );
}

// ============================================
// CTA BUTTONS
// ============================================
function CTAButtons() {
  return (
    <motion.div className="flex flex-wrap gap-4 mt-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }}>
      <motion.a
        href="#projects"
        className="relative group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-cursor="pointer"
      >
        <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="relative z-10 flex items-center gap-2">
          View My Work
          <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
        </span>
      </motion.a>
      
      <motion.a
        href="/resume.pdf"
        download
        className="relative group px-8 py-4 bg-transparent border-2 border-white/30 rounded-full font-semibold text-white hover:border-cyan-400/50 transition-colors duration-300 flex items-center gap-2"
        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
        whileTap={{ scale: 0.95 }}
        data-cursor="pointer"
      >
        <FaDownload className="text-cyan-400" />
        <span>Download CV</span>
      </motion.a>
    </motion.div>
  );
}

// ============================================
// PROFILE IMAGE WITH 3D TILT
// ============================================
function ProfileImage() {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    setRotateX((mouseY / (rect.height / 2)) * -15);
    setRotateY((mouseX / (rect.width / 2)) * 15);
  };
  
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      className="relative perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ delay: 0.5, duration: 1, type: "spring" }}
      style={{ transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`, transition: 'transform 0.1s ease-out' }}
    >
      <motion.div
        className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-2xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5], rotate: [0, 180, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="relative">
        <motion.div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl" whileHover={{ scale: 1.02 }}>
          <img src={ppImage} alt="Immanuel Joy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <motion.div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent h-[20%]" animate={{ top: ['-20%', '120%'] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
        </motion.div>
        
        <motion.div className="absolute -top-4 -right-4 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-cyan-500/30 text-cyan-400 text-sm font-medium" animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
          Available for work
        </motion.div>
        
        <motion.div className="absolute -bottom-4 -left-4 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-purple-500/30 text-purple-400 text-sm font-medium" animate={{ y: [0, 5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
          2+ Years Experience
        </motion.div>
      </div>
    </motion.div>
  );
}

// ============================================
// FLOATING TECH ICONS
// ============================================
function FloatingTechIcons() {
  const icons = [
    { src: img1, delay: 0, x: '10%', y: '20%', size: 'w-16 h-16' },
    { src: img1, delay: 2, x: '85%', y: '30%', size: 'w-14 h-14' },
    { src: img1, delay: 4, x: '15%', y: '70%', size: 'w-12 h-12' },
    { src: img1, delay: 1, x: '80%', y: '75%', size: 'w-10 h-10' },
  ];

  return (
    <>
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className={`absolute ${icon.size} opacity-20 pointer-events-none`}
          style={{ left: icon.x, top: icon.y }}
          animate={{ y: [0, -30, 0], x: [0, 10, 0], rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: icon.delay }}
        >
          <img src={icon.src} alt="" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,212,255,0.5)]" />
        </motion.div>
      ))}
    </>
  );
}

// ============================================
// MAIN HOME COMPONENT
// ============================================
const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const sections = document.querySelectorAll('.section-animate');
    sections.forEach((section) => {
      gsap.fromTo(section, { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 80%", toggleActions: "play none none reverse" }
      });
    });
    
    return () => { ScrollTrigger.getAll().forEach(trigger => trigger.kill()); };
  }, []);

  const scrambledName = useTextScramble("Hi, I'm Immanuel", isLoaded);

  return (
    <>
      <CustomCursor />
      <SocialLinks />
      
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-4 sm:px-6 lg:px-8 overflow-hidden">
        <Background3D />
        
        <motion.div
          className="absolute inset-0 opacity-40 pointer-events-none z-10"
          animate={{ background: ["radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.15) 0%, transparent 50%)", "radial-gradient(circle at 80% 20%, rgba(255, 0, 150, 0.15) 0%, transparent 50%)", "radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.15) 0%, transparent 50%)", "radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.15) 0%, transparent 50%)"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none z-20" />
        
        <div className="absolute inset-0 z-10 pointer-events-none">
          <FloatingTechIcons />
        </div>
        
        <div className="max-w-7xl mx-auto z-30 w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-20">
            
            <motion.div className="flex flex-col items-start text-left space-y-6 order-2 lg:order-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-mono">
                  {scrambledName}
                </h1>
                <motion.div className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mt-4 rounded-full" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 1.5, duration: 1 }} />
              </motion.div>
              
              <motion.div className="relative" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
                <div className="px-6 py-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                  <TypeAnimation sequence={['Full Stack Developer', 2500, 'React & TypeScript Expert', 2500, 'UI/UX Designer', 2500, 'Problem Solver', 2500]} wrapper="span" speed={50} repeat={Infinity} className="text-xl sm:text-2xl md:text-3xl text-cyan-300 font-medium" />
                </div>
              </motion.div>
              
              <motion.p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}>
                I craft <span className="text-cyan-400 font-semibold">stunning, responsive</span>, and <span className="text-purple-400 font-semibold"> user-centric</span> web applications with cutting-edge technologies. Passionate about transforming ideas into <span className="text-pink-400 font-semibold"> extraordinary digital experiences</span>.
              </motion.p>
              
              <motion.div className="flex flex-wrap gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }}>
                {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind'].map((tech, i) => (
                  <motion.span key={tech} className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors duration-300 cursor-default" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 + i * 0.1 }} whileHover={{ scale: 1.1 }}>
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
              
              <CTAButtons />
              
              <motion.div className="flex gap-4 xl:hidden mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
                {[{ href: 'https://github.com/ImmanuelJoya', icon: <FaGithub /> }, { href: 'https://www.linkedin.com/in/immanuel-joy-178b66294/', icon: <FaLinkedin /> }, { href: 'mailto:immanueljoy107@gmail.com', icon: <FaEnvelope /> }].map((link, i) => (
                  <motion.a key={i} href={link.href} target={link.href.includes('mailto') ? '_self' : '_blank'} rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300" whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <ProfileImage />
            </div>
          </div>
        </div>
        
        <ScrollIndicator />
      </section>

      <div className="section-animate"><SkillsSection /></div>
      <div className="section-animate"><Certifications /></div>
      <div className="section-animate"><Education /></div>
      <div className="section-animate"><Experience /></div>
    </>
  );
};

export default Home;