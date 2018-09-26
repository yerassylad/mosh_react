import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.value) {
      console.log("yay!");
    }
  }

  componentWillUnmount() {
    console.log("COunter - Unmount");
  }
  // state = {
  //   value: this.props.counter.value
  //   // tags: ["tag1", "tag2", "tag3"]
  //   // tags: []
  // };

  // constructor() {
  //   super();
  //   // console.log("Constructer", this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // handleIncrement = () => {
  //   // console.log("Increment Clicked", this);
  //   // console.log(product);

  //   this.setState({ value: this.state.value + 1 });
  // };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  render() {
    // console.log(this.props); // to see children components
    console.log("Counter - REndered");

    return (
      <div>
        <h4>Counter #{this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.state.tags.length === 0 && "please create a new tag!"} */}
        {/* {this.renderTags()} */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    let { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  // state = {
  //   count: 1,
  //   tags: ["tag1", "tag2", "tag3"]
  //   // tags: []
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // render() {
  //   return (
  //     <div>
  //       {this.state.tags.length === 0 && "please create a new tag"}
  //       {this.renderTags()}
  //     </div>
  //   );
  // }
}

export default Counter;
