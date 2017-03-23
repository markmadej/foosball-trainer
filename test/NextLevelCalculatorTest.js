var assert = require('assert');
var nlc = require('../src/nextLevelCalculator');
var levelCalc = new nlc();

describe('Next Level Calculator Tests - Less than 10 shots', function() {
    it('should always return a valid level', function() {
      var nextLevel = levelCalc.nextLevel();
      assert(nextLevel > 0 && nextLevel <= levelCalc.getMaxLevel(), 'Level returned is not valid.');
    });
    it('should increment the level anytime you score with < 10 shots', function() {
      var history =
          {"shotHistory":[{
            "hole": "pull",
            "timeElapsed": 1234,
            "level": 1,
            "scored": 1
          }]};
      var nextLevel = levelCalc.nextLevel(history);
      assert(nextLevel == 2, "Next level was not calculated properly.");

      var history =
          {
            "shotHistory":
            [
              {
                "hole": "pull",
                "timeElapsed": 1234,
                "level": 1,
                "scored": 1
              },
              {
                "hole": "pull",
                "timeElapsed": 1234,
                "level": 2,
                "scored": 1
              },
              {
                "hole": "pull",
                "timeElapsed": 1234,
                "level": 3,
                "scored": 1
              },
            ]
          };
      var nextLevel = levelCalc.nextLevel(history);
      assert(nextLevel == 4, "Next level was not calculated properly.");
    });
});

describe('Next Level Calculator Tests - More than 10 shots', function() {
  it('level should remain the same if you shot <10 shots in a row at this level', function() {
    var history =
        {
          "shotHistory":
          [ {"hole": "pull","timeElapsed": 1234,"level": 1,"scored": 1},
            {"hole": "pull","timeElapsed": 1234,"level": 2,"scored": 1},
            {"hole": "pull","timeElapsed": 1234,"level": 3,"scored": 1},
            {"hole": "pull","timeElapsed": 1234,"level": 4,"scored": 0},
            {"hole": "pull","timeElapsed": 1234,"level": 4,"scored": 0},
            {"hole": "pull","timeElapsed": 1234,"level": 4,"scored": 0},
            {"hole": "pull","timeElapsed": 1234,"level": 4,"scored": 0},
            {"hole": "pull","timeElapsed": 1234,"level": 4,"scored": 0},
            {"hole": "pull","timeElapsed": 1234,"level": 4,"scored": 0},
            {"hole": "pull","timeElapsed": 1234,"level": 4,"scored": 0},
            {"hole": "pull","timeElapsed": 1234,"level": 4,"scored": 0},
          ]
        };

        var nextLevel = levelCalc.nextLevel(history);
        assert(nextLevel == 4, "Next level was not calculated properly : " + nextLevel);
  });
});
