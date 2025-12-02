import LoginPage from '../page_objects/LoginPage' 

describe('Funcionalidad de Login (USANDO POM)', () => {
    
    it('Debería loguearse exitosamente con credenciales válidas', () => {
        // AHORA SI: El log está DENTRO del it
        const API_URL = Cypress.env('userAPI')
        cy.log('La URL de la API para pruebas es: ' + API_URL)

        // IMPORTANTE: Revisa si tu archivo en 'fixtures' se llama 'user.json' o 'credentials.json'
        // Si se llama 'credentials.json', cambia 'user' por 'credentials' aquí abajo:
        cy.fixture('credentials').then((user) => {
            cy.visit('/login') 
            
            LoginPage.performLogin(user.username, user.password) 
            
            LoginPage.getFlashMessage().should('contain', 'You logged into a secure area!')
            cy.contains('Logout').should('be.visible')
        })
    })

    it('Debería fallar con credenciales inválidas', () => {
        cy.visit('/login') 
        LoginPage.performLogin('user_invalido', 'password_invalida')
        LoginPage.getFlashMessage().should('contain', 'Your username is invalid!')
    })
})