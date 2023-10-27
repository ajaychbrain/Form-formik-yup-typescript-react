import React,{useEffect, useState} from "react";
import { CheckboxInput, CheckboxLabel } from "./styles/FormStyles";
import Input from "./Input";

interface CheckBoxOption {
    friendOrColleague: boolean;
    google: boolean;
    articleNews: boolean;
    blogPost: boolean;
    other: boolean;
  }

  interface ICheckBox {
    handleCheckBoxData: (data: any, other: string) => void;
  }

  const CheckboxComponent: React.FC<ICheckBox> = (props) => {
    const [options, setOptions] = useState("");
    const [otherData, setOtherData] = useState<string>("");

    useEffect(() => {
      props.handleCheckBoxData(options, otherData);
    }, [options,otherData]);
  



    const handleCheckboxChange = (options: string) => {
      // console.log(options);
      setOptions(options);
    };


    const handleOtherInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setOtherData(e.target.value);
      console.log(otherData);
    };
  


    return(
      <>
        
        <CheckboxLabel>
        <CheckboxInput
          type="radio"
          name="option"
          value="friendOrColleague"
          onChange={() =>
            handleCheckboxChange("friendOrColleague")
          }
         
        />
        A Friend or Colleague
      </CheckboxLabel>

      <CheckboxLabel>
        <CheckboxInput
          type="radio"
         name="option"
         value="google"
          onChange={() => handleCheckboxChange("google")}
          
        />
        Google
      </CheckboxLabel>

      <CheckboxLabel>
        <CheckboxInput
          type="radio"
        name="option"
        value="articleNews"

          onChange={() =>
            handleCheckboxChange("articleNews")
          }
          
          
        />
        Article News
      </CheckboxLabel>

      <CheckboxLabel>
        <CheckboxInput
          type="radio"
         name="option"
         value="blogPost"
          onChange={() =>
            handleCheckboxChange("blogPost")
          }
          
        />
        Blog Post
      </CheckboxLabel>

      <CheckboxLabel>
        <CheckboxInput
          type="radio"
          name="option"
          value="other"
          onChange={() => handleCheckboxChange("other")}
        />
        Other
      </CheckboxLabel> 

      {options ==="other" && (
        <Input
          type="text"
          placeholder="Please specify"
          value={otherData}
          onChange={handleOtherInputChange}
        />
      )}
      </>
    )

  }

export default CheckboxComponent;