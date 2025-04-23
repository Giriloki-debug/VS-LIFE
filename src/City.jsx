import { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Country, State, City } from "country-state-city";

const LocationSelect = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationOptions, setLocationOptions] = useState([]);

  useEffect(() => {
  
         const locations = Country.getAllCountries().map((country) => {
         const states = State.getStatesOfCountry(country.isoCode).map((state) => {
         const cities = City.getCitiesOfState(country.isoCode, state.isoCode).map((city) => ({
          cityName: city.name,
          stateName: state.name,
          countryName: country.name,
          isoCode: city.isoCode,
        }));
        return cities;
      });

      return {
        countryName: country.name,
        isoCode: country.isoCode,
        states: states.flat(),
      };
    });

    setLocationOptions(locations.flat Map((location) => location.states));
  }, []);

  return (
    <div className="flex flex-col space-y-4 p-4 w-full justify-center items-center">
      <div className="w-[400px]">
        <Autocomplete
          options={locationOptions}
          getOptionLabel={(option) =>` ${option.cityName}, ${option.stateName}, ${option.countryName}`}
          value={selectedLocation}
          onChange={(_, newValue) => setSelectedLocation(newValue)}
          renderInput={(params) => <TextField {...params} label="Select Location" />}
        />
      </div>

      {selectedLocation && (
        <>
          <p>Country: {selectedLocation.countryName}</p>
          <p>State: {selectedLocation.stateName}</p>
          <p>City: {selectedLocation.cityName}</p>
        </>
      )}
    </div>
  );
};

export default LocationSelect;