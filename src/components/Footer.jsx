import React from "react";

const Footer = () => (
  <footer style={{ background: '#181f2a', color: '#fff', textAlign: 'center', padding: '2rem 1rem 1.2rem 1rem', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
    <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 6 }}>
      Shivaraj Manikashetti
    </div>
    <div style={{ color: '#bfc9d1', fontSize: 14, marginBottom: 18 }}>
      Designed with love, all rights reserved for Shivaraj Manikashetti.
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginBottom: 10 }}>
      <a href="mailto:shivarajsmanikashetti7323@gmail.com" target="_blank" rel="noopener noreferrer" title="Email" style={{ color: '#fff' }}>
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.99 7.99c.39.39 1.02.39 1.41 0L20 10.01V20H4z"/></svg>
      </a>
      <a href="https://github.com/shivaraj245" target="_blank" rel="noopener noreferrer" title="GitHub" style={{ color: '#fff' }}>
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
      </a>
      <a href="https://www.linkedin.com/in/shivaraj-manikashetti/" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ color: '#fff' }}>
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
      </a>
    </div>
    <div style={{ color: '#bfc9d1', fontSize: 13, marginTop: 10 }}>
      &copy; {new Date().getFullYear()} Shivaraj Manikashetti
    </div>
  </footer>
);

export default Footer; 