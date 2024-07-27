class Product{
   addToCart(){

    cy.get('#button-cart').should('be.visible').click();
    cy.xpath('//a[contains(text(), "shopping cart")]').click();
   }
}
export default Product


