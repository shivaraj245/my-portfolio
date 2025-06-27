import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ResumeGenie \u2013 AI Interview Prep Tool",
    tags: ["React", "FastAPI", "Gemini API", "CrewAI", "Tailwind CSS"],
    description: `Resume Genie is an AI-powered web app that generates customized interview questions by analyzing resumes and job descriptions. Built with FastAPI, React.js, and Gemini APIs, it uses a multi-agent system via CrewAI, including:\n\n\ud83e\uddea Resume Parser Agent\n\n\ud83d\udcc4 JD Matching Agent\n\n\ud83d\udcca JD Analysis Agent\n\n\u2753 Question Generator Agent`,
    features: [
      "\ud83e\udde0 Resume Parser Agent \u2013 Extracts skills, experience, and keywords from uploaded resumes",
      "\ud83d\udcc4 Job Description Matching Agent \u2013 Aligns resume content with role-specific requirements",
      "\ud83d\udcca JD Analysis Agent \u2013 Breaks down job descriptions into target skills and expectations",
      "\u2753 Question Generator Agent \u2013 Creates technical and behavioral questions using LLMs, categorized into Easy, Medium, and Hard levels"
    ],
    codeLink: "https://github.com/shivaraj245/resumegenie.git",
    link: "#"
  },
  {
    title: "Ai-medical-assistant",
    tags: ["Streamlit", "Python", "Gemini API"],
    description: `We're building a Medical AI Assistant that uses the Google Gemini AI Model to recognize medical conditions from images. It's a user-friendly project that combines Streamlit and Python, perfect for anyone new to using AI in healthcare.`,
    features: [
      "🩺 Medical image analysis",
      "🤖 Google Gemini AI integration",
      "💻 Streamlit interactive UI",
      "🔬 Diagnostic insights"
    ],
    codeLink: "https://github.com/shivaraj245/Ai-medical-assistant.git",
    link: "#"
  },
  {
    title: "Sustainability Project",
    tags: ["React", "Django", "DRF", "SQLite/PostgreSQL"],
    description: `The Sustainability Project is a full-stack web application that allows users to track and manage sustainability actions. The backend is built using Django and Django REST Framework (DRF), while the frontend is built using React.js.`,
    features: [
      "🌱 Track sustainability actions",
      "🔗 API-based backend with DRF",
      "📝 CRUD operations",
      "⚡ Integrated React frontend",
      "🗄️ SQLite/PostgreSQL support"
    ],
    codeLink: "https://github.com/shivaraj245/stealth.git",
    link: "#"
  },
  {
    title: "🔐 Secure Chatroom – Encrypted Real-Time Messaging App",
    tags: ["Python", "RSA", "SQLite", "Tkinter"],
    description: `A secure, cross-platform chat application enabling real-time messaging and file sharing with RSA encryption and admin controls. Designed for privacy, authentication, and a smooth user experience.`,
    features: [
      "🔐 RSA end-to-end encryption for messages and files",
      "🔑 MD5 password hashing for secure login",
      "👤 User authentication and session management",
      "💬 Real-time messaging with file sharing",
      "🛡️ Admin commands with IP banning for security",
      "🗃️ Chat history and activity logs",
      "🖥️ GUI built with Python Tkinter",
      "💻 Cross-platform support (Windows, macOS, Linux)"
    ],
    codeLink: "https://github.com/shivaraj245/Secure-Chatroom.git",
    link: "#"
  }
];

const tagStyle = {
  display: 'inline-block',
  background: '#232b39',
  color: '#ff7f50',
  borderRadius: 16,
  padding: '4px 14px',
  fontSize: 13,
  fontWeight: 500,
  marginRight: 8,
  marginBottom: 8,
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.7, ease: 'easeOut' } })
};

const ProjectsSection = () => (
  <section className="section-card" id="projects" style={{ background: 'transparent', boxShadow: 'none', paddingTop: 0 }}>
    <h2 style={{ color: '#ff7f50', fontWeight: 700, marginBottom: 24, textAlign: 'center' }}>Projects</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {projects.map((proj, idx) => (
        <motion.div
          key={idx}
          custom={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          style={{
            display: 'flex',
            flexDirection: idx % 2 === 1 ? 'row-reverse' : 'row',
            alignItems: 'stretch',
            gap: '2rem',
            background: '#232b39',
            borderRadius: 18,
            boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
            padding: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {/* Info */}
          <div style={{ flex: 1, minWidth: 260, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: 22, fontWeight: 600, color: '#fff', marginBottom: 10 }}>{proj.title}</div>
            <div style={{ marginBottom: 12 }}>
              {proj.tags.map((tag, i) => (
                <span key={i} style={tagStyle}>{tag}</span>
              ))}
            </div>
            <div style={{ color: '#bfc9d1', marginBottom: 14, fontSize: 15 }}>{proj.description}</div>
            <ul style={{ color: '#bfc9d1', fontSize: 15, margin: '0 0 18px 0', padding: 0, listStyle: 'none' }}>
              {proj.features.map((f, i) => (
                <li key={i} style={{ marginBottom: 4 }}>{f}</li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              <a href={proj.codeLink} style={{ background: '#ff7f50', color: '#fff', padding: '0.7rem 1.5rem', borderRadius: 24, fontWeight: 600, textDecoration: 'none', fontSize: 15, border: 'none', display: 'inline-block', transition: 'transform 0.2s' }} target="_blank" rel="noopener noreferrer">View Github</a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    <style>{`
      @media (max-width: 900px) {
        #projects > div > div {
          flex-direction: column !important;
        }
        #projects > div > div > div {
          min-width: 0 !important;
          max-width: 100% !important;
        }
      }
    `}</style>
  </section>
);

export default ProjectsSection; 