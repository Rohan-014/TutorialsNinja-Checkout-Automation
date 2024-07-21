class Link{
    linkclick(link){
        cy.contains(link).click();

    }
}

export default Link