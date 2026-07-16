import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const projects = [
  { id: 1, number: '01', title: 'AI 漫剧完整工作流', subtitle: 'SCRIPT TO SCREEN', desc: '从剧本拆解、角色设定、分镜设计到动态生成与后期合成，建立可复用、可量产的 AI 漫剧制作流程。', tags: ['剧本拆解','角色一致性','动态分镜','后期合成'], accent: '#f0a84b', video: '/reel-01.mp4' },
  { id: 2, number: '02', title: '角色与风格控制', subtitle: 'CHARACTER SYSTEM', desc: '围绕角色特征、光影语言和画面风格设计提示词体系，让连续镜头中的人物和美术方向保持稳定。', tags: ['角色特写','风格控制','光影设计','一致性'], accent: '#d16b4b', video: '/reel-02.mp4' },
  { id: 3, number: '03', title: '动态镜头与节奏', subtitle: 'MOTION DIRECTION', desc: '将运镜、动作幅度、速度变化和情绪节奏拆成可执行指令，提升 AI 视频的叙事张力与完成度。', tags: ['镜头语言','动作设计','节奏控制','迭代优化'], accent: '#55b7a8', video: '/reel-03.mp4' },
];

export default function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find(p => p.id === activeId);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-shell">
        <motion.div className="projects-heading" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}}>
          <span className="section-kicker">WORKFLOW / 01—03</span>
          <h2>不仅会用工具，更能搭建生产体系</h2>
          <p>把复杂的创作流程拆成清晰步骤，让个人创作和团队培训都能稳定落地。</p>
        </motion.div>

        <div className="projects-layout">
          <div className="projects-index">
            {projects.map(p => (
              <button key={p.id} className={`projects-index-item ${activeId === p.id ? 'active' : ''}`}
                style={{'--tab':p.accent}} onClick={() => setActiveId(p.id)}>
                <span>{p.number}</span>
                <strong>{p.title}</strong>
                <i>↗</i>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {active && (
              <motion.article key={active.id} className="projects-feature"
                initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} transition={{duration:0.32}}>
                <div className="projects-video">
                  <video autoPlay muted loop playsInline preload="metadata">
                    <source src={active.video} type="video/mp4" />
                  </video>
                  <div className="projects-video-shade" />
                  <span className="projects-video-label">AI MOTION STUDY · {active.number}</span>
                </div>
                <div className="projects-copy">
                  <span className="projects-sub" style={{color:active.accent}}>{active.subtitle}</span>
                  <h3>{active.title}</h3>
                  <p>{active.desc}</p>
                  <div className="projects-tags">
                    {active.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </motion.article>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        .projects-section { background:#070707; padding:110px 40px; }
        .projects-shell { width:min(1200px,100%); margin:0 auto; }
        .projects-heading { display:grid; grid-template-columns:1.15fr .85fr; gap:36px; align-items:end; margin-bottom:52px; }
        .projects-heading .section-kicker { grid-column:1/-1; }
        .projects-heading h2 { font-size:clamp(2.2rem,4.5vw,4.7rem); line-height:.98; max-width:760px; }
        .projects-heading p { color:var(--text-secondary); line-height:1.75; max-width:430px; justify-self:end; }
        .projects-layout { display:grid; grid-template-columns:300px 1fr; gap:30px; align-items:start; }
        .projects-index { border-top:1px solid rgba(255,255,255,.16); }
        .projects-index-item { width:100%; display:grid; grid-template-columns:38px 1fr 20px; gap:10px; align-items:center; min-height:86px; padding:0 8px; background:transparent; border:0; border-bottom:1px solid rgba(255,255,255,.12); color:rgba(255,255,255,.48); text-align:left; cursor:pointer; font-family:inherit; transition:.25s ease; }
        .projects-index-item span { font-family:var(--font-heading); font-style:italic; font-size:1.15rem; }
        .projects-index-item strong { font-size:.92rem; font-weight:500; }
        .projects-index-item i { font-style:normal; opacity:0; transform:translate(-6px,6px); transition:.25s ease; }
        .projects-index-item:hover,.projects-index-item.active { color:#fff; }
        .projects-index-item.active { box-shadow:inset 3px 0 0 var(--tab); padding-left:18px; }
        .projects-index-item.active i { opacity:1; transform:none; color:var(--tab); }
        .projects-feature { min-width:0; }
        .projects-video { position:relative; width:100%; height:clamp(360px,50vw,620px); overflow:hidden; background:#111; }
        .projects-video video { width:100%; height:100%; object-fit:cover; object-position:center; }
        .projects-video-shade { position:absolute; inset:0; background:linear-gradient(180deg,transparent 55%,rgba(0,0,0,.72)); }
        .projects-video-label { position:absolute; left:22px; bottom:20px; font-size:.7rem; letter-spacing:.16em; color:rgba(255,255,255,.72); }
        .projects-copy { display:grid; grid-template-columns:.65fr 1.35fr; gap:14px 34px; padding:28px 0 0; }
        .projects-sub { font-size:.72rem; font-weight:600; letter-spacing:.14em; }
        .projects-copy h3 { font-size:clamp(1.65rem,3vw,2.8rem); font-weight:600; }
        .projects-copy p { grid-column:2; color:var(--text-secondary); line-height:1.75; max-width:650px; }
        .projects-tags { grid-column:2; display:flex; flex-wrap:wrap; gap:8px 18px; }
        .projects-tags span { font-size:.78rem; color:rgba(255,255,255,.72); }
        .projects-tags span::before { content:'+'; color:var(--accent); margin-right:6px; }
        @media (max-width:900px) { .projects-heading { grid-template-columns:1fr; } .projects-heading p { justify-self:start; } .projects-layout { grid-template-columns:1fr; } .projects-index { display:grid; grid-template-columns:repeat(3,1fr); } .projects-index-item { border-left:0; min-height:74px; } .projects-index-item i { display:none; } }
        @media (max-width:620px) { .projects-section { padding:80px 20px; } .projects-index { grid-template-columns:1fr; } .projects-video { height:480px; } .projects-copy { grid-template-columns:1fr; } .projects-copy p,.projects-tags { grid-column:1; } }
      `}</style>
    </section>
  );
}
