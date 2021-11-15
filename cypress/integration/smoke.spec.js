/* eslint-disable no-undef */
describe("smoke test", () => {
  it("can view home page", async () => {
    cy.visit("/");
    cy.contains("Learn React");
  });
});
