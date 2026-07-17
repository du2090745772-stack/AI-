import { motion } from 'motion/react';
import FadingVideo from './FadingVideo';

export default function Contact() {
  return (
    <section id="contact" className="resume-contact-page">
      <FadingVideo src={`${import.meta.env.BASE_URL}contact-bg.m4v`} className="contact-video" />
      <div className="contact-video-shade" />
      <motion.div className="contact-inner" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}>
        <div className="contact-copyblock">
          <span className="resume-kicker">05 / 联系方式</span>
          <h2>杜翱翔<span>.</span></h2>
          <p>AI 技术专家 / 大模型应用 / AI 生成 / Agent 自动化</p>
          <a href="mailto:dax15518202782@163.com" className="contact-mail">发起合作 <span>↗</span></a>
        </div>

        <div className="contact-list">
          <a href="mailto:dax15518202782@163.com"><span>Email</span><strong>dax15518202782@163.com</strong><i>↗</i></a>
          <a href="tel:13272092758"><span>Phone</span><strong>13272092758</strong><i>↗</i></a>
          <div><span>WeChat</span><strong>dax15518202782</strong><i>+</i></div>
        </div>

        <div className="contact-footer">
          <p>© 2026 杜翱翔 · AI Video Training Specialist</p>
          <p>让每个人都能用 AI 讲好自己的故事。</p>
        </div>
      </motion.div>

      <style>{`
        .resume-contact-page { position:relative; min-height:100vh; display:flex; align-items:center; overflow:hidden; padding:110px 40px 44px; background:#090706; }
        .contact-video { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center; }
        .contact-video-shade { position:absolute; inset:0; background:linear-gradient(90deg,rgba(0,0,0,.9),rgba(0,0,0,.55) 55%,rgba(0,0,0,.18)),linear-gradient(0deg,rgba(0,0,0,.8),transparent 65%); pointer-events:none; }
        .contact-inner { position:relative; z-index:2; width:min(1200px,100%); margin:0 auto; display:grid; grid-template-columns:1.15fr .85fr; gap:72px; align-items:start; }
        .contact-copyblock { display:flex; flex-direction:column; align-items:flex-start; }
        .contact-copyblock h2 { font-family:var(--font-heading); font-style:italic; font-size:clamp(3.4rem,7vw,7rem); line-height:.9; margin-top:18px; max-width:760px; }
        .contact-copyblock h2 span { color:var(--accent); }
        .contact-copyblock p { color:var(--text-secondary); line-height:1.75; max-width:580px; margin-top:22px; }
        .contact-mail { display:inline-flex; align-items:center; gap:28px; margin-top:36px; color:#000; background:#fff; padding:13px 18px 13px 24px; text-decoration:none; font-weight:600; font-size:.88rem; }
        .contact-mail span { display:grid; place-items:center; width:28px; height:28px; color:#fff; background:#111; }
        .contact-list { border-top:1px solid rgba(255,255,255,.2); max-height:560px; overflow:auto; }
        .contact-list a,.contact-list div { display:grid; grid-template-columns:90px 1fr 30px; gap:12px; align-items:center; min-height:86px; border-bottom:1px solid rgba(255,255,255,.14); color:inherit; text-decoration:none; transition:background .28s ease,border-color .28s ease; }
        .contact-list span { font-size:.72rem; color:var(--text-secondary); text-transform:uppercase; letter-spacing:.1em; }
        .contact-list strong { display:inline-block; font-size:.9rem; font-weight:500; overflow-wrap:anywhere; transform-origin:left center; transition:transform .28s cubic-bezier(.2,.8,.2,1),color .28s ease; }
        .contact-list a:hover,.contact-list div:hover { background:rgba(255,255,255,.055); border-color:rgba(255,255,255,.28); }
        .contact-list a:hover strong,.contact-list div:hover strong { color:#fff; transform:scale(1.07); }
        .contact-list i { font-style:normal; color:var(--accent); text-align:right; }
        .contact-footer { grid-column:1/-1; display:flex; justify-content:space-between; gap:24px; padding-top:26px; border-top:1px solid rgba(255,255,255,.14); margin-top:50px; }
        .contact-footer p { font-size:.72rem; color:var(--text-muted); }
        @media (max-width:850px) { .contact-inner { grid-template-columns:1fr; gap:54px; } .contact-list { max-height:none; } }
        @media (max-width:600px) { .resume-contact-page { padding:80px 20px 32px; } .contact-footer { flex-direction:column; margin-top:20px; } }
      `}</style>
    </section>
  );
}
