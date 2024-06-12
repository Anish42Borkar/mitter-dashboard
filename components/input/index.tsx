import React from "react";

type InputT = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  icon?: JSX.Element;
};

const Input = ({ icon, ...props }: InputT) => {
  return (
    <div className="border rounded-md w-full flex items-center">
      {icon && icon}
      <input className="p-1 outline-none" {...props} />
    </div>
  );
};

export default Input;
