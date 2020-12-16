import React from "react";

const MovingImage = ({ source, height = 80, width = 150 }) => {
  const [moving, setMoving] = React.useState(true);
  const [mouse, setMouse] = React.useState({
    x: document.body.clientWidth / 2,
    y: document.body.clientHeight / 2,
  });
  const [position, setPosition] = React.useState(mouse);

  const click = () => {
    setMoving(!moving);
  };

  React.useEffect(() => {
    setPosition(mouse);
  }, [moving]);

  return (
    <img
      src={source}
      onClick={click}
      onMouseMove={(event) => {
        setMouse({ x: event.clientX, y: event.clientY });
      }}
      style={{
        position: "absolute",
        height: height,
        width: width,
        top: (moving ? mouse.y : position.y) - height / 2,
        left: (moving ? mouse.x : position.x) - width / 2,
      }}
    />
  );
};

export default MovingImage;
