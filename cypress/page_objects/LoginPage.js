import BasePage from './BasePage'; // <--- AÑADIDO: Importamos la clase padre

// MODIFICADO: Hacemos que LoginPage herede de BasePage
class LoginPage extends BasePage { 
    // 1. Definición de Selectores (Dónde está el elemento)
    getUserNameField() {
        return cy.get('#username');
    }

    getPasswordField() {
        return cy.get('#password');
    }

    getLoginButton() {
        return cy.get('button[type="submit"]');
    }

    // 2. Definición de Acciones (Métodos)
    performLogin(username, password) {
        this.getUserNameField().type(username);
        this.getPasswordField().type(password);
        this.getLoginButton().click();
    }
}

export default new LoginPage();