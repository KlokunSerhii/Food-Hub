import styled from "@emotion/styled";
import { Field } from "formik";

export const FieldBox = styled.div`
    margin-bottom: 20px;
`;
export const Input = styled(Field)`
    font-family: inherit; 
    font-size: inherit; 
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    width:300px;
    padding: 7px 14px;
    border-radius: 12px;
    color: var(--accent-bright-color);
    background-color: var(--white-color);
    box-shadow:3px 3px 3px var(--black-color);
    outline: none;
    border: 1px solid var(--accent-medium-color);
    :focus,
    :hover {
        box-shadow:0 0 0 0.2rem rgba(158, 158, 158, 0.25);
        border: 1px solid var(--accent-bright-color);
        color: var(--accent-light-color);
        }

`;
