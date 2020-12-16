import React from "react";

const GhostText = ({ text, initialTimer = 5, ...props }) => {
  const [timer, setTimer] = React.useState(initialTimer);

  React.useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]);

  React.useEffect(() => {
    setTimer(initialTimer);
  }, [text]);

  return timer > 0 && text ? <h1>{text}</h1> : <></>;
};

export default GhostText;
