describe('Visual Testing with Percy and Cypress', () => {

    it('should take percy snapshot', () => {

        cy.visit('http://zero.webappsecurity.com/index.html')

        cy.wait(1000)

        cy.percySnapshot("My name")

    })

})