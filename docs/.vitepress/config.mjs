import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hieronymus's Blog",
  description: "powered by Vitepress",
  markdown: {
    config: (md) => {
      md.use(mathjax3, {
        tex: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          displayMath: [['$$', '$$'], ['\\[', '\\]']]
        }
      })
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
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
          { text: '2025/12/04', link: '/20251204' },
        ]
      },
      {
        text: 'Milionaire Mind Intensive (MMI)',
        items: [
          { text: 'Passive income', link: '/MMI-1' },
          { text: 'Financial Freedom Formular', link: '/MMI-4' },
          { text: '6 jars', link: '/MMI-2' },
          { text: 'Method for companies', link: '/MMI-3' },
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
          { text: 'Base', link: '/Physics-Lesson-4' },
          { text: 'Force', link: '/Physics-Lesson-1' },
          { text: 'Heat', link: '/Physics-Lesson-3' },
          { text: 'Energy', link: '/Physics-Lesson-5' },
          { text: 'Wave', link: '/Physics-Lesson-6' },
          { text: 'Light', link: '/Physics-Lesson-7' },
          { text: 'Electricity', link: '/Physics-Lesson-8' },
          { text: 'Magnetism', link: '/Physics-Lesson-12' },
        ]
      },
      {
        text: 'O-Level English Notes',
        items: [
          { text: 'Grammar', link: '/English-Lesson-1' },
          { text: 'Letter format', link: '/letter-format' },
          { text: 'HLAI', link: '/HLAI' },
        ]
      }
    ],
  },
})
