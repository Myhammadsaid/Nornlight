import React from "react";

const Model = ({ children, setPhonetoggle }) => {
  return (
    <div>
      <div onClick={() => setPhonetoggle(false)} className="overflow"></div>
      <div className="model">{children}</div>
    </div>
  );
};

export default Model;
