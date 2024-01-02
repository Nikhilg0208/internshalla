import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage(
      "can i ask some question about sciAstra? yes or no."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleHello1 = () => {
    const botMessage = createChatBotMessage(
      "how did you here about us? Linkdin or elsewhere."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleHello2 = () => {
    const botMessage = createChatBotMessage("Okay Bye Thanks for answering.");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleHello3 = () => {
    const botMessage = createChatBotMessage(
      "okay thanks for answering. do you want to connect sciAstra as a student or teacher?"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleHello4 = () => {
    const botMessage = createChatBotMessage(
      "our coaching Can guide you on the application process for institutes like IISc, IISERs, NISER, etc please explore our site for more knowledge."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleHello5 = () => {
    const botMessage = createChatBotMessage(
      "our coaching hire only best teacher please prepare interview accordingly  explore our site for more knowledge."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleHello1,
            handleHello2,
            handleHello3,
            handleHello4,
            handleHello5,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
