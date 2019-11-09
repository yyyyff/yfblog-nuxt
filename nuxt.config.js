module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "yfblog",
    titleTemplate: "%s | 恍如初年",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1,user-scalable=no"
      },
      { hid: "description", name: "description", content: "一个个人博客" },
      {
        hid: "keywrod",
        name: "keywrod",
        content: "javascript,vue,react,nuxt,next,前端开发"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    'normalize.css/normalize.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
