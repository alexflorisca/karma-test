console.log(document.readyState);

describe("Test", function() {
  it("Document.readyState should be complete", function() {
    expect(document.readyState).toBe("complete");
    console.log(document.readyState);
  });
});