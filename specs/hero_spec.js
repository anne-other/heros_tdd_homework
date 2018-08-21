const assert = require("assert");
const Hero = require("../hero.js");

describe("Hero", function(){
  beforeEach(function(){
    hero = new Hero("Grogg Strongjaw")
  });

  it("should have a name", function(){
    const actual = hero.name;
    assert.strictEqual(actual, "Grogg Strongjaw");
  });

  xit("should have health");
  xit("should have a favourite food");
  xit("should talk saying their name");
  xit("should have a collection of tasks to complete");
})
