import { motion } from 'motion/react';

const works = [
  { src: `${import.meta.env.BASE_URL}work-01.m4v`, title: '角色设定与动作测试', category: 'CG / 角色' },
  { src: `${import.meta.env.BASE_URL}work-02.m4v`, title: '灾变场景与特效设计', category: 'CG / 特效' },
  { src: `${import.meta.env.BASE_URL}work-03.m4v`, title: '东方幻想角色镜头', category: 'CG / 角色' },
  { src: `${import.meta.env.BASE_URL}work-04.m4v`, title: '食品广告视觉实验', category: '广告片 / 食品' },
  { src: `${import.meta.env.BASE_URL}work-05.m4v`, title: '产品氛围与景别控制', category: '广告片 / 食品' },
  { src: `${import.meta.env.BASE_URL}work-06.m4v`, title: '叙事型短片镜头', category: '广告片 / 叙事' },
  { src: `${import.meta.env.BASE_URL}work-07.m4v`, title: '真人短剧场景', category: '漫剧 / 真人' },
  { src: `${import.meta.env.BASE_URL}work-08.m4v`, title: '动画短剧分镜', category: '漫剧 / 动画' },
];

function WorkCard({ work }) {
  return (
    <article className="work-flow-card">
      <video autoPlay muted loop playsInline preload="metadata">
        <source src={work.src} type="video/mp4" />
      </video>
      <div className="work-flow-shade" />
      <div className="work-flow-meta">
        <span>{work.category}</span>
        <strong>{work.title}</strong>
      </div>
    </article>
  );
}

export default function WorkShowcase() {
  const firstRow = works.slice(0, 4);
  const secondRow = works.slice(4);

  return (
    <section id="works" className="work-showcase-page">
      <div className="work-showcase-heading">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="resume-kicker">05 / 作品集</span>
          <h2>作品不是列表，是一条持续流动的创作线</h2>
        </motion.div>
        <p>从 CG 角色、AI 漫剧到商业广告，记录不同媒介中的生成实验与成片结果。</p>
      </div>

      <div className="work-flow-row work-flow-row-left">
        {firstRow.map(work => <WorkCard work={work} key={work.src} />)}
      </div>
      <div className="work-flow-row work-flow-row-right">
        {secondRow.map(work => <WorkCard work={work} key={work.src} />)}
      </div>
    </section>
  );
}
