import styled from "@emotion/styled";

export const Btn = styled.button`
  width: 100px;
  height: 40px;
  background-color: var(--accent-light-color);
  color: var(--accent-bright-color);
  border: none;
  border-radius: 10px;
  box-shadow: 3px 3px 3px var(--black-color);
  :hover {
    background-color: var(--accent-bright-color);
    color: var(--accent-light-color);
  }
`;
