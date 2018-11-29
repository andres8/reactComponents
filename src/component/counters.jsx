import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onReset()}
          className="btn-primary btn btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDicrease={this.props.onDicrease}
            onLess={this.props.onLess}
            onIncrement={this.props.onIncrement}
            counter={counter}
          >
            {/* <h4>tittle</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
