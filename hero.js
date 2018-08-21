const Hero = function(name, health, favouriteFood, tasks){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = tasks;
}

Hero.prototype.sayName = function () {
  return `I am ${this.name}`
};

module.exports = Hero;
