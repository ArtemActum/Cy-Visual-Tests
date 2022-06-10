const cypress = require("cypress")

describe('Visual Regression', () => {
    it(`My first visual regression test`, () => {
        // load website
        cy.visit('http://www.example.com')
        // compare snapshots
        cy.matchImageSnapshot()
    })
})


