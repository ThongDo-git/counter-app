import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { onIncrement, onDecrement, counter, onDelete } = this.props;

    return (
      <div className="row">
        <div className="col-1 m-2">
          <span className={this.getBadge()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => onDecrement(counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button onClick={onDelete} className="btn btn-danger btn-sm">
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadge() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
