class Product{
   addToCart(){
  //  cy.xpath('//div[@class="button-group"]/button[1]').click();
  cy.get('#button-cart').should('be.visible').click();
    cy.xpath('//a[contains(text(), "shopping cart")]').click();
   }
}
export default Product


