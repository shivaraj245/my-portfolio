import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Backend Development", 
    skills: ["FastAPI", "Django", "Node.js", "Express.js", "SQL", "REST APIs"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "scikit-learn", "spaCy", "Pandas", "NumPy", "LangChain"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "CrewAI", "Gemini API", "VS Code", "Postman"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const SkillsSection = () => (
  <section className="section-card" id="skills" style={{ 
    background: '#232b39', 
    borderRadius: 18, 
    boxShadow: '0 2px 12px rgba(0,0,0,0.10)', 
    padding: '2.5rem 2rem', 
    margin: '2rem 0' 
  }}>
    <h2 style={{ color: '#ff7f50', fontWeight: 700, marginBottom: 32, textAlign: 'center', fontSize: '2rem' }}>
      Skills & Technologies
    </h2>

    {/* Skills Grid */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}
    >
      {skillCategories.map((category, idx) => (
        <motion.div
          key={idx}
          variants={itemVariants}
          style={{
            background: '#1e293b',
            borderRadius: 12,
            padding: '1.5rem',
            border: '1px solid #374151'
          }}
        >
          <h3 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, marginBottom: 16 }}>
            {category.title}
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {category.skills.map((skill, skillIdx) => (
              <span
                key={skillIdx}
                style={{
                  background: '#232b39',
                  color: '#ff7f50',
                  padding: '0.4rem 0.8rem',
                  borderRadius: 16,
                  fontSize: 14,
                  fontWeight: 500,
                  border: '1px solid #ff7f50'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default SkillsSection;
