const assert = require("assert");
const Hero = require("../hero.js");
const Task = require("../task.js");
const Food = require("../food.js")
let hero;
let food;

describe("Hero", function(){
  beforeEach(function(){
    const task1 = new Task(1, 2, "glory");
    const task2 = new Task(5, 6, "money");
    ale = new Food("ale", 1)
    hero = new Hero("Grogg Strongjaw", 200, ale, [task1, task2]);
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
    assert.strictEqual(actual, ale);
  });

  it("should talk saying their name", function() {
    const actual = hero.sayName();
    assert.strictEqual(actual, "I am Grogg Strongjaw")
  });

  it("should have a collection of tasks to complete", function(){
    const actual = hero.tasks.length;
    assert.strictEqual(actual, 2)
  });

  describe("Food", function() {
    it("should be able to eat food and health goes up by replenishment value", function(){
      meat = new Food("meat", 5);
      hero.eat(meat);
      const actual = hero.health;
      assert.strictEqual(actual, 205)
    });

    xit("should be replenished by 1.5* if food consumed is favourite food");
  });

  describe("Task", function() {
    xit("should be able to sort tasks by difficuly, urgency or reward");
    xit("should be able to view tasks that are marked as completed or incomplete")
  })
})
