import React from "react";
import { FormStyles } from "./styles/FormStyles";


const Input = (props: any) => {
  return (
    <>
      <FormStyles
        icon={props.icon}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  );
};

export default Input;
