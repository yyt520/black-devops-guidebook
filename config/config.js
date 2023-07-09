const config = {
  mode: 'site',
  title: 'DevOps Guidebook',
  description: 'DevOps 完全知识体系',
  base: '/black-devops-guidebook/',
  publicPath: '/black-devops-guidebook/',
  favicon: './favicon.ico',
  logo: 'http://img.mrsingsing.com/devops-icon.png',
  exportStatic: {},
  dynamicImport: {},
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/yyt520/black-devops-guidebook',
    },
  ],
};

if (process.env.NODE_ENV !== 'development') {
  config.ssr = {};
}

export default config