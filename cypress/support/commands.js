// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// Comando personalizado para iniciar sesión
//
Cypress.Commands.add('login', (username, password) => {
    // 1. Visitar la página de login
    cy.visit('/login') // <--- Debe estar aquí dentro

    // 2. Escribir nombre de usuario
    cy.get('#username').type(username) 

    // 3. Escribir contraseña
    cy.get('#password').type(password)

    // 4. Clic en el botón de login
    cy.get('[type="submit"]').click()
}) // <--- Asegúrate de que este paréntesis esté aquí