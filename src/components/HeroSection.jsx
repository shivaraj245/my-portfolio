import React from "react";
import { motion } from "framer-motion";
import profileImg from '../assets/WhatsApp Image 2025-05-10 at 7.08.46 PM.jpeg';

const techStack = [
  "React.js", "FastAPI", "Django", "Node.js","TensorFlow",   "scikit-learn", "spaCy", "Pandas", "NumPy", "SQL", "Git", "GitHub",   "LangChain", "CrewAI", "Gemini API"
];

const heroVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};
const photoVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 40 },
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut' } }
};
const techBarVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.5 } }
};

const glowAnim = {
  animate: {
    boxShadow: [
      "0 0 0 0 #ff7f5040",
      "0 0 40px 10px #ff7f5080",
      "0 0 0 0 #ff7f5040"
    ],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: "loop"
    }
  }
};

const HeroSection = () => (
  <>
    <section className="hero-section" id="home" style={{ width: '100%', background: 'none', padding: '0', margin: '0' }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 420,
        padding: '3rem 2rem 2rem 2rem',
        gap: '2rem',
      }}>
        <motion.div
          className="hero-section__info"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          style={{ flex: 1, minWidth: 280 }}
        >
          <div style={{ fontSize: '2.2rem', fontWeight: 600, color: '#fff', marginBottom: 8 }}>
            <span role="img" aria-label="wave">👋</span> Hello, I'm Shivaraj Manikashetti
          </div>
          <div style={{ fontSize: '1.2rem', color: '#ff7f50', marginBottom: 8 }}>
            <span role="img" aria-label="student">🎓</span> Final Year B.Tech CSE Student
          </div>
          
          <div
            className="hero-section__buttons"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: 32,
              flexDirection: 'row',
            }}
          >
            <a
              href="#contact"
              style={{
                background: '#ff7f50',
                color: '#fff',
                padding: '0.9rem 2.2rem',
                borderRadius: 8,
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: 16,
                border: 'none',
                transition: 'transform 0.2s',
                flex: '1 1 180px',
                textAlign: 'center',
                minWidth: 150,
              }}
            >
              Got a project?
            </a>
            <a
              href="https://drive.google.com/drive/folders/1OooNwU2Ol_r1wOlzRNT5sx56p7fb8Syv"
              target="_blank"
              style={{
                background: 'transparent',
                color: '#ff7f50',
                border: '2px solid #ff7f50',
                padding: '0.9rem 2.2rem',
                borderRadius: 8,
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: 16,
                transition: 'transform 0.2s',
                flex: '1 1 180px',
                textAlign: 'center',
                minWidth: 150,
              }}
            >
              My resume
            </a>
          </div>
        </motion.div>
        <motion.div
          style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, minWidth: 220 }}
          initial="hidden"
          animate="visible"
          variants={photoVariants}
        >
          <motion.div
            style={{
              position: 'absolute',
              width: 260,
              height: 260,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 60% 40%, #232b39 60%, #ff7f50 100%)',
              zIndex: 0,
              filter: 'blur(8px)',
            }}
            {...glowAnim}
          />
          <img
            src={profileImg}
            alt="Profile"
            className="hero-section__photo"
            style={{ position: 'relative', zIndex: 1, width: 220, height: 220, borderRadius: '50%', objectFit: 'cover', border: '6px solid #ff7f50', boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}
          />
        </motion.div>
      </div>
    </section>
    {/* Tech Stack Marquee */}
    <div style={{ background: '#232b39', overflow: 'hidden', width: '100%', padding: '1.2rem 0', margin: '0 0 2rem 0' }}>
      <motion.div
        style={{ display: 'flex', gap: '2.5rem', fontSize: 18, color: '#bfc9d1', fontWeight: 500, letterSpacing: 1, whiteSpace: 'nowrap' }}
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, repeatType: 'loop', duration: 18, ease: 'linear' }}
      >
        {[...techStack, ...techStack].map((tech, idx) => (
          <span key={idx} style={{ marginRight: 40 }}>{tech}</span>
        ))}
      </motion.div>
    </div>
    <style>{`
      @media (max-width: 900px) {
        .hero-section > div {
          flex-direction: column !important;
          align-items: center !important;
          text-align: center !important;
        }
        .hero-section__info {
          margin-bottom: 2rem;
        }
        .hero-section__buttons {
          flex-direction: column !important;
          width: 100%;
          gap: 1rem !important;
        }
        .hero-section__buttons a {
          min-width: 0 !important;
          width: 100% !important;
        }
      }
    `}</style>
  </>
);

export default HeroSection; 