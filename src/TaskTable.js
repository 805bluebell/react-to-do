import React, { Component } from "react";

class TaskTable extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(task) {
    console.log(task);
    // this.props.updateTask(event.target.value);
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.tasks
            .filter(t => {
              // if (t.status === this.props.option)
              //   return t;
              return (
                t.status === this.props.option || this.props.option === "all"
              );
            })
            .map(({ task }) => (
              <div key={task.id} onClick={() => this.props.updateTask(task.id)}>
                <li key={task.id + 100}>{task}</li>
                <button>Done !</button>
              </div>
            ))}
        </ul>
      </div>
    );
  }
}

export default TaskTable;
