describe("HelpAlf", function () {
  let helpAlf;

  beforeEach(function () {
    helpAlf = new HelpAlf();
  });

  it("should return Spaceship lost forever", function () {
    const map = "";
    expect(helpAlf.findSpaceship(map)).toEqual("Spaceship lost forever.");
  });
});
