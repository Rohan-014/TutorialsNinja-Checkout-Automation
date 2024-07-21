class HomePage{
    EnterURL(){
        cy.visit('https://tutorialsninja.com/demo/')
    }
    search(item){

        cy.get('input[name="search"]').type(item)
        cy.get('input[name="search"]').should('have.value', item)
        cy.get('.fa-search').click();
    }
}
export default HomePage