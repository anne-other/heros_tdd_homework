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
  const replenishmentValue = food.replenishment;
  this.health += replenishmentValue;
};

module.exports = Hero;
