import React from "react";

function Notification({ text, linkText }) {
  return (
    <div className="notification">
      {text}
      <a
        className="link"
        href="https://twitter.com/ssadawi__"
        target="_blank"
        rel="noreferrer"
      >
        {linkText}
      </a>
    </div>
  );
}

export default Notification;
