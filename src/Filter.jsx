import { useState, useEffect } from "react";
import { Autocomplete, TextField, Typography } from "@mui/material";
import { Country, State, City } from "country-state-city";
import { db } from "./firebase-config"; // Import Firebase config
import { doc, setDoc } from "firebase/firestore";

const Filter = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setCountries(Country.getAllCountries().map((country) => ({
      name: country.name,
      isoCode: country.isoCode,
    })));
  }, []);

  const handleSaveLocation = async (country, state, city) => {
    if (!country || !state || !city) {
      alert("Please select Country, State, and City before saving.");
      return;
    }

    const locationData = {
      country: country.name,
      state: state.name,
      city: city.name
    };

    try {
      await setDoc(doc(db, "users", "uniqueUserId"), { location: locationData }, { merge: true });
      alert("Location saved successfully!");
    } catch (error) {
      console.error("Error saving location:", error);
      alert("Failed to save location.");
    }
  };

  const handleCountryChange = (_, newValue) => {
    setSelectedCountry(newValue);
    setSelectedState(null);
    setSelectedCity(null);
    if (newValue) {
      setStates(State.getStatesOfCountry(newValue.isoCode).map((state) => ({
        name: state.name,
        isoCode: state.isoCode,
      })));
    } else {
      setStates([]);
    }
  };

  const handleStateChange = (_, newValue) => {
    setSelectedState(newValue);
    setSelectedCity(null);
    if (newValue) {
      setCities(City.getCitiesOfState(selectedCountry.isoCode, newValue.isoCode).map((city) => ({
        name: city.name,
      })));
    } else {
      setCities([]);
    }
  };

  const handleCityChange = (_, newValue) => {
    setSelectedCity(newValue);
    if (newValue) {
      handleSaveLocation(selectedCountry, selectedState, newValue);
    }
  };

  return (
    <div className="flex flex-col space-y-4 p-4 w-full justify-center items-center">
      <Typography variant="h6" gutterBottom>Where he Lives?</Typography>

      <div className="tablet:w-[500px] w-[360px]">
        <Autocomplete
          options={countries}
          getOptionLabel={(option) => option.name}
          value={selectedCountry}
          onChange={handleCountryChange}
          renderInput={(params) => <TextField {...params} variant="standard" label="Country" />} 
        />
      </div>

      <div className="tablet:w-[500px] w-[360px]">
        <Autocomplete
          options={states}
          getOptionLabel={(option) => option.name}
          value={selectedState}
          onChange={handleStateChange}
          disabled={!selectedCountry}
          renderInput={(params) => <TextField {...params} variant="standard" label="State" />} 
        />
      </div>

      <div className="tablet:w-[500px] w-[360px]">
        <Autocomplete
          options={cities}
          getOptionLabel={(option) => option.name}
          value={selectedCity}
          onChange={handleCityChange}
          disabled={!selectedState}
          renderInput={(params) => <TextField {...params} variant="standard" label="City" />} 
        />
      </div>
    </div>
  );
};

export default Filter;
