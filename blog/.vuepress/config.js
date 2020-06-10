// .vuepress/config.js
module.exports = {
  theme: 'blog-vuetify',
  title: 'A demo site',
  description: 'This is a blog about cats and nothing else.',
  markdown: {
    lineNumbers: true,
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        type: 'image/png',
      },
    ],
  ],
  themeConfig: {
    globalPagination: {
      lengthPerPage: 3,
    },
    titleHtml: `<i class="fas fa-cat mr-2"></i><strong>just a test site with cats</strong>`,
    sidebar: {
      profile: {
        avatarUrl: 'https://avatars1.githubusercontent.com/u/9496430?s=460&v=4',
        name: '_dkaramazov_',
        subTitle: 'Web Programmer',
        descriptionHtml: '<strong>web</strong> programmer cat.',
      },
      additionalBlocks: [
        {
          title: 'Pages',
          links: [{ label: 'PROFILE', path: '/profile' }],
        },
      ],
    },
    footer: {
      links: [{ label: 'PROFILE', path: '/profile' }],
    },
    sns: {
      twitter: 'https://twitter.com/dkaramazov',
      github: 'https://github.com/dkaramazov/vuepress-vuetify-blog/',
      feed: '',
    },
    summary: 300,
    dateFormat: 'MM/DD/YYYY',
    components: {
      afterPage: 'MyAfterPage',
    },
  },
  plugins: [
    [
      'register-components',
      {
        componentsDir: 'components',
      },
    ],
  ],
};
