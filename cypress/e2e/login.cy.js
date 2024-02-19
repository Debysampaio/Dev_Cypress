import Logon from '../support/pages/Logon';
import Cadastro from'../support/pages/Cadastro';


describe('Fazer transações no site Devfinance', () => {
  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl2'));

  });



  it('Cadastrar uma entrada', () => {
    Logon.preencherTransacao('Restaurante',250)
    Logon.preencherTransacao('Cinema',350)
    Logon.preencherTransacao('Shopping',500)
    
  });

   it('Cadastrar uma saida', () => {
   Cadastro.fazerCadastro('Cinema', -70);
   Cadastro.validarCadastro()

   });
});


// function criarTransação(descrição, valor) {
//   cy.contains('Nova Transação').click();
//   cy.get('#transaction > .button').click()
//   cy.get("a[class='button new']").click()
//   cy.get('#description').type(descrição);
//   cy.get('#amount').type(valor);
//   cy.get('#date').type('2023-08-16'); //ano-mes-dia
//   cy.get('button').click();}
// 
