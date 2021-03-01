import React from "react";

function Bar({ valeu: { icon, name, level } }) {
  const bar_width = `${level}%`;

  return (
    <div className="bar">
      <div className="bar_wrapper" style={{ width: bar_width }}>
        <span className="bar_name">
          <img src={icon} alt="icon" className="bar_icon" />
          {name}
        </span>
      </div>
    </div>
  );
}

export default Bar;
