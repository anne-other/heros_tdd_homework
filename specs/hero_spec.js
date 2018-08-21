const assert = require("assert");
const Hero = require("../hero.js");
let hero;

describe("Hero", function(){
  beforeEach(function(){
    hero = new Hero()
  });

  it("should have a name");
  it("should have health");
  it("should have a favourite food");
  it("should talk saying their name");
  it("should have a collection of tasks to complete");
})
