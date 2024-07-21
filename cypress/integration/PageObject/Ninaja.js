import HomePage from "../../support/autoproject/TutorialsNinja/homePage";
import Product from "../../support/autoproject/TutorialsNinja/productPage";
import Link from "../../support/autoproject/TutorialsNinja/link";
import Checkout from "../../support/autoproject/TutorialsNinja/checkout";
import Register from "../../support/autoproject/TutorialsNinja/registerPage";

describe('TutorialsNinja Checkout', () => {
        const homePage = new HomePage();
        const product = new Product();
        const link = new Link();
        const checkout = new Checkout();
        const register = new Register();



    it('checkout process', () => {
        register.EnterURL()
        register.Register()
        homePage.EnterURL()
        homePage.search('iphone')
        product.addToCart()
        checkout.checkoutpro()
        cy.window().then(win => {
            win.close()
        })
    });
    
});
