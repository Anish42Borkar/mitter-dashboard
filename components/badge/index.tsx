import React from "react";
import "./style.css";

type varient = "gradient" | "gray";

type BadgeT = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  title: string;
  varient?: varient;
};

function colorSetter(varient: varient) {
  switch (varient) {
    case "gradient":
      return `gradient`;
    case "gray":
      return `gray`;

    default:
      `gray`;
  }
}

const Badge = ({ title, varient = "gray", ...props }: BadgeT) => {
  return (
    <div
      className={` ${colorSetter(
        varient
      )} active:bg-blue-50 cursor-pointer w-fit text-xs px-2 py-1 rounded-full border flex items-center justify-center`}
      {...props}
    >
      {title}
    </div>
  );
};

export default Badge;
