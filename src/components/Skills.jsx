import { motion } from 'motion/react';

const skills = [
  { number: '01', title: 'AI 视频全流程', desc: '选题、提示词、画面生成、动态分镜、剪辑合成与交付。', tags: ['Pipeline','Iteration'] },
  { number: '02', title: '工具矩阵', desc: 'Runway、Veo、Sora、海螺、Vidu、剪映、即梦等工具组合。', tags: ['Tool Matrix','Workflow'] },
  { number: '03', title: '提示词工程', desc: '针对写实、动漫、电影感和短视频风格建立稳定模板。', tags: ['Prompt','Style'] },
  { number: '04', title: '课程体系设计', desc: '从零构建课程大纲、标准课件、实操手册与案例库。', tags: ['Curriculum','SOP'] },
  { number: '05', title: '企业培训交付', desc: '需求分析、定制方案、现场教学、复盘和后续辅导。', tags: ['Delivery','Review'] },
  { number: '06', title: '闭环教学', desc: '理论、案例、实操、反馈四步闭环，推动学员独立产出。', tags: ['Practice','Feedback'] },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-shell">
        <motion.div className="skills-heading" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}}>
          <span className="section-kicker">CAPABILITIES</span>
          <h2>从创作能力到教学交付</h2>
          <div className="skills-stat"><strong>4</strong><span>年 AI 视频实践</span></div>
          <div className="skills-stat"><strong>30+</strong><span>企业学员</span></div>
          <div className="skills-stat"><strong>10+</strong><span>核心工具</span></div>
        </motion.div>

        <div className="skills-list">
        {skills.map((s,i) => (
          <motion.article key={i} className="skill-row"
            initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            transition={{duration:0.4,delay:i*0.08}}>
            <span className="skill-number">{s.number}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div>{s.tags.map(t => <span key={t}>{t}</span>)}</div>
          </motion.article>
        ))}
        </div>
      </div>

      <style>{`
        .skills-section { padding:110px 40px; background:#000; }
        .skills-shell { width:min(1200px,100%); margin:0 auto; }
        .skills-heading { display:grid; grid-template-columns:2fr repeat(3,.55fr); gap:24px; align-items:end; padding-bottom:42px; }
        .skills-heading .section-kicker { grid-column:1/-1; }
        .skills-heading h2 { font-size:clamp(2.2rem,4vw,4.2rem); line-height:1; }
        .skills-stat { display:flex; flex-direction:column; gap:5px; padding-left:18px; border-left:1px solid rgba(255,255,255,.18); }
        .skills-stat strong { font-family:var(--font-heading); font-style:italic; font-size:2.2rem; font-weight:400; }
        .skills-stat span { font-size:.72rem; color:var(--text-secondary); }
        .skills-list { border-top:1px solid rgba(255,255,255,.18); }
        .skill-row { display:grid; grid-template-columns:70px 1fr 1.4fr .7fr; gap:24px; align-items:center; min-height:118px; border-bottom:1px solid rgba(255,255,255,.12); transition:.25s ease; }
        .skill-row:hover { padding-left:12px; background:linear-gradient(90deg,rgba(229,62,62,.08),transparent 60%); }
        .skill-number { font-family:var(--font-heading); font-style:italic; font-size:1.2rem; color:var(--accent); }
        .skill-row h3 { font-size:1.08rem; font-weight:550; }
        .skill-row p { font-size:.86rem; color:var(--text-secondary); line-height:1.65; }
        .skill-row div { display:flex; flex-wrap:wrap; gap:6px 12px; justify-content:flex-end; }
        .skill-row div span { font-size:.7rem; letter-spacing:.08em; color:rgba(255,255,255,.45); text-transform:uppercase; }
        @media (max-width:900px) { .skills-heading { grid-template-columns:repeat(3,1fr); } .skills-heading h2 { grid-column:1/-1; } .skill-row { grid-template-columns:44px 1fr; padding:22px 0; } .skill-row p,.skill-row div { grid-column:2; justify-content:flex-start; } }
        @media (max-width:600px) { .skills-section { padding:80px 20px; } .skills-heading { gap:18px 8px; } .skills-stat { padding-left:10px; } .skills-stat strong { font-size:1.7rem; } }
      `}</style>
    </section>
  );
}
