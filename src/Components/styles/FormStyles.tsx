import { Field } from "formik"
import {styled} from "styled-components";

export const MainHeading = styled.h2`
    display: flex;
    justify-content: center;
` 
export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 26px 0px 0px 256px;
`
export const FormStyles = styled.input<{ icon: string }>`
  border: 1px solid black;
  border-radius: 22px;
  padding: 12px;
  outline: none;
  margin: 1vw;
  width: 60%;

  background: ${(props) => (props?.icon ? `url(${props.icon})` : "none")};
  background-position: 10px center; /* Position the SVG on the left side */
  background-repeat: no-repeat;
  background-size: 27px 30px; /* Set the size of the SVG */

  padding-left: 45px;
`;

export const NameStyle = styled.div`
  display: flex;
  width: 100%;
  /* justify-content: space-between; */
  flex-direction: row;

  & > input {
    width: 40%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  color: #313131;
  font-size: 18px;
`;

export const StyledSelect = styled.select`
  padding: 13px;
  border: 1px solid black;
  margin: 1vw;
  background-color: transparent;
  width: 65%;
  border-radius: 22px;

  &:focus {
    outline: none;
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  ;

  & > input {
    width: 0%;
  }
`;

export const CheckboxLabel = styled.label`
  display: block;
  border: 1px solid black;
  padding: 15px;
  outline: none;
  margin: 20px 0px 0px 0px;
  width: 66%;
  border-radius: 26px;
`;

export const RadioboxInput = styled.input`
  appearance: none;
  width: 1.2em;
  margin-right: 10px;
  height: 1.2em;
  border: 1px solid #000;
  border-radius: 70%;
  outline: none;
  cursor: pointer;
  &:checked {
    background-color: #00c8ff;
    border-color: white;
  }

  
`;

export const CheckboxInput = styled.input`
  appearance: none;
  width: 1.2em;
  margin-right: 10px;
  height: 1.2em;
  border: 1px solid #000;
  border-radius: 10%;
  outline: none;
  cursor: pointer;
  &:checked {
    background-color: #ff00cc;
    border-color: white;
  }

  
`;



export const TandCondition = styled.div`
  margin-top: 1.5vw;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  color: ${(props) => (props.disabled ? "black" : "white")};
  background-color: ${(props) => (props.disabled ? "grey" : "black")};
  outline: none;
  margin: 1vw;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: 1px solid black;
`;

export const ErrorBox = styled.span`
  color: red;
  font-size: 11px;
  position: relative;
  left: 15px;
`;

export const ErrorModel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 388px;
    height: 54px;
    background-color: #ff360073;
    color: #fff;
`
export const CustomRadioBtn = styled.input`
 appearance: none;
 margin-right: 10px;
  height: 1.2em;
  border: 1px solid #000;
  border-radius: 40%;
  outline: none;
  cursor: pointer; 
  width: 1.2em;  
`