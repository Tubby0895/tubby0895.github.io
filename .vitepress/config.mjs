import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Video Downloader Professional",
  description: "The fastest and easiest video downloader to download videos from any website.",
  cleanUrls: true,
  themeConfig: {
    logo: '/logo-64x64.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'How to Use', link: '/how-to-use/download-youtube-videos' }
    ],

    sidebar: [
      {
        text: 'How to use',
        items: [
          { text: 'Download Youtube video', link: '/how-to-use/download-youtube-videos' },
        ]
      }
    ],

    socialLinks: [
    ],
    footer: {
      message: 'Video Downloader Professional',
      copyright: 'Copyright © 2023-present'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/logo-64x64.png' }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-JSWTZSCX9J' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-JSWTZSCX9J');`
    ]
  ]
})
