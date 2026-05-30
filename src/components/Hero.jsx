import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import herovideo1_mp4 from '../assets/herovideo1_optimized.mp4';
import herovideo1_webm from '../assets/herovideo1_optimized.webm';
import herovideo2_mp4 from '../assets/herovideo2_optimized.mp4';
import herovideo2_webm from '../assets/herovideo2_optimized.webm';
import herovideo3_mp4 from '../assets/herovideo3_optimized.mp4';
import herovideo3_webm from '../assets/herovideo3_optimized.webm';

const videos = [
  { mp4: herovideo1_mp4, webm: herovideo1_webm },
  { mp4: herovideo2_mp4, webm: herovideo2_webm },
  { mp4: herovideo3_mp4, webm: herovideo3_webm }
];

export default function Hero() {
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay block or loading delay:", err);
      });
    }
  }, [currentVideoIdx]);

  useEffect(() => {
    // Fallback timer to show text even if network is offline or video fails
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnded = () => {
    setCurrentVideoIdx((prevIdx) => (prevIdx + 1) % videos.length);
  };

  const handleVideoPlaying = () => {
    setIsVideoLoaded(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Preload the active video formats using React 19 hoisted link tags */}
      <link rel="preload" href={videos[currentVideoIdx].webm} as="video" type="video/webm" />
      <link rel="preload" href={videos[currentVideoIdx].mp4} as="video" type="video/mp4" />
      
      {/* Background Video */}
      <div className="hero-video-container">
        <video 
          ref={videoRef}
          key={currentVideoIdx}
          autoPlay 
          muted 
          playsInline 
          preload="auto"
          onEnded={handleVideoEnded}
          onPlay={handleVideoPlaying}
          onPlaying={handleVideoPlaying}
          onCanPlay={handleVideoPlaying}
          className="hero-video"
        >
          <source src={videos[currentVideoIdx].webm} type="video/webm" />
          <source src={videos[currentVideoIdx].mp4} type="video/mp4" />
        </video>
        {/* Luxury radial overlay to ensure typography contrast */}
        <div className="hero-overlay" />
      </div>

      {/* Hero Content */}
      <div className="container hero-content">
        <motion.div
          initial="hidden"
          animate={isVideoLoaded ? "visible" : "hidden"}
          variants={containerVariants}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          {/* Elegant gold subtitle */}
          <motion.span 
            variants={fadeUpVariants}
            className="hero-subtitle-elegant"
          >
            Crafted with Heritage, Served with Grace
          </motion.span>

          {/* Heading */}
          <motion.h1 
            variants={fadeUpVariants}
            className="hero-title-elegant"
          >
            Experience Authentic <br />
            <span className="gold">Thai Food</span>
          </motion.h1>

          {/* Explore Menus Button */}
          <motion.div variants={fadeUpVariants}>
            <a href="#menu" className="hero-cta-btn-gold">
              EXPLORE OUR MENUS
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <a href="#philosophy" className="hero-scroll-down">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={30} strokeWidth={1.5} />
        </motion.div>
      </a>
    </section>
  );
}
