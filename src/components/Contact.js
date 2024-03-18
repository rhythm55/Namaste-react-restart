import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const timer = setInterval(() => console.log("contact event called"), 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>Contact</h1>
      <label>name</label>
      <input id="name" type="text"></input>
      <label>email</label>
      <input id="email" type="text"></input>
      <button>Submit</button>
    </>
  );
};

export default Contact;
