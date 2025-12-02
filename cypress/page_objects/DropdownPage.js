class DropdownPage {
    // 1. Definición de Selectores
    // El elemento select tiene el ID: #dropdown
    getDropdownMenu() {
        return cy.get('#dropdown');
    }

    // 2. Definición de Acciones
    // Usamos el método .select() de Cypress
    selectOption(optionValue) {
        this.getDropdownMenu().select(optionValue);
    }
}

// Exportamos la clase para poder usarla en nuestros tests
export default new DropdownPage();