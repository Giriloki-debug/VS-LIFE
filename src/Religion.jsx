import React,{ useState, useEffect } from "react";
import { Autocomplete, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Typography } from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';
import { styled } from "@mui/material/styles";
import Slide from '@mui/material/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': { padding: theme.spacing(2) },                               
  '& .MuiDialogActions-root': { padding: theme.spacing(1) }
}));

const languages = [
  "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Azerbaijani",
  "Basque", "Belarusian", "Bengali", "Bosnian", "Bulgarian", "Catalan",
  "Cebuano", "Chichewa", "Chinese (Simplified)", "Chinese (Traditional)",
  "Corsican", "Croatian", "Czech", "Danish", "Dutch", "English", "Esperanto",
  "Estonian", "Filipino", "Finnish", "French", "Frisian", "Galician", "Georgian",
  "German", "Greek", "Gujarati", "Haitian Creole", "Hausa", "Hawaiian", "Hebrew",
  "Hindi", "Hmong", "Hungarian", "Icelandic", "Igbo", "Indonesian", "Irish",
  "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Kinyarwanda",
  "Korean", "Kurdish (Kurmanji)", "Kyrgyz", "Lao", "Latin", "Latvian", "Lithuanian",
  "Luxembourgish", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese",
  "Maori", "Marathi", "Mongolian", "Myanmar (Burmese)", "Nepali", "Norwegian",
  "Odia (Oriya)", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi",
  "Romanian", "Russian", "Samoan", "Scots Gaelic", "Serbian", "Sesotho",
  "Shona", "Sindhi", "Sinhala", "Slovak", "Slovenian", "Somali", "Spanish",
  "Sundanese", "Swahili", "Swedish", "Tajik", "Tamil", "Tatar", "Telugu",
  "Thai", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uyghur", "Uzbek",
  "Vietnamese", "Welsh", "Xhosa", "Yiddish", "Yoruba", "Zulu"
];

export default function ReligionCasteModal() {
  const [open, setOpen] = useState(false);
  const [religionOptions, setReligionOptions] = useState([]);
  const [selectedReligion, setSelectedReligion] = useState(null);
  const [selectedCaste, setSelectedCaste] = useState(null);
  const [casteOptions, setCasteOptions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setReligionOptions(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (selectedReligion && Array.isArray(selectedReligion.castes)) {
      setCasteOptions(selectedReligion.castes);
    } else {
      setCasteOptions([]);
    }
    setSelectedCaste(null);                               
  }, [selectedReligion]);

  const handleOpen = () => setOpen(true);
 
  const handleCountryChange = (event, value) => setSelectedCountry(value);

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>Select Religion & Caste</Button>
      <BootstrapDialog  TransitionComponent={Transition}
        keepMounted  open={open}>
        
        {/* <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({ position: "absolute", right: 8, top: 8, color: theme.palette.grey[500] })}
        >
          <CloseIcon />
        </IconButton> */}
        <DialogContent className="flex top-3 w-[600px] h-[600px]" dividers>
        
          <div className="flex flex-col gap-4 w-full mt-6">
            <div className="flex justify-center">
          <GroupsIcon sx={{ fontSize: 75, color: '#006C48',backgroundColor:'#6CE4B4',padding:'10px',borderRadius:"200px"}}/></div>
            <p className="text-2xl font-semibold">Religion</p>
            <Autocomplete
            className="w-full"
              options={religionOptions}
              getOptionLabel={(option) => option?.name}
              value={selectedReligion}
              onChange={(event, value) => setSelectedReligion(value)}
              isOptionEqualToValue={(option, value) => option?.id === value?.id}
              renderInput={(params) => <TextField {...params} label="Religion" />}
            />
            <p className="text-2xl font-semibold">Caste</p>
            <Autocomplete
             className="w-full"
              options={casteOptions}
              getOptionLabel={(option) => option?.name}
              value={selectedCaste}
              onChange={(event, value) => setSelectedCaste(value)}
              isOptionEqualToValue={(option, value) => option?.id === value?.id}
              renderInput={(params) => <TextField {...params} label="Caste" />}
              disabled={!selectedReligion}
            />
               <p className="text-2xl font-semibold">Languages</p>
            <Autocomplete
             className="w-full"
              options={languages.map((lang) => ({ name: lang }))}
              getOptionLabel={(option) => option.name}
              value={selectedCountry}
              onChange={handleCountryChange}
              renderInput={(params) => <TextField {...params} label="Language" />} 
              disabled={!selectedCaste}
            />
           <div className="mx-auto">
                <Button variant="contained" className="!text-xl !font-semibold !rounded-full ">Continue</Button>
        </div>
          </div>
          
        </DialogContent>
        {/* <DialogActions>
        
        </DialogActions> */}
      </BootstrapDialog>
    </>
  );
}