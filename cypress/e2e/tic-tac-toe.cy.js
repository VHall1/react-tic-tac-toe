describe("anonymous tic-tac-toe", () => {
  it("works with ties", () => {
    cy.visit("/");

    cy.findByTestId("square-0").click();
    cy.findByTestId("square-2").click();
    cy.findByTestId("square-1").click();
    cy.findByTestId("square-3").click();
    cy.findByTestId("square-4").click();
    cy.findByTestId("square-7").click();
    cy.findByTestId("square-5").click();
    cy.findByTestId("square-8").click();
    cy.findByTestId("square-6").click();

    cy.get(".status").should("have.text", "Tie");
  });
});
