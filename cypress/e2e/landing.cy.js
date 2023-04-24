import { BASE_APP } from "../../src/config/env";

let appUrl = BASE_APP;

describe("landing home", () => {
  it("should render", () => {
    cy.visit(appUrl);
  });

  it("should render node details when click on node avatar", () => {
    cy.visit(appUrl);

    cy.get('[data-testid="avatar"]').first().click();

    cy.get('[data-testid="details"]').should("exist");
    cy.get('[data-testid="title"]').should("exist");
    cy.get('[data-testid="item-title"]').should("exist");
    cy.get(".content").should("exist");
    cy.get(".content").should("to.be.empty");
  });

  it("should render node detail when click on node link", () => {
    cy.visit(appUrl);

    cy.get('[data-testid="avatar"]').first().click();
    cy.get('[data-testid="item-title"]').first().click();

    cy.get(".content").should("to.not.be.empty");
  });

  it("should render the form to create new node", () => {
    cy.visit(appUrl);

    cy.get('[data-testid="new-node"]').first().click();

    cy.url().should("eq", `${appUrl}/nodes/new`);
  });
});
