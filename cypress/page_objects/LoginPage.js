class LoginPage {
    // 1. Definición de Selectores (Dónde está el elemento)
    getUserNameField() {
        return cy.get('#username')
    }

    getPasswordField() {
        return cy.get('#password')
    }

    getSubmitButton() {
        return cy.get('[type="submit"]')
    }

    getFlashMessage() {
        return cy.get('#flash')
    }

    // 2. Definición de Acciones (Qué hacer con el elemento)
    performLogin(username, password) {
        this.getUserNameField().type(username)
        this.getPasswordField().type(password)
        this.getSubmitButton().click()
    }
}

// Exportamos la clase
export default new LoginPage()