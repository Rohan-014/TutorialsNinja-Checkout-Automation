class Checkout{
    checkoutpro(){
        cy.xpath('//a[contains(text(),"Checkout")]').click();
    }
}
export default Checkout