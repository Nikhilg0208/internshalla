import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes("hello")) {
      actions.handleHello();
    }
    if (message.includes("yes")) {
      actions.handleHello1();
    }
    if (message.includes("no")) {
      actions.handleHello2();
    }
    if (message.includes("linkdin")) {
      actions.handleHello3();
    }
    if (message.includes("elsewhere")) {
      actions.handleHello3();
    }
    if (message.includes("student")) {
      actions.handleHello4();
    }
    if (message.includes("teacher")) {
      actions.handleHello5();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
