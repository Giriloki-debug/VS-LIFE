import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import img2 from "../assets/travel/img2.webp"; // Assume this is related to travel
import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[50],
    },
    secondary: {
      main: "#ffff",
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Plans() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-gradient-to-r from-[#1574B3] to-[#Ca1F4A] rounded-2xl p-[45px] flex flex-col items-center px-[10px] w-auto mx-auto container">
      <div className="text-[#ffff] flex flex-col items-center gap-[10px]">
        <h1 className="text-3xl text-[#ffff] text-center font-semibold">
          Travel Insurance Plans for Every Traveler
        </h1>
        <h2 className="text-xl font-semibold">
          Select the travel plan that fits your needs
        </h2>
      </div>
      <div className="">
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <Tabs
            indicatorColor="secondary"
            textColor="#ffff"
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab
              sx={{ fontWeight: "bold", fontSize: "18px" }}
              label="Single Trip Travel Insurance"
              {...a11yProps(0)}
            />
            <Tab
              sx={{ fontWeight: "bold", fontSize: "18px" }}
              label="Annual Multi-Trip Travel Insurance"
              {...a11yProps(1)}
            />
            <Tab
              sx={{ fontWeight: "bold", fontSize: "18px" }}
              label="Student Travel Insurance"
              {...a11yProps(2)}
            />
            <Tab
              sx={{ fontWeight: "bold", fontSize: "18px" }}
              label="Senior Citizen Travel Insurance"
              {...a11yProps(3)}
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            <div className="bg-[#fff] py-[15px] px-[20px] rounded-2xl h-auto laptop:h-[230px]">
              <div className="flex flex-col items-center gap-[20px] w-full">
                <div className="flex flex-col items-center min-w-[120px] max-w-[600px]">
                  <h2 className="text-justify text-[#1574B3] text-lg font-bold">
                    Single Trip Travel Insurance covers you for a one-time
                    journey. It includes coverage for trip cancellations, lost
                    baggage, medical emergencies, flight delays, and other
                    unexpected travel disruptions. Ideal for short trips.
                  </h2>
                </div>
                <button className="flex items-center justify-center gap-[10px] bg-gradient-to-r from-[#1574B3] to-[#Ca1F4A] rounded-xl p-[10px] laptop:px-[20px] laptop:py-[5px]">
                  <h2 className="text-xl text-white font-semibold">Know More</h2>
                  <svg
                    className="w-[25px]"
                    fill="#ffff"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 45.58 45.58"
                    xml:space="preserve"
                    transform="matrix(-1, 0, 0, 1, 0, 0)"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M45.506,33.532c-1.741-7.42-7.161-17.758-23.554-19.942V7.047c0-1.364-0.826-2.593-2.087-3.113 c-1.261-0.521-2.712-0.229-3.675,0.737L1.305,19.63c-1.739,1.748-1.74,4.572-0.001,6.32L16.19,40.909 c0.961,0.966,2.415,1.258,3.676,0.737c1.261-0.521,2.087-1.75,2.087-3.113v-6.331c5.593,0.007,13.656,0.743,19.392,4.313 c0.953,0.594,2.168,0.555,3.08-0.101C45.335,35.762,45.763,34.624,45.506,33.532z"></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="bg-[#fff] py-[15px] px-[20px] rounded-2xl h-auto laptop:h-[230px]">
              <div className="flex flex-col items-center gap-[20px] w-full">
                <div className="flex flex-col items-center min-w-[120px] max-w-[600px]">
                  <h2 className="text-justify text-[#1574B3] text-lg font-bold">
                    Annual Multi-Trip Travel Insurance provides coverage for
                    frequent travelers. It covers multiple trips within a year,
                    with benefits such as emergency medical expenses, trip
                    interruption, lost baggage, and more. Perfect for business
                    or leisure travelers who fly often.
                  </h2>
                </div>
                <button className="flex items-center justify-center gap-[10px] bg-gradient-to-r from-[#1574B3] to-[#Ca1F4A] rounded-xl p-[10px] laptop:px-[20px] laptop:py-[5px]">
                  <h2 className="text-xl text-white font-semibold">Know More</h2>
                  <svg
                    className="w-[25px]"
                    fill="#ffff"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 45.58 45.58"
                    xml:space="preserve"
                    transform="matrix(-1, 0, 0, 1, 0, 0)"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M45.506,33.532c-1.741-7.42-7.161-17.758-23.554-19.942V7.047c0-1.364-0.826-2.593-2.087-3.113 c-1.261-0.521-2.712-0.229-3.675,0.737L1.305,19.63c-1.739,1.748-1.74,4.572-0.001,6.32L16.19,40.909 c0.961,0.966,2.415,1.258,3.676,0.737c1.261-0.521,2.087-1.75,2.087-3.113v-6.331c5.593,0.007,13.656,0.743,19.392,4.313 c0.953,0.594,2.168,0.555,3.08-0.101C45.335,35.762,45.763,34.624,45.506,33.532z"></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="bg-[#fff] py-[15px] px-[20px] rounded-2xl h-auto laptop:h-[230px]">
              <div className="flex flex-col items-center gap-[20px] w-full">
                <div className="flex flex-col items-center min-w-[120px] max-w-[600px]">
                  <h2 className="text-justify text-[#1574B3] text-lg font-bold">
                    Student Travel Insurance is tailored for international
                    students. It covers medical emergencies, trip cancellations,
                    and lost baggage. Perfect for students traveling abroad for
                    studies or exchange programs.
                  </h2>
                </div>
                <button className="flex items-center justify-center gap-[10px] bg-gradient-to-r from-[#1574B3] to-[#Ca1F4A] rounded-xl p-[10px] laptop:px-[20px] laptop:py-[5px]">
                  <h2 className="text-xl text-white font-semibold">Know More</h2>
                  <svg
                    className="w-[25px]"
                    fill="#ffff"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 45.58 45.58"
                    xml:space="preserve"
                    transform="matrix(-1, 0, 0, 1, 0, 0)"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M45.506,33.532c-1.741-7.42-7.161-17.758-23.554-19.942V7.047c0-1.364-0.826-2.593-2.087-3.113 c-1.261-0.521-2.712-0.229-3.675,0.737L1.305,19.63c-1.739,1.748-1.74,4.572-0.001,6.32L16.19,40.909 c0.961,0.966,2.415,1.258,3.676,0.737c1.261-0.521,2.087-1.75,2.087-3.113v-6.331c5.593,0.007,13.656,0.743,19.392,4.313 c0.953,0.594,2.168,0.555,3.08-0.101C45.335,35.762,45.763,34.624,45.506,33.532z"></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className="bg-[#fff] py-[15px] px-[20px] rounded-2xl h-auto laptop:h-[230px]">
              <div className="flex flex-col items-center gap-[20px] w-full">
                <div className="flex flex-col items-center min-w-[120px] max-w-[600px]">
                  <h2 className="text-justify text-[#1574B3] text-lg font-bold">
                    Senior Citizen Travel Insurance covers elderly travelers
                    against medical emergencies, trip cancellations, and other
                    unexpected disruptions during their trips. It provides
                    additional coverage to ensure peace of mind for senior
                    citizens traveling internationally.
                  </h2>
                </div>
                <button className="flex items-center justify-center gap-[10px] bg-gradient-to-r from-[#1574B3] to-[#Ca1F4A] rounded-xl p-[10px] laptop:px-[20px] laptop:py-[5px]">
                  <h2 className="text-xl text-white font-semibold">Know More</h2>
                  <svg
                    className="w-[25px]"
                    fill="#ffff"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 45.58 45.58"
                    xml:space="preserve"
                    transform="matrix(-1, 0, 0, 1, 0, 0)"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M45.506,33.532c-1.741-7.42-7.161-17.758-23.554-19.942V7.047c0-1.364-0.826-2.593-2.087-3.113 c-1.261-0.521-2.712-0.229-3.675,0.737L1.305,19.63c-1.739,1.748-1.74,4.572-0.001,6.32L16.19,40.909 c0.961,0.966,2.415,1.258,3.676,0.737c1.261-0.521,2.087-1.75,2.087-3.113v-6.331c5.593,0.007,13.656,0.743,19.392,4.313 c0.953,0.594,2.168,0.555,3.08-0.101C45.335,35.762,45.763,34.624,45.506,33.532z"></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>

      <div className="bg-[#fff] rounded-2xl px-[15px] py-[30px] flex flex-col laptop:flex-row gap-[20px] justify-center items-center">
                        <img
                          className="rounded-3xl w-[400px]"
                          src={img2}
                        />
                        <div >
                          <li className="text-[#1574B3] font-semibold">Get ₹1 Crore life cover at ₹488/month^13</li>
                          <li className="text-[#1574B3] font-semibold">Avail up to 15% discount on 1st year premium^6</li>
                          <li className="text-[#1574B3] font-semibold">Get 100% premiums back^14</li>
                        </div>
                      </div>
    </div>
  );
}
