const assert = require("assert");
const Food = require("../food.js");
let food;

describe("Food", function(){
  beforeEach(function(){
    food = new Food("meat");
  });

  it("should have a name", function(){
    const actual = food.name;
    assert.strictEqual(actual, "meat");
  });

  xit("should have a replenishmenmt value");
})
