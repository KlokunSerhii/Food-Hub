import styled from "@emotion/styled";
import { Form } from "formik";

export const Section = styled.section`
    background-color: var(--accent-dark-color);
`;

export const FormBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 72px);
    width: 100%;
`;

export const Forma = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
