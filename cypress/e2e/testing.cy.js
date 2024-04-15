describe('test', () => {
    it('test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='username']").type('admin')
    })
})