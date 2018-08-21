const assert = require("assert");
const Task = require("../task.js");
let task

describe("Task", function(){
  beforeEach(function(){
    task = new Task(1, 2)
  });
  it("should have a difficulty level", function(){
    const actual = task.difficulty;
    assert.strictEqual(actual, 1)
  });

  it("should have an urgency level", function(){
    const actual = task.urgency;
    assert.strictEqual(actual, 2)
  });

  xit("should have a reward");
  xit("should be able to be marked as completed");
})
