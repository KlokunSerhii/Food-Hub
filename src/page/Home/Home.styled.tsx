import styled from "@emotion/styled";
import img from '../../img/background.jpg'


export const Section = styled.section`
height: calc(100vh - 70px);
background-color: var(--accent-dark-color);
background-image: url(${img});
background-position:right -50% bottom;
background-repeat: no-repeat;
background-size: contain;
`;
