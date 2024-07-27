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



    it('checkout process1', () => {
        //Test case for out of stock products
        register.EnterURL()
        register.Register()
        homePage.EnterURL()
        homePage.search('iphone')
        cy.get('div.image').click();
        product.addToCart()
        checkout.checkoutpro()
        cy.contains('Products marked with *** are not available in the desired quantity or not in stock!')
        cy.window().then(win => {
            win.close()
        })
    });

    it('checkout process2', () => {
        //Test case for checkout with out of stock products
        register.EnterURL()
        register.Register()
        homePage.EnterURL()
        homePage.search('mac')
        cy.get('img[title="iMac"]').should('be.visible').click();
        product.addToCart()
        checkout.checkoutpro()
        cy.contains('Products marked with *** are not available in the desired quantity or not in stock!')
        cy.window().then(win => {
            win.close()
        })
    });

    it('checkout process3', () => {
        //Test case for out of stock products
        register.EnterURL()
        register.Register()
        homePage.EnterURL()
        homePage.search('mac')
        cy.get('img[title="MacBook"]').click();
        product.addToCart()
        checkout.checkoutpro()
        cy.contains('Products marked with *** are not available in the desired quantity or not in stock!')
        cy.window().then(win => {
            win.close()
        })
    });

    it('checkout process4', () => {
        //Test case for out of stock products
        register.EnterURL()
        register.Register()
        homePage.EnterURL()
        homePage.search('mac')
        cy.get('img[alt="MacBook Air"]').click();
        product.addToCart()
        checkout.checkoutpro()
        cy.contains('Products marked with *** are not available in the desired quantity or not in stock!')
        cy.window().then(win => {
            win.close()
        })
    });

    it('search function1', () => {
        //test case for search not match
        register.EnterURL()
        register.Register()
        homePage.EnterURL()
        homePage.search('camera')
        cy.contains('There is no product that matches the search criteria.').should('be.visible');
        cy.window().then(win => {
            win.close()
        })
    });
    
    it('search function2', () => {
        //test case for empty search entered
        register.EnterURL()
        register.Register()
        homePage.EnterURL()
        homePage.search('000')
        cy.contains('There is no product that matches the search criteria.').should('be.visible');
        cy.window().then(win => {
            win.close()
        })
        });

        it('checkout process5', () => {
            //Test case for out of stock products
            register.EnterURL()
            register.Register()
            homePage.EnterURL()
            homePage.search('   ')
            cy.get('img[title="HTC Touch HD"]').click();
            product.addToCart()
            checkout.checkoutpro()
            cy.contains('Products marked with *** are not available in the desired quantity or not in stock!')
            cy.window().then(win => {
                win.close()
            })
        });

        it('checkout process5', () => {
            //Test case for out of stock products
            register.EnterURL()
            register.Register()
            homePage.EnterURL()
            homePage.search('   ')
            cy.get('img[title="HTC Touch HD"]').click();
            product.addToCart()
            checkout.checkoutpro()
            cy.contains('Products marked with *** are not available in the desired quantity or not in stock!')
            cy.window().then(win => {
                win.close()
            })
        });

        it.only('checkout process6', () => {
            //Test case for out of stock products
            register.EnterURL()
            register.Register()
            homePage.EnterURL()
            homePage.search('   ')
            cy.get('img[title="iPod Touch"]').click();
            product.addToCart()
            checkout.checkoutpro()
           
            cy.window().then(win => {
                win.close()
            })
        });

       
});
