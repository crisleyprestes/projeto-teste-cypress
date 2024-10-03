declare namespace Cypress {
    interface Chainable<Subject = any> {
        fazerLogout(): void
        login(username: string, password: string): void
        loginComSucesso(username: string, password: string): void
    }
}