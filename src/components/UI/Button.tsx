import React from "react";

type Props = {
  text: string | JSX.Element;
  action?: () => any | void;
  type: "submit" | "reset" | "button";
  disabled?: boolean;
};

const Button = (props: Props) => {
  return (
    <>
      <button
        className=" disabled:bg-gray-500 bg-primary hover:bg-primary/80 duration-300 w-full mb-3 text-white px-2 rounded-[15px] py-4 font-bold disabled:cursor-not-allowed "
        onClick={props.action}
        type={props.type}
        disabled={props.disabled}
      >
        {props.text}
      </button>
    </>
  );
};

export default Button;
