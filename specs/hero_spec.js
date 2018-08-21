const assert = require("assert");
const Hero = require("../hero.js");
const Task = require("../task.js");
let hero;
let task

describe("Hero", function(){
  beforeEach(function(){
    const task1 = new Task(1, 2, "glory")
    const task2 = new Task(5, 6, "money")
    hero = new Hero("Grogg Strongjaw", 200, "Ale", [task1, task2])
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
    assert.strictEqual(actual, "Ale")
  });

  it("should talk saying their name", function() {
    const actual = hero.sayName();
    assert.strictEqual(actual, "I am Grogg Strongjaw")
  });

  it("should have a collection of tasks to complete", function(){
    const actual = hero.tasks.length;
    assert.strictEqual(actual, 2)
  });
})
