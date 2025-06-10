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
  it("should return [0, 0]", function () {
    const map = "X.........\n";
    expect(helpAlf.findSpaceship(map)).toEqual([0, 0]);
  });

  //Gültige Map mit mehr Zeilen + Inhalt
  it("should return [0, 4] for spaceship at line 4 from bottom", function () {
    const map = "X.........\n..........\n..........\n..........\n..........";
    expect(helpAlf.findSpaceship(map)).toEqual([0, 4]);
  });

  //Gültige Map + Inhalte Ausgabe mti Zeilel und Spalte
  it("should return [7, 2] for spaceship at line 3 from bottom", function () {
    const map = "..........\n..........\n..........\n.......X..\n..........\n..........";
    expect(helpAlf.findSpaceship(map)).toEqual([7, 2]);
  });

  //Gültige Map ohne Inhalt
  it("should return spaceship lost forever.", function () {
    const map = "..........\n..........\n..........\n..........\n..........\n..........";
    expect(helpAlf.findSpaceship(map)).toEqual("Spaceship lost forever.");
  });
  
  //Gültige Map mit Inhalt
  it("should return [2, 1] for spaceship at line 2 from bottom", function () {
    const map = "..........\n..X.......\n.........";
    expect(helpAlf.findSpaceship(map)).toEqual([2, 1]);
  });
});
