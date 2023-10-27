import React, { useState, useEffect, ChangeEvent } from "react";
import { AddressContainer, Label, NameStyle, StyledSelect } from "./styles/FormStyles";
import { Country, State, City } from "country-state-city"
import Errorshow from "./Errorshow";

interface IType {
  handleAddressData: (data: any) => void;
  handleChange: (e: ChangeEvent) => void;
  values: any;
  formik: any;
}



const AddressComponent: React.FC<IType> = (props) => {

  const [mainAddress, setMainAddress] = useState({
    country: {
      name: null,
      code: null,
    },
    state: {
      name: null,
    },
    city: null,
  });

  const [countries, setCountries] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);

  useEffect(() => {
    let allCountries = Country.getAllCountries();
    let countryMenu = allCountries.map((country) => {
      return {
        name: country.name,
        code: country.isoCode,
      };

    });
    setCountries(countryMenu)

  }, [])

  useEffect(() => {
    props.handleAddressData(mainAddress)
  }, [mainAddress, props]);

  const countryChange = (name: any) => {
    const option = countries.find((country) => country.name === name);
    setMainAddress((pre) => ({
      ...pre,
      country: option,
    }));

    const states = State.getStatesOfCountry(option.code);
    setStates(states);
  }

  const handleStateChange = (name: any) => {
    const option = states.find((state) => state.name === name);
    setMainAddress((pre) => ({
      ...pre,
      state: option,
    }));
    const city = City.getCitiesOfState(option.countryCode, option.isoCode);
    setCities(city);

  };

  const handleCityChange = (name: any) => {
    const option = cities.find((city) => city.name === name);
    setMainAddress((pre) => ({
      ...pre,
      city: option,
    }));
  };

  return (
    <>
      <Label>4. Address</Label>
      <AddressContainer>
        {/* <>{console.log(props.values)}</> */}
        <NameStyle>
          <StyledSelect
            onChange={(e) => {
              countryChange(e.target.value)
              props.handleChange(e);
            }}
            value={props.values.country}
            name="address.country"
            id="address.country"
          >
            <option value="Select Country">
              Select Country
            </option>
            {
              countries.map((country) => {
                return (
                  <option key={country.code} value={country.name}>
                    {country.name}
                  </option>
                );
              })
            }

          </StyledSelect>
          {props.formik.touched.address?.country &&
            props.formik.errors.address?.country ? (
            <Errorshow>{props.formik.errors.address.country}</Errorshow>
          ) : null}
        </NameStyle>
      </AddressContainer>
      <AddressContainer>
        <NameStyle>
          <StyledSelect
            onChange={(e) => {
              handleStateChange(e.target.value);
              props.handleChange(e);
            }}
            placeholder="Select State"
            name="address.state"
            id="address.state"
            value={props.values.state}
          >
            <option value="Select State">
              Select State
            </option>
            {states.map((state) => {
              // console.log(country)
              return (
                <option key={state.name} value={state.state}>
                  {state.name}
                </option>
              );
            })}
          </StyledSelect>
          {props.formik.touched.address?.state &&
            props.formik.errors.address?.state ? (
            <Errorshow>{props.formik.errors.address.state}</Errorshow>
          ) : null}
        </NameStyle>
      </AddressContainer>
      <AddressContainer>
        <NameStyle>
          <StyledSelect
            onChange={(e) => {
              handleCityChange(e.target.value);
              props.handleChange(e);
            }}
            value={props.values.city}
            name="address.city"
            id="address.city"
          >
            <option value="Select City">
              Select City
            </option>
            {cities.map((city) => {
              // console.log(country)
              return (
                <option key={city.name} value={city.code}>
                  {city.name}
                </option>
              );
            })}

          </StyledSelect>
          {props.formik.touched.address?.city &&
            props.formik.errors.address?.city ? (
            <Errorshow>{props.formik.errors.address.city}</Errorshow>
          ) : null}
        </NameStyle>
      </AddressContainer>

    </>
  )

}

export default AddressComponent;