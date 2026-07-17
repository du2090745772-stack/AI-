export const works = [
  { video: `${import.meta.env.BASE_URL}work-01.m4v`, title: '角色设定与动作测试', description: 'CG / 角色' },
  { video: `${import.meta.env.BASE_URL}work-02.m4v`, title: '灾变场景与特效设计', description: 'CG / 特效' },
  { video: `${import.meta.env.BASE_URL}work-03.m4v`, title: '东方幻想角色镜头', description: 'CG / 角色' },
  { video: `${import.meta.env.BASE_URL}work-04.m4v`, title: '食品广告视觉实验', description: '广告片 / 食品' },
  { video: `${import.meta.env.BASE_URL}work-05.m4v`, title: '产品氛围与景别控制', description: '广告片 / 食品' },
  { video: `${import.meta.env.BASE_URL}work-06.m4v`, title: '叙事型短片镜头', description: '广告片 / 叙事' },
  { video: `${import.meta.env.BASE_URL}work-07.m4v`, title: '真人短剧场景', description: '漫剧 / 真人' },
  { video: `${import.meta.env.BASE_URL}work-08.m4v`, title: '动画短剧分镜', description: '漫剧 / 动画' }
];

export const workGroups = [works.slice(0, 3), works.slice(3, 6), works.slice(6)];
