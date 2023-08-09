describe("tic-tac-toe", () => {
  it("works with ties", () => {
    cy.visit("/");
    cyClickSquares([0, 2, 1, 3, 4, 7, 5, 8, 6]);
    cy.findByTestId("status").should("have.text", "Tie");
  });

  it("works when X wins", () => {
    cy.visit("/");
    cyClickSquares([0, 1, 6, 3, 8, 7, 4]);
    cy.findByTestId("status").should("have.text", "Winner: X");
  });

  it("works when O wins", () => {
    cy.visit("/");
    cyClickSquares([1, 0, 2, 3, 5, 6]);
    cy.findByTestId("status").should("have.text", "Winner: O");
  });
});

function cyClickSquares(squares) {
  squares.forEach((pos) => cy.findByTestId(`square-${pos}`).click());
}
