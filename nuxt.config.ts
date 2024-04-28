// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
  image: {
    domains: ['<my s3 url>'],
    providers: {
      s3: {
        name: 's3',
        provider: '~/providers/s3.provider.ts',
        options: {
          baseURL: '<my s3 url>'
        }
      }
    },
  },
  runtimeConfig: {
    public: {
      s3ImageBaseURL: '<my s3 url>'
    }
  }
})
