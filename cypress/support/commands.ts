import {locators} from "./locators";
import {mensagem, tituloPagina, url} from "./constantes";

Cypress.Commands.add('acessaUrl', (url) => {
    cy.viewport(1920, 1080)
    cy.visit(url)
})

Cypress.Commands.add('deslogar', () => {
    cy.get(locators.paginaPrincipal.botaoLogout).click()

})

Cypress.Commands.add('fazerLogout', () => {
    cy.get(locators.paginaPrincipal.botaoLogout).click()
})

Cypress.Commands.add('login', (username, password) => {
    cy.get(locators.login.campoUsuario).type(username)
    cy.get(locators.login.campoSenha).type(password)
    cy.get(locators.login.botaoLogin).click()
})

Cypress.Commands.add('loginComSucesso', (username, password) => {
    cy.login(username, password)
    cy.get(locators.paginaPrincipal.toastSucesso)
        .should('be.visible')
        .and('contain.text', mensagem.usuarioLogado)
    cy.contains('div', tituloPagina.paginaPrincipal).should('be.visible')
})

Cypress.Commands.add('validaLogin', (mensagem) => {
    cy.get(locators.paginaPrincipal.toastSucesso)
            .should('be.visible')
            .and('contain.text', mensagem)
        cy.contains('div', tituloPagina.paginaPrincipal).should('be.visible')
})

Cypress.Commands.add('validaLogout', (mensagem) => {
    cy.get(locators.login.toastSucesso)
    .should('be.visible')
    .and('contain.text', mensagem)
cy.url().should('eq', url.paginaInicial)
})

Cypress.Commands.add('validaMensagemErro', (mensagem) => {
    cy.get(locators.login.toastErro)
    .should('be.visible')
    .and('contain.text', mensagem)
})