import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hieronymus's Blog",
  description: "Hieronymus's Blog powered by VitePress",
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.svg',
    siteTitle: "Hieronymus's Blog",
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'info',
        items: [
          { text: 'Self-introducing', link: '/Self-introducing' },
        ]
      },
      {
        text: 'Dairy',
        items: [
          { text: '2025/10/12', link: '/20251012' },
        ]
      }
    ],

    /*socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]*/
  }
})
