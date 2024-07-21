class Register{
    EnterURL(){
        cy.visit('https://tutorialsninja.com/demo/index.php?route=account/register')
    }
    Register(){
        cy.get('#input-firstname').type('rajiv');
        cy.get('#input-lastname').type('kumar');    
        cy.get('#input-email').type('rajivkumar@gmail.com');
        cy.get('#input-telephone').type('1234567890');
        cy.get('#input-password').type('12345678');
        cy.get('#input-confirm').type('12345678');
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click(); 
        cy.get('.btn-primary').click();
    }
}
export default Register