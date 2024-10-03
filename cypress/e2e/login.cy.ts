describe('Login', () => {

    beforeEach(() => {
        cy.viewport(1920, 1080)
    })

    it('Login na aplicação com sucesso', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('[id="username"]').type('tomsmith')
        cy.get('[id="password"]').type('SuperSecretPassword!')
        cy.get('[type="submit"]').click()
        cy.get('[class="flash success"]')
            .should('be.visible')
            .and('contain.text', 'You logged into a secure area!')
        cy.contains('div', 'Secure Area').should('be.visible')
    })

    it('Logout da aplicação', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('[id="username"]').type('tomsmith')
        cy.get('[id="password"]').type('SuperSecretPassword!')
        cy.get('[type="submit"]').click()
        cy.get('[class="button secondary radius"]').click()
        cy.get('[class="flash success"]')
            .should('be.visible')
            .and('contain.text', 'You logged out of the secure area!')
        cy.url().should('eq', 'https://the-internet.herokuapp.com/login')
    })

    it('Tentar login com usuário inválido', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('[id="username"]').type('tom')
        cy.get('[id="password"]').type('SuperSecretPassword!')
        cy.get('[type="submit"]').click()
        cy.get('[class="flash error"]')
            .should('be.visible')
            .and('contain.text', 'Your username is invalid!')
    })

    it('Tentar login com senha inválida', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('[id="username"]').type('tomsmith')
        cy.get('[id="password"]').type('Super')
        cy.get('[type="submit"]').click()
        cy.get('[class="flash error"]')
            .should('be.visible')
            .and('contain.text', 'Your password is invalid!')
    })

    it('Tentar login com usuário/senha inválida', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('[id="username"]').type('tom')
        cy.get('[id="password"]').type('Super')
        cy.get('[type="submit"]').click()
        cy.get('[class="flash error"]')
            .should('be.visible')
            .and('contain.text', 'Your username/password is invalid!')
    })
})