import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MotorInsurance() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container px-[20x]">
      <h2 className="text-xl text-center mb-[10px] text-gray-600 font-semibold">
        Motor Insurance Plan Parameters
      </h2>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
          >
            <Tab label="Eligibility Age" {...a11yProps(0)} />
            <Tab label="Coverage Age" {...a11yProps(1)} />
            <Tab label="Premium Payment Term" {...a11yProps(2)} />
            <Tab label="Sum Insured" {...a11yProps(3)} />
            <Tab label="Premium Amount" {...a11yProps(4)} />
            <Tab label="Premium Payment Mode" {...a11yProps(5)} />
            <Tab label="Coverage Period" {...a11yProps(6)} />
            <Tab label="Policy Terms" {...a11yProps(7)} />
            <Tab label="Coverage Type" {...a11yProps(8)} />
          </Tabs>
        </Box>

        {/* Eligibility Age */}
        <CustomTabPanel value={value} index={0}>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Age Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Minimum</td>
                <td className="border px-4 py-2">18 years</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Maximum</td>
                <td className="border px-4 py-2">65 years</td>
              </tr>
            </tbody>
          </table>
        </CustomTabPanel>

        {/* Coverage Age */}
        <CustomTabPanel value={value} index={1}>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Age Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Minimum</td>
                <td className="border px-4 py-2">18 years</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Maximum</td>
                <td className="border px-4 py-2">75 years</td>
              </tr>
            </tbody>
          </table>
        </CustomTabPanel>

        {/* Premium Payment Term */}
        <CustomTabPanel value={value} index={2}>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Plan Type</th>
                <th className="px-4 py-2 text-left">Premium Payment Term</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Option 1</td>
                <td className="border px-4 py-2">1 year to 10 years</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Option 2</td>
                <td className="border px-4 py-2">5 years to 15 years</td>
              </tr>
            </tbody>
          </table>
        </CustomTabPanel>

        {/* Sum Insured */}
        <CustomTabPanel value={value} index={3}>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Sum Insured</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Minimum</td>
                <td className="border px-4 py-2">Rs. 2 Lakhs</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Maximum</td>
                <td className="border px-4 py-2">Rs. 50 Lakhs</td>
              </tr>
            </tbody>
          </table>
        </CustomTabPanel>

        {/* Premium Amount */}
        <CustomTabPanel value={value} index={4}>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Plan Type</th>
                <th className="px-4 py-2 text-left">Premium Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Option 1</td>
                <td className="border px-4 py-2">Rs. 5000 annually</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Option 2</td>
                <td className="border px-4 py-2">Rs. 15000 annually</td>
              </tr>
            </tbody>
          </table>
        </CustomTabPanel>

        {/* Premium Payment Mode */}
        <CustomTabPanel value={value} index={5}>
          <div className="text-center">
            <p className="text-md text-gray-600 font-semibold">
              Single, Annual, Half-yearly, Quarterly, Monthly
            </p>
          </div>
        </CustomTabPanel>

        {/* Coverage Period */}
        <CustomTabPanel value={value} index={6}>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Coverage Period</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Minimum</td>
                <td className="border px-4 py-2">1 year</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Maximum</td>
                <td className="border px-4 py-2">Lifetime</td>
              </tr>
            </tbody>
          </table>
        </CustomTabPanel>

        {/* Policy Terms */}
        <CustomTabPanel value={value} index={7}>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Term</th>
                <th className="px-4 py-2 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Policy Term</td>
                <td className="border px-4 py-2">5 years to 30 years</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Renewal</td>
                <td className="border px-4 py-2">Automatic renewal option</td>
              </tr>
            </tbody>
          </table>
        </CustomTabPanel>

        {/* Coverage Type */}
        <CustomTabPanel value={value} index={8}>
          <div className="text-center">
            <p className="text-md text-gray-600 font-semibold">
              Comprehensive or Third-Party Plans
            </p>
          </div>
        </CustomTabPanel>
      </Box>
    </div>
  );
}
