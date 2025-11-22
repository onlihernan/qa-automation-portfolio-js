describe('Navegación Básica', () => {
    it('Debería cargar correctamente la página de inicio', () => {
        // Visita una página web de ejemplo.
        cy.visit('https://example.cypress.io') 

        // Una aserción (validación): verifica que el título tenga el texto esperado.
        cy.contains('Kitchen Sink').should('be.visible')
    })
})