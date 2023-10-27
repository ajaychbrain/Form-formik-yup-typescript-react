import React, { useState } from 'react';
import { Form, Formik } from "formik"
import * as Yup from "yup";
import { MainWrapper } from './styles/MainWrapper';
import { Country, State, City } from "country-state-city"
import { Label, MainContainer, MainHeading, NameStyle,CheckboxInput, RadioboxInput, CheckboxLabel, TandCondition, Button } from './styles/FormStyles';
import Input from './Input';
import AddressComponent from './AddressComponent';
import CheckboxComponent from './CustomRadioComponent';
import TermsAndCondition from './TermsAndCondition';
import Errorshow from './Errorshow';
import CustomRadioComponent from './CustomRadioComponent';
import CustomCheckBoxComponent from './CustomCheckBoxComponent';



interface RegisterFormDataValues {
  firstName: string;
  lastname: string;
  dob: string;
  email: string;
  // termsmenu: string;
  checkdata: string;
  phone: string;
  otherValue: string;
  // radioData: string;
  address: {
    country: string;
    state: string;
    city: string;
  };
}

const MainForm: React.FC = () => {
  const initialValues: RegisterFormDataValues = {
    firstName: "",
    lastname: "",
    dob: "",
    email: "",
    // termsmenu: "",
    checkdata: "",
    phone: "",
    otherValue: "",
    // radioData: "",
    address: {
      country: "",
      state: "",
      city: "",
    },

  };

  let phonValidation = /^\d{10}$/;
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name Required").min(3),
    lastname: Yup.string().required("Last Name Required").min(3),
    dob: Yup.date().required("Date Field is Required").max(new Date(Date.now() - 567648000000), "Person Should be Adult Age"),
    phone: Yup.string().required("Phone Number is Required").matches(phonValidation, "Phone Number is not Valid"),
    email: Yup.string().email("Email is not Valid").required("Email is Required"),
    address: Yup.object().shape({
      country: Yup.string().required("Please Select Country"),
      state: Yup.string().required("Please Select State"),
      city: Yup.string().required("Please Select City"),
    }),
    checkdata: Yup.string().required("Filed is required"),
  });

  const handleAddressData = (value: any) => {
  };

  return (
    <>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          console.log("form submitted", values);
          // resetForm();
        }}
        validationSchema={validationSchema}

      >
        {(formikValues) => (
          <>
          <>{console.log(formikValues)}</>
            <Form onSubmit={formikValues.handleSubmit}>
              <MainWrapper>
                <MainHeading>Registration Form </MainHeading>

                <MainContainer>
                  <Label>1. Name*</Label>
                  <NameStyle>
                    <Input
                      name="firstName"
                      type="text"
                      id="firstName"
                      label="firstname"
                      placeholder="First Name"
                      onBlur={formikValues.handleBlur}
                      onChange={formikValues.handleChange}
                      value={formikValues.values.firstName}
                    />
                    {/* <>{console.log(formikValues.errors)}</> */}
                    {formikValues.touched.firstName && formikValues.errors.firstName ? (
                      <Errorshow>{formikValues.errors.firstName}</Errorshow>
                    ) : null}
                    <Input
                      type="text"
                      id="lastname"
                      onBlur={formikValues.handleBlur}
                      name="lastname"
                      onChange={formikValues.handleChange}
                      value={formikValues.values.lastname}
                      placeholder="Last Name"
                    />
                    {
                      formikValues.touched.lastname && formikValues.errors.lastname ? (
                        <Errorshow>{formikValues.errors.lastname}</Errorshow>
                      ) : null
                    }
                  </NameStyle>
                
                </MainContainer>

                <MainContainer>
                  <Label>2. Email*</Label>
                  <Input
                    type="email"
                    id="email"
                    onBlur={formikValues.handleBlur}
                    name="email"
                    value={formikValues.values.email}
                    onChange={formikValues.handleChange}
                    placeholder="Enter Email"

                  />
                  {
                    formikValues.touched.email && formikValues.errors.email ? (
                      <Errorshow>{formikValues.errors.email}</Errorshow>
                    ) : null
                  }
                </MainContainer>
                <MainContainer>
                  <Label>2. TelePhone*</Label>
                  <Input
                    type="phone"
                    id="phone"
                    placeholder="10 digit mobile number"
                    value={formikValues.values.phone}
                    onChange={formikValues.handleChange}

                  />
                  {formikValues.touched.phone && formikValues.errors.phone ? (
                    <Errorshow>{formikValues.errors.phone}</Errorshow>
                  ) : null}

                </MainContainer>

                <MainContainer>

                  <AddressComponent handleAddressData={handleAddressData}
                    handleChange={formikValues.handleChange}
                    values={formikValues.values.address}
                    formik={formikValues}
                  />

                </MainContainer>

                <MainContainer>
                  <Label>5. Date of Birth*</Label>
                  <Input
                    type="date"
                    placeholder="DateofBirth"
                    onBlur={formikValues.handleBlur}
                    onChange={formikValues.handleChange}
                    id="dob"
                    name="dob"
                    value={formikValues.values.dob}

                  />
                  {formikValues.touched.dob && formikValues.errors.dob ? (
                    <Errorshow>{formikValues.errors.dob}</Errorshow>
                  ) : null}

                </MainContainer>

                <MainContainer>
                  <Label>6. Where did you hear about us?</Label>
                  
                  <div>
                    <CustomRadioComponent
                      htmlFor="friend"
                      id="friend"
                      values={formikValues.values}
                      handleChange={formikValues.handleChange}
                      type="radio"
                      name="checkdata"
                      label="Friend"
                    />
                  </div>
                  <div>
                    <CustomRadioComponent
                      htmlFor="website"
                      id="website"
                      type="radio"
                      handleChange={formikValues.handleChange}
                      values={formikValues.values}
                      name="checkdata"
                      label="Website"
                    />
                  </div>
                  <div>
                    <CustomRadioComponent
                      htmlFor="other"
                      id="other"
                      type="radio"
                      handleChange={formikValues.handleChange}
                      values={formikValues.values}
                      name="checkdata"
                      label="Other"
                    />
                  </div>
                </MainContainer>
                <MainContainer>
                  {formikValues.values.checkdata === "Other" ? (
                    <div>
                      <CustomRadioComponent
                        type="text"
                        placeholder="Please specify"
                        value={formikValues.values.otherValue}
                        name="otherValue"
                        handleChange={formikValues.handleChange}
                        label=""
                      />
                    </div>
                  ) : (
                    (formikValues.values.otherValue = "")
                  )}
                  {formikValues.touched.checkdata && formikValues.errors.checkdata ? (
                    <Errorshow>{formikValues.errors.checkdata}</Errorshow>
                  ) : null}

                </MainContainer>

                {/* <MainContainer>
          <Label>7. Your Area of Interest</Label>

          <CustomCheckBoxComponent handleCheckBoxData={handleCheckBoxData} />
        </MainContainer> */}



                <MainContainer>
                  <TandCondition>
                    <CheckboxLabel>
                      <CheckboxInput type="checkbox"
                        name='termsmenu'
                      />
                      I have read, understood, and accepted the PRIVACY POLICY for
                      membership.Terms and Conditions
                    </CheckboxLabel>
                    
                    <Button
                      type="submit"
                    >
                      Submit
                    </Button>
                  </TandCondition>

                </MainContainer>



              </MainWrapper>
            </Form>
          </>
        )}
      </Formik>
    </>

  )
}

export default MainForm;