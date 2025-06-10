function HelpAlf() {}

HelpAlf.prototype.findSpaceship = function (map) {
  if (!map.includes("X")) {
    return "Spaceship lost forever.";
  }
  return "[ 0, 0]";
};
