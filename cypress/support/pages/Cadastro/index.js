const elem =require('./elements').elem;

class Cadastro {
    fazerCadastro(descricao,valor){
    cy.get(elem.name).click()
    cy.get(elem.descricao).type(descricao);
    cy.get(elem.valor).type(valor);
    cy.get(elem.data).type('2023-08-16'); //ano-mes-dia
    cy.get(elem.button).click();

    }

    validarCadastro(){
        cy.get(elem.submit).should('have.text', 'Cinema');
    }
}

export default new Cadastro();