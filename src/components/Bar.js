import React from "react";

function Bar({ valeu: { icon, name, level }, light }) {
  const bar_width = `${level}%`;

  return (
    <div className={light ? "bar_light" : "bar"}>
      <div
        className="bar_wrapper d-flex justify-content-between"
        style={{ width: bar_width }}
      >
        <span className="bar_name">
          <img src={icon} alt="icon" className="bar_icon" />
          {name}
        </span>
        <level className="level">{level}%</level>
      </div>
    </div>
  );
}

export default Bar;
