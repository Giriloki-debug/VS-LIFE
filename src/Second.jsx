import { useState ,useEffect} from "react";
import { TextField, Typography, Box, InputLabel, MenuItem, FormControl, Select, List, ListItem, Autocomplete } from "@mui/material";
import { db } from "./firebase-config"; // Import Firestore
import { addDoc, collection} from "firebase/firestore";
import { Country, State, City } from "country-state-city";

const heights = [
  { feet: 4.5, cm: 137 }, { feet: 4.6, cm: 140 }, { feet: 4.7, cm: 143 }, 
  { feet: 4.8, cm: 146 }, { feet: 4.9, cm: 149 }, { feet: 5.0, cm: 152 }, 
  { feet: 5.1, cm: 155 }, { feet: 5.2, cm: 158 }, { feet: 5.3, cm: 161 }, 
  { feet: 5.4, cm: 164 }, { feet: 5.5, cm: 167 }, { feet: 5.6, cm: 170 }, 
  { feet: 5.7, cm: 173 }, { feet: 5.8, cm: 176 }, { feet: 5.9, cm: 179 }, 
  { feet: 6.0, cm: 182 }, { feet: 6.1, cm: 185 }, { feet: 6.2, cm: 188 }, 
  { feet: 6.3, cm: 191 }, { feet: 6.4, cm: 194 }, { feet: 6.5, cm: 197 }, 
  { feet: 6.6, cm: 200 }, { feet: 6.7, cm: 203 }, { feet: 6.8, cm: 206 }, 
  { feet: 6.9, cm: 209 }, { feet: 7.0, cm: 213 }
];

