import React from "react";
import { H1 } from "./Title.styled";
interface ITitle {
  title: string;
}
function Title({ title }: ITitle) {
  return <H1>{title}</H1>;
}

export default Title;
