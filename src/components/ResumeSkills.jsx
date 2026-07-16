import { motion } from 'motion/react';
import FadingVideo from './FadingVideo';

const groups = [
  {
    title: '大语言模型',
    tags: ['GPT-4o', 'GPT-4.5', 'GPT-3.5', 'Claude 4', 'Claude 3.5', 'Gemini Ultra', 'Grok 3', 'Qwen 通义千问', 'Llama 4', 'Llama 3', 'Kimi / 月之暗面', 'MiniMax', 'DeepSeek', 'GLM', 'Mistral', 'Yi 大模型'],
  },
  {
    title: 'AI 图像生成',
    tags: ['Midjourney V7', 'GPT Image', 'Flux Max', 'Flux 系列', 'Ideogram 3', 'Stable Image Ultra', 'Stable Diffusion', 'SDXL', 'SD3', 'Playground v3', 'CogView', 'AuraFlow', '通义万相', 'PixArt-α', 'InstantID'],
  },
  {
    title: 'AI 视频生成',
    tags: ['Sora', 'Runway Gen-3', 'Pika 3.0', 'Luma Dream Machine', '可灵 Kling', '海螺 Hailuo', 'Vidu', 'Open-Sora', 'CogVideoX', 'VideoCrafter', 'AnimateDiff', 'Stable Video'],
  },
];

export default function ResumeSkills() {
  return (
    <section id="about" className="resume-skills-page">
      <FadingVideo src="/hero-bg.mp4" className="resume-page-video" />
      <div className="resume-page-vignette" />
      <div className="resume-skills-content">
        <motion.div className="resume-section-heading"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="resume-kicker">01 / 专业技能</span>
          <h2>专业技能</h2>
          <p>覆盖大模型应用、AI 生成和 Agent 自动化的完整工具链。</p>
        </motion.div>

        <div className="resume-skill-groups">
          {groups.map((group, index) => (
            <motion.article key={group.title} className="resume-skill-group liquid-glass hover-text-card"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}>
              <div className="resume-skill-group-top">
                <span>AI / {String(index + 1).padStart(2, '0')}</span>
                <h3 className="hover-scale-text">{group.title}</h3>
              </div>
              <div className="resume-tags">
                {group.tags.map(tag => <span className="hover-scale-text" key={tag}>{tag}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
