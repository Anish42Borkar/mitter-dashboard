import React, { ReactNode } from "react";
import style from "./style.module.scss";

type varient = "blue" | "orange";

type ButtonT = {
  children: ReactNode;
  varient?: varient;
};

function colorSetter(varient: varient) {
  switch (varient) {
    case "blue":
      return `${style.blue}`;
    case "orange":
      return `${style.orange}`;

    default:
      `${style.blue}`;
  }
}

const Button = ({ children, varient = "blue" }: ButtonT) => {
  return (
    <button
      className={`${colorSetter(varient)} h-fit w-fit px-2 py-1 rounded-xl`}
    >
      {children}
    </button>
  );
};

export default Button;
