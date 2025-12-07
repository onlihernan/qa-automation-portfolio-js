class ContactPage {
    // 1. Definición de Selectores (Correctos para testpages.herokuapp.com)
    
    getUserNameField() {
        // El selector correcto en esta página es por el atributo 'name'
        return cy.get('input[name="username"]');
    }

    getPasswordField() {
        return cy.get('input[name="password"]');
    }

    getMessageField() {
        return cy.get('textarea[name="comments"]');
    }

    getSubmitButton() {
        return cy.get('input[type="submit"]');
    }

    // 2. Definición de Acciones
    fillForm(name, password, message) {
        // Usamos los métodos que acabamos de definir
        this.getUserNameField().type(name);
        this.getPasswordField().type(password);
        this.getMessageField().clear().type(message); 
        this.getSubmitButton().click();
    }
}

// Exportamos la nueva versión de la clase
export default new ContactPage();