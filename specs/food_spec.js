const assert = require("assert");
const Food = require("../food.js");
let food;

describe("Food", function(){
  beforeEach(function(){
    food = new Food("meat", 5);
  });

  it("should have a name", function(){
    const actual = food.name;
    assert.strictEqual(actual, "meat");
  });

  it("should have a replenishmenmt value", function(){
    const actual = food.replenishment;
    assert.strictEqual(actual, 5);
  });
})
