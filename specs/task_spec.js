const assert = require("assert");
const Task = require("../hero.js");

describe("Task", function(){
  beforeEach(function(){
    task = new Task()
  });
  it("should have a difficulty level", function(){
    const actual = task.difficulty;
    assert.strictEqual(actual, 1)
  });

  xit("should have an urgency level");
  xit("should have a reward");
  xit("should be able to be marked as completed");
})
