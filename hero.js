const Hero = function(name, health, favouriteFood){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
}

Hero.prototype.sayName = function () {
  return `I am ${this.name}`
};

module.exports = Hero;
