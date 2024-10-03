import {locators} from "./locators";
import {mensagem, tituloPagina, url} from "./constantes";

Cypress.Commands.add('login', (username, password) => {
    cy.visit(url.paginaInicial)
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

Cypress.Commands.add('fazerLogout', () => {
    cy.get(locators.paginaPrincipal.botaoLogout).click()
})