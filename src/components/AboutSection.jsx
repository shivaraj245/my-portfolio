import React from "react";

const services = [
  { icon: "💻", label: "Full-Stack Development" },
  { icon: "🤖", label: "AI & Machine Learning" },
  { icon: "🌐", label: "API Integration & Automation" },
  { icon: "🗄️", label: "Database & Backend" },
];

const AboutSection = () => (
  <section className="section-card" id="about" style={{ background: '#232b39', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', padding: '2.5rem 2rem', margin: '2rem 0' }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2.5rem' }}>
      {/* Services */}
      <div style={{ flex: 1, minWidth: 220 }}>
        {services.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 32 }}>
            <span style={{ fontSize: 32, marginRight: 18 }}>{s.icon}</span>
            <span style={{ color: '#fff', fontWeight: 600, fontSize: 18 }}>{s.label}</span>
          </div>
        ))}
      </div>
      {/* About */}
      <div style={{ flex: 2, minWidth: 260 }}>
        <div style={{ fontSize: 32, fontWeight: 700, color: '#fff', marginBottom: 12 }}>About me</div>
        <div style={{ color: '#bfc9d1', fontSize: 17, marginBottom: 32, lineHeight: 1.7 }}>
          I'm Shivaraj Manikashetti, a passionate Computer Science & Engineering undergraduate at RV University, Bengaluru, with a strong foundation in full-stack development, AI/ML, and IoT systems. I love building impactful, user-centric software—ranging from secure chat applications to AI-powered medical tools. With hands-on experience in technologies like React, Django, TensorFlow and Streamlit, I strive to solve real-world problems through innovative and secure solutions. I've also contributed to award-winning projects and consistently aim to learn, grow, and push the boundaries of what technology can achieve.
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection; 