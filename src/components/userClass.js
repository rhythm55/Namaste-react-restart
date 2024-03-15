import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // console.log("child constructor called");
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    // console.log("child componentDidMount called");
    this.timer = setInterval(() => {
      console.log("i was called");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    // console.log("child render called");
    const { name, location } = this.props;
    const { count, count2 } = this.state;

    return (
      <div className="user-card">
        <h1>{count}</h1>
        <button
          onClick={() =>
            this.setState({
              count: count + 1,
            })
          }
        >
          Update count
        </button>
        <h1>Name : {name}</h1>
        <h3>Location: {location}</h3>
        <h4>Contact: rhythmthakur05@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
