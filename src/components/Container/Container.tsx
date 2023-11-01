import React, { ReactNode, FC } from "react";
import { ContainerBox } from "./Container.styled";

interface IContainer {
  children: ReactNode;
}

const Container: FC<IContainer> = ({ children }) => {
  return <ContainerBox>{children}</ContainerBox>;
};

export default Container;
