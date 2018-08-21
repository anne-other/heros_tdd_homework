const Hero = function(name, health, favouriteFood, tasks){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = tasks;
}

Hero.prototype.sayName = function () {
  return `I am ${this.name}`
};

Hero.prototype.eat = function (food) {
  let replenishmentValue = food.replenishment;
  if (food === this.favouriteFood) {
    replenishmentValue *= 1.5;
  }
  this.health += replenishmentValue;
};

Hero.prototype.completedTasks = function (status) {
  let completed = [];
  for (task of this.tasks) {
    if (task.isComplete === status) {
      completed.push(task);
    };
  };
  return completed;
};


module.exports = Hero;
