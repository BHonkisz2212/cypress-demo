/// <reference types="cypress" />
import '../../support/commands.js';

import MainPage from '../PageObject/MainPage.js';

const mainPage = new MainPage();

describe('Example', () => {

  it('Does something', () => {

    cy.visit('www.onet.pl',{timeout:20000})
    mainPage.getModal().should('be.visible')
})
})




