import React from "react";
import UserClass from "./userClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor called");
  }

  componentDidMount() {
    console.log("parent componentDidMount called");
  }

  render() {
    console.log("parent render called");
    return (
      <>
        <h1>about page</h1>
        <UserClass name="rhythm" location="bangalore"></UserClass>
      </>
    );
  }
}

export default About;
