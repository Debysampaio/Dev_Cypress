const elem = require('./elements').elem;

class Cadastro {
   
   preencherCadastro(){     
    cy.get(elem.header)
    .click()
    cy.get(elem.control)
    .type('deborasampaio73@gmail.com {enter}')
    cy.get(elem.clear)
    .click
    }

    validarCadastro(){
    cy.get(elem.title)
    .should('have.text','Success')
    cy.get(elem.confirm)
    .click()
    }

    

}

export default new Cadastro();
