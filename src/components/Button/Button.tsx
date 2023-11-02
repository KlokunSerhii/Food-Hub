import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Btn } from "./Button.styled";

interface IButton {
  children: ReactNode;
  to:string
}

const Button: FC<IButton> = ({ children, to}) => {
  return (
    <NavLink to={to}>
      <Btn type="button">{children}</Btn>
    </NavLink>
  );
};

export default Button;
