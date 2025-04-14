// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/leaflet',
    '@vueuse/motion/nuxt',
    '@vueuse/nuxt',
    'dayjs-nuxt',
    'nuxt-zod-i18n'
  ],
  css: ['~/assets/css/main.css'],

  googleFonts: {
    families: {
      Outfit: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    }
  },
  icon: {
    clientBundle: {
      scan: true
    }
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'id', name: 'Indonesia', file: 'id.json' }
    ],
    bundle: {
      optimizeTranslationDirective: false
    }
  },
  motion: {
    directives: {
      'fade-right': {
        initial: {
          opacity: 0,
          translate: '-50px, 0px'
        },
        visibleOnce: {
          opacity: 1,
          translate: '0px, 0px'
        }
      },
      'fade-left': {
        initial: {
          opacity: 0,
          translate: '50px, 0px'
        },
        visibleOnce: {
          opacity: 1,
          translate: '0px, 0px'
        }
      },
      'fade-up': {
        initial: {
          opacity: 0,
          translate: '0px, 50px'
        },
        visibleOnce: {
          opacity: 1,
          translate: '0px, 0px'
        }
      },
      'fade-down': {
        initial: {
          opacity: 0,
          translate: '0px, -50px'
        },
        visibleOnce: {
          opacity: 1,
          translate: '0px, 0px'
        }
      }
    }
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  },
  dayjs: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
    plugins: ['relativeTime', 'utc', 'timezone']
  },

  runtimeConfig: {
    public: {
      emailJS: {
        baseURL: process.env.NUXT_PUBLIC_EMAILJS_BASE_URL,
        serviceID: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
        templateID: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        key: {
          public: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          private: process.env.NUXT_PUBLIC_EMAILJS_PRIVATE_KEY
        }
      }
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
