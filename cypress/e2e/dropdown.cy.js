import DropdownPage from '../page_objects/DropdownPage';

describe('Funcionalidad de Dropdown', () => {

    // Antes de cada prueba, visitamos la página
    beforeEach(() => {
        cy.visit('/dropdown');
    });

    it('Debería seleccionar la Opción 1 correctamente', () => {
        // 1. Ejecutamos la acción de seleccionar la opción
        DropdownPage.selectOption('1');

        // 2. Validación (Aserción - Punto clave)
        // Verificamos que el valor seleccionado (Option 1) sea el correcto.
        DropdownPage.getDropdownMenu()
            .should('have.value', '1'); 
    });

    it('Debería seleccionar la Opción 2 correctamente', () => {
        // 1. Ejecutamos la acción de seleccionar la opción
        DropdownPage.selectOption('2');

        // 2. Validación (Aserción)
        // Verificamos que el valor seleccionado (Option 2) sea el correcto.
        DropdownPage.getDropdownMenu()
            .should('have.value', '2');
    });

});