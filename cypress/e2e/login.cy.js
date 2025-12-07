import LoginPage from '../page_objects/LoginPage';

describe('Funcionalidad de Login (USANDO POM con Herencia)', () => {
    
    it('Debería loguearse exitosamente con credenciales válidas', () => {
        // MODIFICADO: Usamos el método 'visit' heredado del BasePage
        LoginPage.visit('/login'); 

        // Usamos cy.fixture() para cargar los datos del JSON
        cy.fixture('credentials').then((user) => { 
            // Ejecutamos el Custom Command usando los datos del fixture
            cy.login(user.username, user.password)
        })

        // Validación Final: El mensaje de éxito es visible
        cy.contains('You logged into a secure area!').should('be.visible')
        cy.contains('Logout').should('be.visible')
    })

    it('Debería fallar con credenciales inválidas', () => {
        // MODIFICADO: Usamos el método 'visit' heredado del BasePage
        LoginPage.visit('/login');

        // Usamos el Page Object para las acciones
        LoginPage.performLogin('usuario_malo', 'pass_malo');

        // Validación (Aserción)
        cy.contains('Your username is invalid!').should('be.visible')
    })
})