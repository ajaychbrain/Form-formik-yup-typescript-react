import React, { useState } from 'react';
import { MainWrapper } from './styles/MainWrapper';
import {Country, State, City } from "country-state-city"
// import envelope from "./"
import {Label, MainContainer, MainHeading, NameStyle } from './styles/FormStyles';
// import MessageIcon from "./svg/messageIcon.svg";
import Input from './Input';
import AddressComponent from './AddressComponent';
import CheckboxComponent from './CheckBoxComponents';
import TermsAndCondition from './TermsAndCondition';
import Errorshow from './Errorshow';
// import { Container, LabelStyle } from './styles/FormStyles';

const MainForm: React.FC = () => {
  const [data, setData] = useState({
    name: {
      firstname: "",
      secondname: "",
    },
    email: "",
    phone: "",
    dob: "",
    checkboxData: {},
    address: {
      country: "",
      state: "",
      city: "",
    },
    otherData:"",
  });

  const initialError = {
    name: {
      firstname: "",
      secondname: "",
    },
    email: "",
    phone: "",
    dob: "",
  };



  const [error, setError] = useState(initialError);
  const handleAddressData = (data: any) => {
    setData((prev) => {
      return {
        ...prev,
        address: {
          country: data.country,
          state: data.state,
          city: data.city,
        },
      };
    });
  };
  const handleCheckBoxData = (data: any, other:string) => {
    console.log(other)
    setData((prev) => {
      return {
        ...prev,
        checkboxData: data,
        otherData:other
      };
    });
  };


  const onChangeHandler = (e: any, w: string) => {
    if (w === "fname") {
      let fname = e.target.value;
      setData((prev) => {
        return {
          ...prev,
          name: {
            ...prev.name,
            firstname: fname,
          },
        };
      });
    }
    if (w === "lname") {
      let lname = e.target.value;
      setData((prev) => {
        return {
          ...prev,
          name: {
            ...prev.name,
            secondname: lname,
          },
        };
      });
    } else {
      let value = e.target.value;
      setData((prev) => {
        return {
          ...prev,
          [w]: value,
        };
      });
    }
  };

  const validateFormData = () => {
    let isValid = true;
    let allerror = { ...error };
    if (data.name.firstname.length < 4 || !/^[A-Za-z]+$/.test(data.name.firstname)) {
      isValid = false;
      allerror.name.firstname =
        "Please Enter Valid First Name";
    }

    if (data.name.secondname.length < 4 || !/^[A-Za-z]+$/.test(data.name.secondname)) {
      isValid = false;
      allerror.name.secondname =
        "Please Enter Valid Last Name";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      isValid = false;
      allerror.email = "Please enter a valid email address.";
    }

    let phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(data.phone)) {
      isValid = false;
      allerror.phone = "Please enter a valid mobile number (10 digits)";
    }

    if (data.dob.length < 1) {
      isValid = false;
      allerror.dob = "Please enter date of birth";
    }
    setError(allerror);

    return isValid;
  }



  const onSubmitHandler = () => {
    const isValid = validateFormData();
    if (isValid) {
      console.log("Form Submitted SuccessFully",data);
    }

  };




  return (
    <>
      <MainWrapper>
        <MainHeading>Registration Form </MainHeading>

        <MainContainer>
          <Label>1. Name*</Label>
          <NameStyle>
            <Input
              type="text"
              label="NAME *"
              placeholder="First Name"
              // icon={MessageIcon}
              onChange={(e: any) => onChangeHandler(e, "fname")}

            />
            <Input
              type="text"
              placeholder="Last Name"
              onChange={(e: any) => onChangeHandler(e, "lname")}
            />
          </NameStyle>
          <div style={{display:'flex',justifyContent:'center'}}>
           <span> 
          {error.name.firstname ? <Errorshow message={error.name.firstname} /> : ""}
          </span><br/>
          <span style={{marginLeft:'143px'}}>
          {error.name.secondname ? <Errorshow message={error.name.secondname} /> : ""}
          </span>
          </div>
        </MainContainer>

        <MainContainer>
          <Label>2. Email*</Label>
          <Input
            type="email"

            placeholder="Email"
            onChange={(e: any) => onChangeHandler(e, "email")}

          />
          {error.email ? <Errorshow message={error.email} /> : ""}
        </MainContainer>

        <MainContainer>
          <Label>2. TelePhone*</Label>
          <Input
            type="phone"
            //   icon={telephone}
            placeholder="10 digit mobile number"
            onChange={(e: any) => onChangeHandler(e, "phone")}

          />
           {error.phone ? <Errorshow message={error.phone} /> : ""}

        </MainContainer>

        <MainContainer>

          <AddressComponent handleAddressData={handleAddressData} />

        </MainContainer>

        <MainContainer>
          <Label>5. Date of Birth*</Label>
          <Input
            type="date"
            placeholder="DateofBirth"
            onChange={(e: any) => onChangeHandler(e, "dob")}

          />
           {error.dob ? <Errorshow message={error.dob} /> : ""}

        </MainContainer>  

        <MainContainer>
          <Label>6. Where did you hear about us?</Label>

          <CheckboxComponent handleCheckBoxData={handleCheckBoxData} />
        </MainContainer>

        <MainContainer>
          <TermsAndCondition onSubmitHandler={onSubmitHandler} />

        </MainContainer>

    

      </MainWrapper>
    </>

  )



}

export default MainForm;