const Second = () => {
  const [showfield, setShowfield] = useState(false);
  const [showfield1, setShowfield1] = useState(false);
  const [age, setAge] = useState('');
  const [selectedDiet, setSelectedDiet] = useState("");
  const [selectedChildren, setSelectedChildren] = useState("No");
  const [familyCity, setFamilyCity] = useState("");
  const [selectedHeight, setSelectedHeight] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedFamily, setSelectedFamily] = useState(null);

  useEffect(() => {
    setCountries(Country.getAllCountries().map((country) => ({
      name: country.name,
      isoCode: country.isoCode,
    })));
  }, []);

  const handleMaritalStatus = (event) => {
    setAge(event.target.value);
    if (event.target.value === 10) {
      setShowfield1(false);
    } else {
      setShowfield1(true);
    }
  };

  const handleSelectDiet = (value) => {
    setSelectedDiet(value);
  };

  const handleSelectChildren = (value) => {
    setSelectedChildren(value);
  };

  const handleYesTab = () => {
    setSelectedFamily("yes");
    setShowfield(false);
    setFamilyCity("");
  };
  
  const handleFamilyTab = () => {
    setSelectedFamily("no");
    setShowfield(true);
  };

  const handleSave = async () => {
    if (!age) {
      alert("Please select marital status");
      return;
    }
    if (showfield && !familyCity.trim()) {
      alert("Please enter the city where his family lives");
      return;
    }
  
    const userData = {
      maritalStatus: age,
      diet: selectedDiet,
      childrenStatus: showfield1 ? selectedChildren : "N/A",
      familyCity: showfield ? familyCity : "N/A",
      height: `${ selectedHeight.feet +'feet',selectedHeight.cm  +'cm'}` ,
      country: selectedCountry.name,
      state: selectedState.name,
      city: selectedCity.name
    };
  
    try {
      await addDoc(collection(db, "users"), userData);
      alert("Data saved successfully!");
  
      // **Clear all fields after successful submission**
      setAge("");
      setSelectedDiet("");
      setShowfield1(false);
      setSelectedChildren("");
      setFamilyCity("");
      setShowfield(false);
      setSelectedHeight(null);
      setSelectedCountry(null);
      setSelectedState(null);
      setSelectedCity(null);
  
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data.");
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
  };

  return (
    <div className="bg-gradient-to-r from-[#42BBB8] via-[#4EBDAA] to-[#6DC383] min-h-screen w-full flex justify-center items-center py-10">
  <div className="bg-white rounded-xl w-full max-w-3xl  shadow-lg">

     <div className="flex justify-between items-center  my-10 w-full p-10 ">
  <p className="text-center text-4xl text-black font-semibold flex-1">
    Let&apos;s Create Your Profile Now
  </p>
  <p className="text-right w-auto">70%</p>
</div>

      <div className="flex justify-center items-center my-3 mx-10">
        <div>
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

          <div className="flex justify-center items-center">
            <div className="mx-4">
              <Typography variant="h6" gutterBottom>He lives with his family?</Typography>
              <div className="flex gap-5 my-3 justify-center items-center">
              <button 
  className={`border rounded-3xl px-4 py-2 transition ${
    selectedFamily === "yes" ? "bg-green-300 text-white" : "bg-white"
  }`}
  onClick={handleYesTab}
>
  Yes
</button>

<button 
  className={`border rounded-3xl px-4 py-2 transition ${
    selectedFamily === "no" ? "bg-green-300 text-white" : "bg-white"
  }`}
  onClick={handleFamilyTab}
>
  No
</button>

              </div>
              {showfield && (
                <TextField 
                  id="family-city" 
                  label="City his family lives in?" 
                  variant="standard" 
                  className="tablet:w-[500px] w-[360px]" 
                  value={familyCity} 
                  onChange={(e) => setFamilyCity(e.target.value)}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-5">
        <Box sx={{ minWidth: 180 }}>
          <FormControl fullWidth>
            <InputLabel id="marital-status-label">His Marital Status</InputLabel>
            <Select
              labelId="marital-status-label"
              id="marital-status"
              value={age}
              label="His Marital Status"
              variant="standard"
              onChange={handleMaritalStatus}
              className="tablet:w-[500px] w-[360px]"
            >
              <MenuItem value={10}>Never Married</MenuItem>
              <MenuItem value={20}>Divorced</MenuItem>
              <MenuItem value={30}>Widowed</MenuItem>
              <MenuItem value={40}>Awaiting Divorce</MenuItem>
              <MenuItem value={50}>Annulled</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      {showfield1 && (
        <div className="flex flex-col items-center justify-center mt-5">
          <Typography variant="h6" gutterBottom>Does he have any children?*</Typography>
          <List className="my-10 grid grid-cols-2 gap-x-6 gap-4 tablet:w-[500px] w-[360px] justify-center items-center">
            {["Yes, Living together", "No", "Yes, Not Living together"].map((options) => (
              <ListItem
                key={options}
                button
                onClick={() => handleSelectChildren(options)}
                className="!flex !justify-center text-xs"
                sx={{
                  width: "200px",
                  cursor: "pointer",
                  backgroundColor: selectedChildren === options ? "#86EFAC" : "transparent",
                  borderRadius: "25px",
                  padding: "10px",
                  transition: "background 0.3s",
                }}
              >
                <Typography>{options}</Typography>
              </ListItem>
            ))}
          </List>
        </div>
      )}

      <div className="flex flex-col items-center justify-center my-3">
        <Typography variant="h6" gutterBottom>His Diet</Typography>
        <List className="my-10 tablet:w-[500px] w-[360px] gap-3 grid grid-cols-3">
          {["Veg", "Non-Veg", "Eggetarian", "Jain", "Vegan"].map((option) => (
            <ListItem
              key={option}
              button
              onClick={() => handleSelectDiet(option)}
              className="!flex !justify-center text-xs"
              sx={{
                width: "120px",
                cursor: "pointer",
                backgroundColor: selectedDiet === option ? "#86EFAC" : "transparent",
                "&:hover": { backgroundColor: "#BBF7D0" },
                borderRadius: "25px",
                padding: "10px",
                transition: "background 0.3s",
              }}
            >
              <Typography>{option}</Typography>
            </ListItem>
          ))}
        </List>
      </div>

      <div className="flex flex-col my-3 justify-center items-center">
        <div className="flex justify-center items-center">
          <Typography variant="h6" gutterBottom>His Height</Typography>
        </div>
        <div className="tablet:w-[500px] w-[360px]">
          <Autocomplete
            options={heights}
            getOptionLabel={(option) => `Feet: ${option.feet}, CM: ${option.cm}`}
            value={selectedHeight}
            onChange={(event, newValue) => {
              setSelectedHeight(newValue);
            }}
            renderInput={(params) => (
              <TextField className="w-[200px]" {...params} label="Select Height" variant="standard" />
            )}
          />
        </div>
      </div>

      <div className="flex justify-center items-center my-10">
        <button className="rounded-2xl bg-[#0bd5ef] hover:bg-[#00BCD5] px-5 p-2 " onClick={handleSave} >
          Continue
        </button>
      </div>
    </div>
    </div>
  );
};

export default Second;