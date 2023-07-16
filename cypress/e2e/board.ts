import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on empty home page", () => {
    cy.visit('https://example.cypress.io')
});

When("I type and submit in the board name", () => {
    cy.contains('type').click()
});

Then("I should be redirected to the board detail", () => {
    cy.url().should('include', '/commands/actions')
});
