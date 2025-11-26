describe('Funcionalidad de Login', () => {
    it('Debería loguearse exitosamente con credenciales válidas', () => {
    // Usamos cy.fixture() para cargar los datos del JSON
    cy.fixture('user').then((user) => {
        // Ejecutamos el Custom Command usando los datos del fixture
        cy.login(user.username, user.password)
    })

    // Validación Final: El mensaje de éxito es visible
    cy.contains('You logged into a secure area!').should('be.visible')
    cy.contains('Logout').should('be.visible')
})

    it('Debería mostrar un error con credenciales inválidas', () => {
        // 1. Visitar la página de Login
        cy.visit('https://the-internet.herokuapp.com/login')

        // 2. Escribir nombre de usuario INVÁLIDO
        cy.get('#username').type('usuario_malo')

        // 3. Escribir contraseña INVÁLIDA
        cy.get('#password').type('pass_malo')

        // 4. Clic en el botón de Login
        cy.get('button[type="submit"]').click()

        // 5. Validación (Aserción - ¡Punto clave!)
        // En lugar de buscar el mensaje de éxito, buscamos el mensaje de error que debe aparecer
        cy.contains('Your username is invalid!').should('be.visible')
    })
  })