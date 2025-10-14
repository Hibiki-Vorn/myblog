// .vitepress/config.mjs
import { defineConfig } from 'vitepress'
import markdownItMathjax3 from 'markdown-it-mathjax3'

export default defineConfig({
  title: "Hieronymus's Blog",
  description: "Hieronymus's Blog powered by VitePress",
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    // Add MathJax script
    ['script', { 
      src: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
      async: true
    }],
    // MathJax configuration
    ['script', {}, `
      window.MathJax = {
        tex: {
          inlineMath: [['$', '$']],
          displayMath: [['$$', '$$']],
          processEscapes: true,
        },
        startup: {
          pageReady() {
            return MathJax.startup.defaultPageReady();
          }
        }
      };
    `],
  ],
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: "Hieronymus's Blog",
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: 'Info',
        items: [
          { text: 'Self-introducing', link: '/Self-introducing' },
        ]
      },
      {
        text: 'Diary',
        items: [
          { text: '2025/10/12', link: '/20251012' },
        ]
      },
      {
        text: 'O-Level Math Notes',
        items: [
          { text: 'Quadratic', link: '/A-M-1' },
          { text: 'Logarithm', link: '/A-M-2' },
          { text: 'Polynomial', link: '/A-M-3' },
          { text: 'Partial fraction', link: '/A-M-4' },
          { text: 'Geometry', link: '/A-M-5' },
          { text: 'Binomial', link: '/A-M-6' },
          { text: 'Trigonometry', link: '/A-M-7' },
          { text: 'Calculus', link: '/A-M-8' },
        ]
      },
      {
        text: 'O-Level Physics Notes',
        items: [
          { text: 'Force', link: '/Physics-Lesson-1' },
          { text: 'Heat', link: '/Physics-Lesson-3' },
          { text: 'Base', link: '/Physics-Lesson-4' },
          { text: 'Energy', link: '/Physics-Lesson-5' },
          { text: 'Wave', link: '/Physics-Lesson-6' },
          { text: 'Light', link: '/Physics-Lesson-7' },
          { text: 'Electricity', link: '/Physics-Lesson-8' },
          { text: 'Magnetism', link: '/Physics-Lesson-12' },
        ]
      }
    ],
  },
  markdown: {
    config: (md) => {
      // Disable template syntax in markdown
      md.set({ html: true })
      md.disable('html_inline')
      md.disable('html_block')
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => ['mjx-container'].includes(tag)
      }
    }
  }
})
