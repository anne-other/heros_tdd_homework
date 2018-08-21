const assert = require("assert");
const Hero = require("../hero.js");

describe("Hero", function(){
  beforeEach(function(){
    hero = new Hero("Grogg Strongjaw", 200, "meat")
  });

  it("should have a name", function(){
    const actual = hero.name;
    assert.strictEqual(actual, "Grogg Strongjaw");
  });

  it("should have health", function(){
    const actual = hero.health;
    assert.strictEqual(actual, 200);
  });

  it("should have a favourite food", function(){
    const actual = hero.favouriteFood;
    assert.strictEqual(actual, "meat")
  });

  it("should talk saying their name", function() {
    const actual = hero.sayName();
    assert.strictEqual(actual, "I am Grogg Strongjaw")
  });

  xit("should have a collection of tasks to complete");
})
