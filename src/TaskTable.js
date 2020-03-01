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
        <ul style={{ listStyle: "none" }}>
          {this.props.tasks
            .filter(t => {
              // if (t.status === this.props.option)
              //   return t;
              return (
                t.status === this.props.option || this.props.option === "all"
              );
            })
            .map(t => (
              <div key={t.id} onClick={() => this.props.updateTask(t.id)}>
                <li key={t.id + 100}>{t.task}</li>
                <button>Done !</button>
              </div>
            ))}
        </ul>
      </div>
    );
  }
}

export default TaskTable;
