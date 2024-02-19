import { conta, update,info,elem } from '../Pagina/elements'


class Pagina {

    acessarPagina(){
    cy.get(elem.login)
    .click();
    cy.get(elem.user)
    .type('deborasampaio73@gmail.com')
    cy.get(elem.password)
    .type('123456')
    cy.get(elem.confirm)
    .click()
    cy.get(elem.check)
    .click()
    }

    resultadoEsperado(){
        cy.get(elem.title)
        .should('be.visible')
        .should('have.text', 'Login realizado');

        cy.get(elem.check)
        .as('confirmButton');
        cy.get(elem.validation)
        
    }    

    detalhesdaConta(){
        cy.get(conta.account)
        .should('have.text','Account details')
        .click()
        
        cy.get(conta.firstname)
        .invoke('removeAttr', 'readonly')
        .clear()
        .type('Rafinha');

        // cy.get('input[name="first-name"]')
        // .focus()
        // .type('Rafinha Bastos',{ delay: 100 })

        cy.get(conta.lastname)
        .invoke('removeAttr', 'readonly')
        .clear()
        .type('Bastos araujo')
        
        cy.get(conta.email)
        .invoke('removeAttr', 'readonly')
        .clear()
        .type('rafa_araujo87@gmail.com')

      
        cy.get(conta.password)
        .invoke('removeAttr', 'readonly')
        .clear()
        .type('123456')

        cy.get(conta.birthday)
        .invoke('removeAttr', 'readonly')
        .clear()
        .type('1987-05-15')

        cy.get(conta.sign)
        .click()
    }
        
    updateInformation(){
        cy.get(info.update)
        
    }
        

    validarUpdate(){
        cy.get(update.updateaccount)
        cy.get(update.validation)
        .should('exist')
            
    }

}

export default new Pagina();