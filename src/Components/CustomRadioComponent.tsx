import React,{ChangeEvent} from "react";
import { RadioboxInput, CheckboxLabel } from "./styles/FormStyles";
import Input from "./Input";



  // interface ICheckBox {
   
  // handleRadioBoxData: (data: any, other: string) => void;
  // handleChange: (e: ChangeEvent) => void;
  // values: any;
  // formik: any;
 
  // }

  const CustomRadioComponent = (props: any) => {
    // const [options, setOptions] = useState("");
    // const [otherData, setOtherData] = useState<string>("");

    // useEffect(() => {
    //   props.handleRadioBoxData(options, otherData);
    // }, [options,otherData, props]);
  



    // const handleCheckboxChange = (options: string) => {
     
    //   setOptions(options);
    // };


    // const handleOtherInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   setOtherData(e.target.value);
    //   console.log(otherData);
    // };
  


    return(
      <>
      {props.type === "radio" ? (
         <CheckboxLabel htmlFor={props.htmlFor}>
         <RadioboxInput
           value={props.label}
           id={props.id}
           onChange={(e)=>{
            props.handleChange(e);
           }}
          type="radio"
          name={props.name}
          checked={props.values.checkdata === props.label}
         />
          {props.label}
       </CheckboxLabel>
      ):(
        <Input
          id={props.id}
          onChange={props.handleChange}
          type="text"
          name={props.name}
        />
      )}
       

     

    
  
      

    
      </>
    )

  }

export default CustomRadioComponent;