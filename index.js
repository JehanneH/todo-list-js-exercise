
//object to keep track of the state
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
return task;
}

// driver code
const task1 = newTask("Clean Cat Litter", "Take all poop out of litter box");
const task2 = newTask("Do Laundry", ":(");
const tasks = [task1, task2];

task1.logState(); // clean cat litter not completed
task1.markCompleted(); // marks cat litter as true - therefore complete
task1.logState(); // clean cat litter is completed
