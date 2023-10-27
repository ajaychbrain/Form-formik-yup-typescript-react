import React,{useState} from "react";

import { Button, RadioboxInput, CheckboxLabel, TandCondition } from "./styles/FormStyles";


interface ITandCond {
    onSubmitHandler: (data: any) => void;
  }

  const TermsAndCondition: React.FC<ITandCond> = (props: any) => {
    // const [ischecked, setIsChecked] = useState<boolean>(false);
    return (
        <>
        <TandCondition>
            <CheckboxLabel>
                <RadioboxInput type="checkbox"/>
                I have read, understood, and accepted the PRIVACY POLICY for
                membership.Terms and Conditions
            </CheckboxLabel>
            <Button  onClick={props.onSubmitHandler}>
        Submit
      </Button>
        </TandCondition>
        
        </>
    )

  }

  export default TermsAndCondition;