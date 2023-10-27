import React,{useState, useEffect} from "react";
import { AddressContainer, Label, NameStyle, StyledSelect } from "./styles/FormStyles";
import { Country, State, City } from "country-state-city"
interface IType {
    handleAddressData: (data: any) => void;
  }
const AddressComponent: React.FC<IType>= (props)=>{

    const [mainAddress, setMainAddress] = useState({
      country: {
        name:null,
        code:null,
      },
      state: {
        name: null,
      },
      city: null,
    });

      const [countries, setCountries] = useState<any[]>([]);
      const [states, setStates] = useState<any[]>([]);
      const [cities, setCities] = useState<any[]>([]);

      useEffect(()=>{
        let allCountries = Country.getAllCountries();
        let countryMenu = allCountries.map((country)=>{
          return {
            name: country.name,
            code: country.isoCode,
          };

        });
        setCountries(countryMenu)

      },[])

        useEffect(()=>{
          props.handleAddressData(mainAddress)
        },[mainAddress]);

        const countryChange = (e:any) => {
          const option = countries.find((country)=> country.name === e.target.value);
          setMainAddress((pre)=>({
            ...pre,
            country:option,
          }));
       
        const states = State.getStatesOfCountry(option.code);
        setStates(states);
      }

      const handleStateChange = (e: any) => {
        const option = states.find((state)=> state.name === e.target.value);
        setMainAddress((pre)=>({
          ...pre,
          state:option,
        }));
        const city = City.getCitiesOfState(option.countryCode, option.isoCode);
        setCities(city);

      };

      const handleCityChange = (e:any) => {
        const option = cities.find((city)=> city.name ===e.target.value);
        setMainAddress((pre)=>({
          ...pre,
          city:option,
        }));
      };

    return(
        <>
          <Label>4. Address</Label>
          <AddressContainer>
          <NameStyle>
          <StyledSelect
            onChange={(e)=>countryChange(e)}
            defaultValue="Select Country"
            name="country"
            id="country"
          >
            <option value="Select Country" disabled>
              Select Country
            </option>
            {
              countries.map((country)=>{
                return (
                  <option key={country.code} value={country.name}>
                  {country.name}
                </option>
                );
              })
            }
           
          </StyledSelect>
        </NameStyle>
        <NameStyle>
          <StyledSelect
           onChange={handleStateChange}
            placeholder="Select State"
            defaultValue="Select State"
            name="state"
            id="state"
          >
            <option value="Select State" disabled>
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
        </NameStyle>

        <NameStyle>
          <StyledSelect
            onChange={handleCityChange}
            defaultValue="Select City"
            name="city"
            id="city"
          >
            <option value="Select City" disabled>
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
        </NameStyle>
            </AddressContainer>
        
        </>
    )

}

export default AddressComponent;