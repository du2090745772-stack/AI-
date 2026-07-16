import { motion } from 'motion/react';

const reels = [
  {
    src: '/reel-01.mp4',
    index: '01',
    title: '能量场景构建',
    note: '氛围、光效与环境叙事',
  },
  {
    src: '/reel-02.mp4',
    index: '02',
    title: '角色特写控制',
    note: '角色一致性与情绪表达',
  },
  {
    src: '/reel-03.mp4',
    index: '03',
    title: '动态镜头设计',
    note: '运镜、动作与节奏编排',
  },
];

export default function VideoReel() {
  return (
    <section id="reel" className="reel-section">
      <div className="reel-heading">
        <div>
          <span className="section-kicker">SELECTED MOTION</span>
          <h2>把想象力变成可控的动态画面</h2>
        </div>
        <p>三段 AI 动画实践，覆盖场景、角色和镜头三个关键环节。</p>
      </div>

      <div className="reel-grid">
        {reels.map((reel, index) => (
          <motion.article
            key={reel.src}
            className={`reel-item reel-item-${index + 1}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <video autoPlay muted loop playsInline preload="metadata">
              <source src={reel.src} type="video/mp4" />
            </video>
            <div className="reel-shade" />
            <div className="reel-meta">
              <span>{reel.index}</span>
              <div>
                <h3>{reel.title}</h3>
                <p>{reel.note}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
