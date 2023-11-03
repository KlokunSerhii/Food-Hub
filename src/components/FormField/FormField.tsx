import { FC } from "react";
import { FieldBox, Input } from "./FormField.styled";

interface IFormField{
  name: string,
  placeholder: string
  type: string
}

const FormField:FC<IFormField>  = ({name, placeholder,type }) => {
  return (
    <FieldBox>
      <Input id={name} name={name} placeholder={placeholder} type={type} />
    </FieldBox>
  );
};

export default FormField;
