import { Checkbox, FormControlLabel } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React from "react";

const CustomTabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const Profile = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className  ="container mx-auto mt-[120px]">
        <div className="flex justify-between">
          <p className="text-xl font-semibold hidden tablet:block">
            3 Matches based on your Preferences
          </p>
          <div className="hidden tablet:block">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Show profile you not visit"
            />
          </div>
          <div>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Filter" {...a11yProps(0)} />
                  <Tab label="Next" {...a11yProps(1)} />
          
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
              Filter
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
              Next
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                Item Three
              </CustomTabPanel>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
