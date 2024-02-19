import Cadastro from '../support/pages/Pratice';
import Pagina from '../support/pages/Pagina';

describe('Cadastrar duas formas de fazer login', () => {

  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl1'));

  });
  it('Login com Sucesso pela barra da pagina', () => {
    Cadastro.preencherCadastro();
    Cadastro.validarCadastro();

  })

  it('Fazer login na pagina ', () => {

    Pagina.acessarPagina();
    Pagina.resultadoEsperado();

  })  

  it('Adcionando detalhes da conta', () => {
    Pagina.acessarPagina();
    Pagina.detalhesdaConta();
    Pagina.updateInformation();
    Pagina.validarUpdate();
  });

  

})

//function criarLogin(descrição,valor)