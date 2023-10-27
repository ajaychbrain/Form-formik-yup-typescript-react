import React from "react";
import { ErrorModel } from "./styles/FormStyles";

const Errorshow = (props: any) => {
  return <ErrorModel>{props.message}</ErrorModel>;
};

export default Errorshow;
