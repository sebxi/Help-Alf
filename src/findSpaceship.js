function HelpAlf() {}

HelpAlf.prototype.findSpaceship = function (map) {
  const rows = map.trim().split("\n");
  const height = rows.length;

  for (let y = 0; y < height; y++) {
    const x = rows[y].indexOf("X");
    if (x !== -1) {
      return [x, height - 1 - y];
    }
  }

  return "Spaceship lost forever.";
};
