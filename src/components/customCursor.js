// CustomCursor.js
import React, { useEffect, useState } from "react";
import "./customCursor.scss";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isElementHovered, setIsElementHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = "none";
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleElementHoverEvents = () => {
      document.querySelectorAll('.js-hoverable-element').forEach((el) => {
        el.addEventListener('mouseover', () => setIsElementHovered(true));
        el.addEventListener('mouseout', () => setIsElementHovered(false));
      });
    };

    const eventListeners = [
      { type: "mousemove", listener: handleMouseMove },
      { type: "mousedown", listener: handleMouseDown },
      { type: "mouseup", listener: handleMouseUp },
      { type: "mouseenter", listener: handleMouseEnter },
      { type: "mouseleave", listener: handleMouseLeave },
    ];

    eventListeners.forEach(({ type, listener }) => {
      document.addEventListener(type, listener);
    });

    handleElementHoverEvents();

    return () => {
      eventListeners.forEach(({ type, listener }) => {
        document.removeEventListener(type, listener);
      });
    };
  }, []); // Asegúrate de pasar un arreglo vacío para que el efecto se ejecute solo una vez

  const cursorStyles = {
    "--cursor-x": `${cursorPosition.x}px`,
    "--cursor-y": `${cursorPosition.y}px`,
  };

  const cursorClasses = `c-cursor ${isClicked ? "is-clicked" : ""} ${
    isHidden ? "is-hidden" : ""
  } ${isElementHovered ? "is-element-hovered" : ""}`;

  return (
    <div className={cursorClasses} style={cursorStyles}>
      <div className="c-cursor__inner"></div>
    </div>
  );
};

export default CustomCursor;
