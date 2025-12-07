class BasePage {
    /**
     * Método para navegar a una URL específica de forma segura.
     * @param {string} path - El camino relativo o la URL completa a visitar.
     */
    visit(path) {
        cy.visit(path);
    }

    /**
     * Agrega aquí cualquier método común, como:
     * - getErrorMessage()
     * - acceptCookies()
     */
}

export default BasePage; // Exportamos la clase, NO una instancia