const Task = function(difficulty, urgency, reward){
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.isComplete = false;
}

Task.prototype.completeTask = function () {
  this.isComplete = true;
};

module.exports = Task;
