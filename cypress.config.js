const { defineConfig } = require('cypress');

module.exports = defineConfig({
  // CONFIGURACIÓN DEL REPORTE MOCHAWESOME
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/html', // Donde se guardará el reporte
    overwrite: true,                   // Sobreescribe el reporte anterior
    html: true,                        // Genera el HTML (el reporte gráfico)
    json: false,                       // Desactiva la generación del JSON de datos
    charts: true,                      // Incluye gráficos circulares de Pass/Fail
    reportPageTitle: 'Portafolio QA - Reporte Final', // Título del reporte
    embeddedScreenshots: true,         // Incrusta capturas de pantalla en el reporte
    inlineAssets: true,
  },

  // CONFIGURACIÓN E2E
  e2e: {
    // La función que Cypress usa para cargar plugins/configuración personalizada
    setupNodeEvents(on, config) {
      // Importamos el plugin de Mochawesome para que Cypress lo use
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },

    // URL base de tu aplicación
    baseUrl: 'https://the-internet.herokuapp.com',
  },
});