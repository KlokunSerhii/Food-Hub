import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Nav = styled.header`
  background-color: var(--accent-medium-color);
  border-bottom: 2px solid var(--accent-bright-color);
`;
export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;
export const UserBar = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const Auth = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const SVG = styled.svg`
  width: 30px;
  height: 30px;
  fill: var(--accent-light-color);

  :hover {
    fill: var(--accent-bright-color);
  }
`;

export const NL = styled(NavLink)`
  display: flex;
  align-items: center;

  font-size: 24px;
  background-color: transparent;
  color: var(--white-color);
  border: none;
  text-shadow: 3px 3px 3px var(--black-color);
  &:hover {
    color: var(--accent-bright-color);
  }
`;
