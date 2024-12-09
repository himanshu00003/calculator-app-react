import React from "react";

const Button = ({ label, onclick }) => { // props - label , onclick
  return (
      <button className="button" onClick={onclick}>
          {/* on clicking onclick - onclick button will work */}
      {label}
      {/* {label} Its a jsx syntax to write javascript inside Html */}
    </button>
  );
};
export default Button;
 