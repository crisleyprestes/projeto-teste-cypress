declare namespace Cypress {
    interface Chainable<Subject = any> {
        acessaUrl(url: string): void
        deslogar(): void
        fazerLogout(): void
        login(username: string, password: string): void
        loginComSucesso(username: string, password: string): void
        validaLogin(mensagem: string): void
        validaLogout(mensagem: string): void
        validaMensagemErro(mensagem: string): void
    }
}