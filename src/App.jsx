import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ResumeSkills from './components/ResumeSkills'
import CinematicPage from './components/CinematicPage'
import Contact from './components/Contact'
import { works } from './data/works'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="glow-divider" />
      <ResumeSkills />
      <div className="glow-divider" />
      <CinematicPage
        id="awards"
        video={`${import.meta.env.BASE_URL}reel-01.mp4`}
        kicker="02 / 竞赛获奖"
        badge="竞赛与实践 · 用结果证明技术边界"
        title="参与国际 AI 视频生成挑战、ACM 多模态内容生成竞赛、Prompt 工程大赛与开源模型挑战，持续把实验转化为可复用的方法。"
        titleLines={['参与国际 AI 视频生成挑战', 'ACM 多模态内容生成竞赛', 'Prompt 工程与开源模型挑战', '持续把实验转化为可复用的方法']}
        description="每一次尝试，都让技术更接近结果"
        stats={[{ value: '4+', label: '竞赛与挑战经历' }, { value: '100+', label: '模型工具实践' }, { value: '15+', label: '商业项目应用' }]}
        nextId="projects"
        primaryLabel="查看项目经历 →"
      />
      <div className="glow-divider" />
      <CinematicPage
        id="projects"
        video={`${import.meta.env.BASE_URL}reel-02.mp4`}
        kicker="03 / 项目经历"
        badge="项目经历 · 从模型研究到生产平台"
        title="搭建 AI 漫剧全自动生产平台、跨模型 Prompt 工程框架和 AI 视频质量评测标准，覆盖脚本、生成、评测与 Agent 自动化。"
        titleLines={['搭建 AI 漫剧全自动生产平台', '跨模型 Prompt 工程框架', 'AI 视频质量评测标准', '覆盖脚本、生成、评测与 Agent 自动化']}
        description="把模型能力，变成真正能工作的系统"
        stats={[{ value: '红果', label: '上架短剧' }, { value: '50+', label: 'Prompt 工程模板' }, { value: '10W+', label: '内容生产规模' }]}
        nextId="sharing"
        primaryLabel="查看技术分享 →"
      />
      <div className="glow-divider" />
      <CinematicPage
        id="sharing"
        video={`${import.meta.env.BASE_URL}reel-03.mp4`}
        kicker="04 / 技术分享"
        badge="技术分享 · 让复杂技术变成可复用的方法"
        title="持续分享多模态 AI 生成管线、大模型能力对比、AI 漫剧工作流与 Agent 自动化在内容生产中的应用。"
        titleLines={['持续分享多模态 AI 生成管线', '大模型能力对比与 AI 漫剧工作流', 'Agent 自动化在内容生产中的应用']}
        description="从一句话，到一部完整的作品"
        stats={[{ value: '4', label: '年 AI 工程化经验' }, { value: '8+', label: '自动化工作流' }, { value: '50+', label: '技术沉淀与案例' }]}
        works={works}
        nextId="contact"
        primaryLabel="查看资质与联系 →"
      />
      <div className="glow-divider" />
      <Contact />
    </>
  )
}
