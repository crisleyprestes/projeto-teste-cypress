import { erro, mensagem, url, usuario } from "../support/constantes"

describe('Login', () => {

    beforeEach(() => {
        cy.acessaUrl(url.paginaInicial)
    })

    it('Login na aplicação com sucesso', () => {
        cy.login(usuario.nome, usuario.senha)
        cy.validaLogin(mensagem.usuarioLogado)
    })

    it('Logout da aplicação', () => {
        cy.login(usuario.nome, usuario.senha)
        cy.deslogar()
        cy.validaLogout(mensagem.usuarioDeslogado)
    })

    it('Tentar login com usuário inválido', () => {
        cy.login(usuario.nomeInvalido, usuario.senha)
        cy.validaMensagemErro(erro.usuarioInvalido)
    })

    it('Tentar login com senha inválida', () => {
        cy.login(usuario.nome, usuario.senhaInvalida)
        cy.validaMensagemErro(erro.senhaInvalida)
    })

    it('Tentar login com usuário/senha inválida', () => {
        cy.login(usuario.nomeInvalido, usuario.senhaInvalida)
        cy.validaMensagemErro(erro.usuarioInvalido)
    })
})