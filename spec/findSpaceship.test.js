describe("HelpAlf", function () {
  let helpAlf;

  beforeEach(function () {
    helpAlf = new HelpAlf();
  });

  //Leere Map
  it("should return Spaceship lost forever", function () {
    const map = "";
    expect(helpAlf.findSpaceship(map)).toEqual("Spaceship lost forever.");
  });

  //Üngültige Map
  it("should return Spaceship lost forever", function () {
    const map = "keine Map";
    expect(helpAlf.findSpaceship(map)).toEqual("Spaceship lost forever.");
  });
  
  //Map mit nur einem Platz (Ungültig)
  it("should return Spaceship lost forever", function () {
    const map = ".";
    expect(helpAlf.findSpaceship(map)).toEqual("Spaceship lost forever.");
  });
});
