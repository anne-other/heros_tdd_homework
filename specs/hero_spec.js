const assert = require("assert");
const Hero = require("../hero.js");
const Task = require("../task.js");
const Food = require("../food.js")
let hero;
let food;
let iWouldLikeToRage;
let crucibleShowdown;

describe("Hero", function(){
  beforeEach(function(){
    iWouldLikeToRage = new Task(1, 2, "glory");
    crucibleShowdown = new Task(5, 6, "money");
    drinkingContestWithPike = new Task(3, 7, "fun");
    ale = new Food("ale", 2)
    hero = new Hero("Grogg Strongjaw", 200, ale, [iWouldLikeToRage, crucibleShowdown, drinkingContestWithPike]);
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
    assert.strictEqual(actual, 3)
  });

  describe("Food", function() {
    it("should be able to eat food and health goes up by replenishment value", function(){
      meat = new Food("meat", 5);
      hero.eat(meat);
      const actual = hero.health;
      assert.strictEqual(actual, 205);
    });

    it("should be replenished by 1.5* if food consumed is favourite food", function(){
      hero.eat(ale);
      const actual = hero.health;
      assert.strictEqual(actual, 203);
    });
  });

  describe("Task", function() {
    it("should be able to sort tasks by difficulty", function(){
      hero.sortBy("difficulty");
      const actual = hero.tasks
      assert.deepStrictEqual(actual, [iWouldLikeToRage, drinkingContestWithPike, crucibleShowdown])
    });

    it("should be able to sort tasks by urgency", function(){
      hero.sortBy("urgency");
      const actual = hero.tasks
      assert.deepStrictEqual(actual, [iWouldLikeToRage, crucibleShowdown, drinkingContestWithPike])
    });

    it("should be able to sort tasks by reward", function(){
      hero.sortBy("reward");
      const actual = hero.tasks
      assert.deepStrictEqual(actual, [drinkingContestWithPike, iWouldLikeToRage, crucibleShowdown])
    });

    it("should be able to view tasks that are marked as completed or incomplete", function() {
      iWouldLikeToRage.completeTask();
      let actual = hero.completedTasks(true);
      assert.deepStrictEqual(actual, [iWouldLikeToRage]);
      actual = hero.completedTasks(false);
      assert.deepStrictEqual(actual, [crucibleShowdown, drinkingContestWithPike]);
    });
  });
})
