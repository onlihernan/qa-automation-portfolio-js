const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // ESTA ES LA LINEA CLAVE: Le dice a Cypress dónde está la app.
    baseUrl: 'https://the-internet.herokuapp.com', 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})