import { motion } from 'motion/react';
import FadingVideo from './FadingVideo';
import BlurText from './BlurText';

export default function Hero() {
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" style={{ position:'relative', width:'100%', height:'100vh', overflow:'hidden', background:'#000' }}>
      <FadingVideo src={`${import.meta.env.BASE_URL}about-bg.mp4`} className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width:'120%', height:'120%' }} />
      <div className="hero-video-shade" />

      <nav style={{ position:'absolute', top:16, left:0, right:0, zIndex:50, padding:'0 32px', maxWidth:1200, margin:'0 auto', width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div className="liquid-glass" style={{ minWidth:44, height:44, padding:'0 14px', borderRadius:9999, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <span style={{ fontFamily:"Barlow,sans-serif", fontWeight:700, letterSpacing:'0.04em', color:'#fff', fontSize:'0.92rem' }}>DA</span>
        </div>
        <div className="liquid-glass hero-nav-links" style={{ display:'flex', alignItems:'center', gap:4, padding:'4px 6px', borderRadius:9999 }}>
          {[['Skills','about'],['Awards','awards'],['Projects','projects'],['Works','sharing']].map(([l,target]) => (
            <span key={l} onClick={() => scroll(target)}
              style={{ padding:'6px 14px', fontSize:'0.82rem', color:'rgba(255,255,255,0.9)', cursor:'pointer', fontFamily:'Barlow,sans-serif', whiteSpace:'nowrap' }}>{l}</span>
          ))}
          <button className="btn btn-primary" style={{ fontSize:'0.82rem', padding:'6px 18px', whiteSpace:'nowrap' }}
            onClick={() => scroll('contact')}>联系我 →</button>
        </div>
        <div style={{ width:44 }} />
      </nav>

      <div style={{ position:'relative', zIndex:10, height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', paddingTop:80, paddingLeft:16, paddingRight:16 }}>
        <motion.div className="liquid-glass" style={{ display:'inline-flex', alignItems:'center', gap:8, borderRadius:9999, paddingRight:12, marginBottom:24 }}
          initial={{filter:'blur(10px)',opacity:0,y:20}} animate={{filter:'blur(0)',opacity:1,y:0}} transition={{duration:0.6,delay:0.4,ease:'easeOut'}}>
          <span style={{ background:'#fff', color:'#000', padding:'2px 10px', borderRadius:9999, fontSize:'0.7rem', fontWeight:600 }}>AI</span>
          <span style={{ fontSize:'0.82rem', color:'rgba(255,255,255,0.9)' }}>AI 技术专家 · 全栈 AI 工程化</span>
        </motion.div>

        <BlurText text="杜翱翔."
          className="font-heading"
          style={{ fontFamily:"'Instrument Serif',serif", fontStyle:'italic', color:'#fff', fontSize:'clamp(2.5rem,5vw,4.5rem)', lineHeight:0.85, maxWidth:700, textAlign:'center', letterSpacing:'-2px', justifyContent:'center' }}
          delay={0.6} />

        <motion.p style={{ fontSize:'0.9rem', color:'rgba(255,255,255,0.6)', maxWidth:500, textAlign:'center', marginTop:16, fontFamily:'Barlow,sans-serif', fontWeight:300, lineHeight:1.5 }}
          initial={{filter:'blur(10px)',opacity:0,y:20}} animate={{filter:'blur(0)',opacity:1,y:0}} transition={{duration:0.6,delay:0.8,ease:'easeOut'}}>
          大模型应用 · AI 生成 · Agent 自动化。深耕 AI 生成与工程化落地，具备从模型选型、Prompt 工程到生产管线搭建的完整技术栈。
        </motion.p>

        <motion.div style={{ display:'flex', alignItems:'center', gap:24, marginTop:24 }}
          initial={{filter:'blur(10px)',opacity:0,y:20}} animate={{filter:'blur(0)',opacity:1,y:0}} transition={{duration:0.6,delay:1.1,ease:'easeOut'}}>
          <button className="liquid-glass-strong btn" style={{ color:'#fff', padding:'10px 22px', fontSize:'0.88rem' }}
            onClick={() => scroll('awards')}>查看作品 →</button>
          <span onClick={() => scroll('about')} style={{ fontSize:'0.85rem', color:'rgba(255,255,255,0.7)', cursor:'pointer', fontFamily:'Barlow,sans-serif' }}>
            查看经历 ▶
          </span>
        </motion.div>

        <motion.div className="hero-stats" style={{ display:'flex', gap:16, marginTop:32 }}
          initial={{filter:'blur(10px)',opacity:0,y:20}} animate={{filter:'blur(0)',opacity:1,y:0}} transition={{duration:0.6,delay:1.3,ease:'easeOut'}}>
          {[{v:'100+',l:'AI 模型与工具'},{v:'15+',l:'商业项目应用'},{v:'8+',l:'自动化工作流'},{v:'50+',l:'项目与案例'}].map((s,i) => (
            <div key={i} className="liquid-glass hero-stat hover-text-card" style={{ padding:'18px 22px', borderRadius:'1.25rem', minWidth:160 }}>
              <div className="hover-scale-text" style={{ fontFamily:"'Instrument Serif',serif", fontStyle:'italic', color:'#fff', fontSize:'1.8rem', letterSpacing:'-1px', lineHeight:1 }}>{s.v}</div>
              <div className="hover-scale-text" style={{ fontSize:'0.72rem', color:'rgba(255,255,255,0.5)', fontFamily:'Barlow,sans-serif', fontWeight:300, marginTop:4 }}>{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .font-heading { font-family: 'Instrument Serif', serif !important; font-style: italic !important; }
        .absolute { position: absolute; }
        .left-1\\/2 { left: 50%; }
        .top-0 { top: 0; }
        .-translate-x-1\\/2 { transform: translateX(-50%); }
        .object-cover { object-fit: cover; }
        .object-top { object-position: top; }
        .z-0 { z-index: 0; }
        .hero-video-shade { position:absolute; inset:0; z-index:1; background:linear-gradient(180deg,rgba(0,0,0,.18),rgba(0,0,0,.08) 42%,rgba(0,0,0,.82)); pointer-events:none; }
        @media (max-width: 520px) {
          .hero-nav-links > span:nth-of-type(n+3) { display:none; }
          .hero-stats { width:100%; gap:8px !important; display:grid !important; grid-template-columns:repeat(2,1fr); }
          .hero-stat { min-width:0 !important; flex:1; padding:15px 7px !important; }
          .hero-stat div:first-child { font-size:1.5rem !important; }
          .hero-stat div:last-child { font-size:.62rem !important; white-space:nowrap; }
        }
      `}</style>
    </section>
  );
}
