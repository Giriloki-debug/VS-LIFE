import React, { useState } from "react";
import { Autocomplete, TextField, Typography } from "@mui/material";
import { db } from "./firebase-config"; // Import Firebase config
import { doc, setDoc } from "firebase/firestore";

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

export default function Height() {
  const [selectedHeight, setSelectedHeight] = useState(null);

  const handleSave = async (height) => {
    if (!height) {
      alert("Please select a height before saving.");
      return;
    }

    const heightData = {
      feet: height.feet,
      cm: height.cm
    };

    try {
      await setDoc(doc(db, "users", "uniqueUserId"), { height: heightData }, { merge: true });
      alert("Height saved successfully!");
    } catch (error) {
      console.error("Error saving height:", error);
      alert("Failed to save height.");
    }
  };

  return (
    <>
      <div className="flex flex-col my-3">
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
              if (newValue) {
                handleSave(newValue);
              }
            }}
            renderInput={(params) => (
              <TextField className="w-[200px]" {...params} label="Select Height" variant="standard" />
            )}
          />
        </div>
      </div>
    </>
  );
}
