import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Btn } from "./Button.styled";

interface IButton {
  children: ReactNode;
  to?: string;
  type: "button" | "submit" | "reset" | undefined;
}

const Button: FC<IButton> = ({ children, to,type}) => {
  return (
    <NavLink to={to || ""}>
      <Btn type={type}>{children}</Btn>
    </NavLink>
  );
};

export default Button;
