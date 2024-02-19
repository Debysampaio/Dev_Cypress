//ações de interações com a pagina

const elem = require('./elements').elem

class Logon {
    
    preencherTransacao(descricao, valor){
        cy.get(elem.buttonLogin)
        .click();
        cy.get('#description').type(descricao);
        cy.get('#amount').type(valor);
        cy.get('#date').type('2023-08-16'); //ano-mes-dia
        cy.get('button').click();
    } 
}

export default new Logon();