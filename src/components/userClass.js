import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // console.log("child constructor called");
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy",
        avatar_url: "dummy",
        bio: "dummy",
      },
    };
  }

  async componentDidMount() {
    // console.log("child componentDidMount called");
    this.timer = setInterval(() => {
      console.log("i was called");
    }, 1000);

    const data = await fetch("https://api.github.com/users/rhythm55");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { name, location, avatar_url, bio } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="user-logo"></img>
        <p>{bio}</p>
        <h1>Name : {name}</h1>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
