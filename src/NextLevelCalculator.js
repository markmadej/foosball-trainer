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

    var lastShot = history.shotHistory[history.shotHistory.length - 1];
    var lastLevel = lastShot.level;

    if (history.shotHistory.length < 10) {
      // If the latest shot scored and we are still < 10 shots, increase the level.
      if (lastShot.scored) {
        return lastLevel + 1;
      } else {
        return lastLevel;
      }
    }

    /* More than 10 shots have happened at this point.
       If the last 10 shots haven't all happened at the same level, return the same level.
     */
    var shotsScoredInLast10 = 0;
    for (var idx = history.shotHistory.length - 1; idx > history.shotHistory.length - 11; idx--) {
      shotsScoredInLast10 += history.shotHistory[idx].scored;
      console.log("ssilT=" + shotsScoredInLast10 + ", idx=" + idx);
      if (history.shotHistory[idx].level != lastLevel) {
        console.log("last level did not match on idx=" + idx + ", returning");
        return lastLevel;
      }
    }

    /* Now, more than 10 shots have happened at the current level.  Determine if the level should stay
       the same, increase, or decrease.
     */
    console.log("shots scored in last 10 = " + shotsScoredInLast10);
    if (shotsScoredInLast10 > 7) {
      return lastLevel + 1;
    }
    if (shotsScoredInLast10 < 4) {
      return lastLevel - 1;
    }
    // If you shot between 40% and 70% in the last 10 shots, maintain the current level
    return lastLevel;

  };

}

module.exports = nextLevelCalculator;
