import ContactPage from '../page_objects/ContactPage';

describe('Funcionalidad de Formulario de Contacto', () => {

    beforeEach(() => {
        // Ignoramos baseUrl para ir a la página de prueba de formularios
        cy.visit('https://testpages.herokuapp.com/styled/basic-html-form-test.html'); 
    });

    it('Debería llenar y enviar el formulario correctamente usando Fixtures', () => {
        // Cargamos el fixture 'contact.json'
        cy.fixture('contact').then((data) => {
            // 1. Usar el Page Object con los datos del JSON
            ContactPage.fillForm(data.name, data.password, data.message);

            // 2. Validación (Aserción)
            // Verificamos que los datos aparezcan en la pantalla de éxito
            cy.contains(data.message).should('be.visible');
            cy.contains(data.name).should('be.visible');
        });
    });

});