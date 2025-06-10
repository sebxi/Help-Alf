function HelpAlf() {}

HelpAlf.prototype.findSpaceship = function (map) {
  const rows = map.trim().split("\n");
  const height = rows.length;

  for (let y = 0; y < height; y++) {
    if (rows[y].includes("X")) {
      return [height - 1 - y, 0];
    }
  }

  return "Spaceship lost forever.";
};
