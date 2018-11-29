import React, { Component } from "react";

class Counter extends Component {
  /* state = {
    value: this.props.counter.value,
    hola: <h1>HP</h1>
    // tags: ["tag1", "tag2", "tag3"]
    // imageUrl: "https://picsum.photos/200"
  }; */
  // this is another way to use 'this' inside a function
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    // console.log("props= ", this.props);
    const { onIncrement, onDicrease, onLess, counter } = this.props;
    return (
      <div>
        {/* {this.props.children} */}
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* <h4>Counter {this.props.id}</h4> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDicrease(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <button
          onClick={() => onLess(counter)}
          className="btn btn-danger btn-sm m-2"
        >
          less
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value /*, hola */ } = this.props.counter;
    return value === 0 ? <h5>Zero</h5> : value;
  }
}

export default Counter;
