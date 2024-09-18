// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: '아주대 공지사항 API',
      locales: {
        root: {
          label: '한국어',
          lang: 'ko',
        },
      },
      logo: {
        src: './src/assets/ajou.webp',
      },
      social: {
        github: 'https://github.com/asitisdev/ajou-notice',
      },
      sidebar: [
        {
          label: 'API 문서',
          autogenerate: { directory: 'api' },
        },
        {
          label: '알림봇',
          autogenerate: { directory: 'bot' },
        },
      ],
      customCss: ['./src/index.css'],
    }),
  ],
});
