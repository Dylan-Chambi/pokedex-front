/// <reference types="cypress" />

describe('example pokedex app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Register trainer', () => {

        cy.get('#nombre').type('Ash');
        cy.get('#codigo').type('1351');
        cy.get('#id_pokemon').type('13');

        cy.get('#btn-logging').click();


        //cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
        //cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
    })

})
