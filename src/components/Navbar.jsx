import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const links = [
  { label: 'Skills', href: '#about' }, { label: 'Awards', href: '#awards' }, { label: 'Projects', href: '#projects' },
  { label: 'Works', href: '#sharing' }, { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('hero');
      setShow(hero ? window.scrollY > hero.offsetHeight - 80 : false);
      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.getElementById(links[i].href.slice(1));
        if (el && window.scrollY >= el.offsetTop - 200) { setActive(links[i].href.slice(1)); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const s = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.nav key="sticky-navigation" className="navbar-sticky"
          initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }} transition={{ duration: 0.25 }}>
          <div className="navbar-inner">
            <span className="navbar-logo" onClick={() => s('#hero')}>DA</span>
            <div className="navbar-links">
              {links.map(l => (
                <span key={l.href} className={active === l.href.slice(1) ? 'active' : ''}
                  onClick={() => s(l.href)}>{l.label}</span>
              ))}
            </div>
            <button className="btn btn-primary" style={{padding:'7px 18px',fontSize:'0.8rem'}} onClick={() => s('#contact')}>Contact</button>
          </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <style>{`
        .navbar-sticky {
          position: fixed; top: 0; left: 0; right: 0; z-index: 999;
          height: 56px; display: flex; align-items: center; justify-content: center;
          padding: 0 48px;
          background: rgba(0,0,0,0.78); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(229,62,62,0.06);
        }
        .navbar-inner { max-width: var(--content); width: 100%; display: flex; align-items: center; justify-content: space-between; }
        .navbar-logo { font-size: 1rem; font-weight: 700; color: #fff; cursor: pointer; letter-spacing: 0.04em; }
        .navbar-links { display: flex; gap: 28px; }
        .navbar-links span { font-size: 0.85rem; color: rgba(255,255,255,0.4); cursor: pointer; transition: color 0.25s; }
        .navbar-links span:hover { color: rgba(255,255,255,0.8); }
        .navbar-links span.active { color: var(--accent); }
        @media (max-width: 768px) { .navbar-sticky { padding: 0 20px; } .navbar-links { display: none; } }
      `}</style>
    </>
  );
}
