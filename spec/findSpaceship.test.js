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

  //Gültige Map ohne Inhalt
  it("should return Spaceship lost forever", function () {
    const map = "..........\n";
    expect(helpAlf.findSpaceship(map)).toEqual("Spaceship lost forever.");
  });

  //Gültige Map mit Inhalt
  it("should return [ 0, 0]", function () {
    const map = ".....X....\n";
    expect(helpAlf.findSpaceship(map)).toEqual("[ 0, 0]");
  });
});
