"use client";

import React from "react";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  bgColor: string;
  bWidth?: number;
  bColor?: string;
  bRadius?: number;
  textColor: string;
  onClick: () => void;
};

const Button = (props: Props) => {
  return (
    <button
      // disabled
      onClick={props.onClick}
      className="button-main"
      style={{
        backgroundColor: props.bgColor,
        borderWidth: props.bWidth,
        borderColor: props.bColor,
        borderRadius: props.bRadius,
      }}
    >
      <span className="b-text" style={{ color: props.textColor }}>
        {props.title}
      </span>
    </button>
  );
};

export default Button;
