function nextLevelCalculator() {
    /*
      Logic is detailed in the /docs folder.

      This function returns a number indicating the next shot's level.
      Pull/push should be chosen at random but that is out of the scope
      of the nextLevelCalculator.

      shotHistory is an array of these objects:
      {
        "hole":"push|pull",
        "timeElapsed": 1234ms,
        "level": 1-9,
        "scored": true|false
      }

      The assumption is that the last record in shotHistory is the last
      shot taken, second last array element is the second last shot, etc.
    */
  this.getMaxLevel = function() {
    return 10;
  }

  this.nextLevel = function(history) {
    if (history == undefined || history.shotHistory.length == 0) {
      return 1;  // Default behavior for first shot
    }

    if (history.shotHistory.length < 10) {
      // Get the latest shot.  If scored, increase the level.
      var lastShot = history.shotHistory[history.shotHistory.length - 1];
      var lastLevel = lastShot.level;
      if (lastShot.scored) {
        return lastLevel + 1;
      } else {
        return lastLevel;
      }
    }
  };

}

module.exports = nextLevelCalculator;
