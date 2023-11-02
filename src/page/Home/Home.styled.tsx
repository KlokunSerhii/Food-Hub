import styled from "@emotion/styled";
import img from "../../img/background.jpg";
import img2 from "../../img/background2.jpg";
import img3 from "../../img/background3.jpg";
import img4 from "../../img/background4.jpg";

export const Section = styled.section`
  height: calc(100vh - 72px);
  background-color: var(--accent-dark-color);
  background-image: url(${img4}), url(${img3}), url(${img}),
    url(${img2});
  background-position: right 300px bottom, right bottom,
    right 400px top, right top;
  background-repeat: no-repeat;
  background-size: 600px 400px, 500px 350px, 500px 350px, 600px 400px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  padding: 20px;
`;
