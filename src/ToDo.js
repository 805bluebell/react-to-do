import React from "react";
import "./ToDo.css";
import TaskTable from "./TaskTable";

// id for to-do list items
let i = 0;

class ToDo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      currentViewType: "all",
      currentTyping: "",
      trigger: ""
    };
    this.decideCurrentViewType = this.decideCurrentViewType.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveTask = this.saveTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  // Tasks will be like this
  // tasks = {
  //   task : "A task",
  //   status: "done/todo"
  // }

  decideCurrentViewType(event) {
    this.setState({
      currentViewType: event.target.value
    });
  }

  handleChange(event) {
    this.setState({
      currentTyping: event.target.value
    });
  }

  saveTask(event) {
    event.preventDefault();
    let temp = this.state.tasks;
    let temp2 = {
      task: this.state.currentTyping,
      status: "toBeCompleted",
      id: i++
    };
    temp.push(temp2);
    this.setState({
      tasks: temp,
      currentTyping: ""
    });
  }

  updateTask(trigger) {
    console.log("we are in main ", trigger);
    let temp = this.state.tasks;
    temp.map(t => (t.id === trigger ? (t.status = "done") : 1));
    // this.setState({ trigger: trigger });
  }

  render() {
    return (
      <div>
        TaskMan
        <div>
          <input
            type="radio"
            id="all"
            value="all"
            name="viewType"
            onChange={this.decideCurrentViewType}
            checked={this.state.currentViewType === "all"}
          />
          <label for="viewType">All</label>
          <br></br>
          <input
            type="radio"
            id="done"
            value="done"
            name="viewType"
            onChange={this.decideCurrentViewType}
            checked={this.state.currentViewType === "done"}
          />
          <label for="viewType">Completed</label>
          <br></br>
          <input
            type="radio"
            id="toBeCompleted"
            value="toBeCompleted"
            name="viewType"
            onChange={this.decideCurrentViewType}
            checked={this.state.currentViewType === "toBeCompleted"}
          />
          <label for="viewType">To Be Completed</label>
        </div>
        <form onSubmit={this.saveTask}>
          <input
            type="text"
            id="task"
            onChange={this.handleChange}
            value={this.state.currentTyping}
          />
          <button>Do it</button>
        </form>
        <br></br>
        <TaskTable
          option={this.state.currentViewType}
          tasks={this.state.tasks}
          updateTask={this.updateTask}
        />
      </div>
    );
  }
}

export default ToDo;
