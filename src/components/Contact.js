import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const timer = setInterval(() => console.log("contact event called"), 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>Contact</div>;
};

export default Contact;
