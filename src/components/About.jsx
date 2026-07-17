import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import FadingVideo from './FadingVideo';
import BlurText from './BlurText';

const stats = [
  { v: '30+', l: 'Students Trained' },
  { v: '90%', l: 'Course Completion' },
  { v: '60%', l: 'Efficiency Boost' },
  { v: '10+', l: 'AI Tools Mastered' },
];

export default function About() {
  return (
    <section id="about" style={{ position:'relative', minHeight:'100vh', overflow:'hidden', background:'#000' }}>
      <FadingVideo src={`${import.meta.env.BASE_URL}hero-bg.mp4`} className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="about-video-shade" />

      <div style={{ position:'relative', zIndex:10, minHeight:'100vh', padding:'80px 40px', maxWidth:1200, margin:'0 auto', display:'flex', flexDirection:'column', justifyContent:'center' }}>
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}}>
          <div style={{ fontSize:'0.82rem', color:'rgba(255,255,255,0.6)', fontFamily:'Barlow,sans-serif', marginBottom:24 }}>// About</div>
          <BlurText text="杜翱翔 AI 视频培训讲师"
            as="h2"
            className="font-heading"
            style={{ fontFamily:"'Instrument Serif',serif", fontStyle:'italic', color:'#fff', fontSize:'clamp(2.8rem,5.5vw,5rem)', lineHeight:0.9, letterSpacing:'-2px', justifyContent:'flex-start', maxWidth:600 }}
            delay={0.2} />
        </motion.div>

        <motion.div className="liquid-glass" style={{ maxWidth:560, padding:28, borderRadius:'1.25rem', marginTop:24 }}
          initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:0.3}}>
          <p style={{ fontSize:'0.88rem', color:'rgba(255,255,255,0.8)', lineHeight:1.7, fontFamily:'Barlow,sans-serif', fontWeight:300 }}>
            4 years of AI video expertise — from zero to production-ready courses. Mastered the full spectrum of AI video tools: <strong style={{color:'#fff',fontWeight:500}}>Runway, Veo, Sora, Hailuo AI, Vidu, JianYing, Jimeng</strong> and more.
          </p>
          <p style={{ fontSize:'0.88rem', color:'rgba(255,255,255,0.8)', lineHeight:1.7, fontFamily:'Barlow,sans-serif', fontWeight:300, marginTop:12 }}>
            Built enterprise training programs from scratch using a closed-loop methodology: theory → case study → hands-on practice → feedback review. 30+ trainees, 90% completion rate, 60% efficiency improvement.
          </p>
        </motion.div>

        <motion.div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12, marginTop:24, maxWidth:700 }}
          initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:0.5}}>
          {stats.map((s,i) => (
            <div key={i} className="liquid-glass" style={{ padding:'18px 14px', borderRadius:'1.25rem', textAlign:'center' }}>
              <div style={{ fontFamily:"'Instrument Serif',serif", fontStyle:'italic', color:'#fff', fontSize:'1.6rem', letterSpacing:'-1px', lineHeight:1 }}>{s.v}</div>
              <div style={{ fontSize:'0.7rem', color:'rgba(255,255,255,0.4)', fontFamily:'Barlow,sans-serif', fontWeight:300, marginTop:4 }}>{s.l}</div>
            </div>
          ))}
        </motion.div>

        <motion.div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12, marginTop:24, maxWidth:700 }}
          initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:0.6}}>
          {[
            { icon:'📧', label:'Email', value:'dax15518202782@163.com' },
            { icon:'📱', label:'Phone', value:'13272092758' },
            { icon:'💬', label:'WeChat', value:'dax15518202782' },
            { icon:'📍', label:'Location', value:'Hangzhou, China' },
          ].map((c,i) => (
            <div key={i} className="liquid-glass" style={{ padding:'14px', borderRadius:'1.25rem', display:'flex', flexDirection:'column', gap:4 }}>
              <span style={{ fontSize:'1.2rem' }}>{c.icon}</span>
              <div style={{ fontSize:'0.65rem', color:'rgba(255,255,255,0.4)', fontFamily:'Barlow,sans-serif' }}>{c.label}</div>
              <div style={{ fontSize:'0.75rem', color:'#fff', fontFamily:'Barlow,sans-serif', fontWeight:400 }}>{c.value}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .absolute { position: absolute; }
        .inset-0 { top:0; right:0; bottom:0; left:0; }
        .w-full { width: 100%; }
        .h-full { height: 100%; }
        .object-cover { object-fit: cover; }
        .z-0 { z-index: 0; }
        .about-video-shade { position:absolute; inset:0; z-index:1; background:linear-gradient(90deg,rgba(0,0,0,.88) 0%,rgba(0,0,0,.64) 42%,rgba(0,0,0,.08) 78%),linear-gradient(0deg,rgba(0,0,0,.7),transparent 45%); pointer-events:none; }
        .font-heading { font-family: 'Instrument Serif', serif !important; font-style: italic !important; }
      `}</style>
    </section>
  );
}
