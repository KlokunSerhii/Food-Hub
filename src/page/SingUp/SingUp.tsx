import { FC } from "react";
import { Formik } from "formik";
import Container from "../../components/Container";
import FormField from "../../components/FormField";
import Button from "../../components/Button";
import { FormBox, Forma, Section } from "./SingUp.styled";

interface MyFormValues {
  email: string;
  password: string;
  name: string
}

const SingUp:FC<{}> =()=> {
  const initialValues: MyFormValues = { email: "", password: "", name:"" };

  return (
    <Section>
      <Container>
        <FormBox>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }}
          >
            <Forma>
              <FormField name="name" placeholder="name" type="text" />
              <FormField name="email" placeholder="email" type="email" />
              <FormField
                name="password"
                placeholder="password"
                type="password"
              />
              <Button type="submit">Submit</Button>
            </Forma>
          </Formik>
        </FormBox>
      </Container>
    </Section>
  );
}

export default SingUp;
