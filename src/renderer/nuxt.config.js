/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */


module.exports = {
  mode: 'spa', // or 'universal'
  head: {
    title: require("../../package.json").name
  },
  loading: false,
  plugins: [
    
    
    
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
  ],
  modules: [
    
  ],

  vuetify: {
    customVariables: ["~/assets/scss/abstracts/_variables.scss"],
    treeShake: true,
    options: {
      customProperties: true,
    },
  },
};
