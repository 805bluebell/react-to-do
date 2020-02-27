import React from "react";
import "./ToDo.css";
import TaskTable from "./TaskTable";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      currentViewType: "all",
      currentTyping: ""
    };
    this.decideCurrentViewType = this.decideCurrentViewType.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveTask = this.saveTask.bind(this);
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
    let temp2 = { task: this.state.currentTyping, status: "toBeCompleted" };
    temp.push(temp2);
    this.setState({
      tasks: temp
    });
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
          />
          <label for="viewType">All</label>
          <br></br>
          <input
            type="radio"
            id="completed"
            value="completed"
            name="viewType"
            onChange={this.decideCurrentViewType}
          />
          <label for="viewType">Completed</label>
          <br></br>
          <input
            type="radio"
            id="toBeCompleted"
            value="toBeCompleted"
            name="viewType"
            onChange={this.decideCurrentViewType}
          />
          <label for="viewType">To Be Completed</label>
        </div>
        <form onSubmit={this.saveTask}>
          <input type="text" id="task" onChange={this.handleChange} />
          <button>Do it</button>
        </form>
        <br></br>
        <TaskTable option={this.state.currentViewType} tasks={this.state.tasks} />
      </div>
    );
  }
}

export default ToDo;
