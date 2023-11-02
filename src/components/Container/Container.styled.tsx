import styled from "@emotion/styled";

export const ContainerBox = styled.div`
  margin: 0 auto;
  min-width: 280px;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
    padding-left: 96px;
    padding-right: 96px;
  }
`;
