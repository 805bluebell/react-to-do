import React, { Component } from "react";

let i = 0;

class TaskTable extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.tasks
            .filter(t => {
              // if (t.status === this.props.option)
              //   return t;
              return t.status == this.props.option || this.props.option == "all";
            })
            .map(({ task }) => (
              <div>
                <li key={i++}>{task}</li>
                <button>Done !</button>
              </div>
            ))}
        </ul>
      </div>
    );
  }
}

export default TaskTable;
