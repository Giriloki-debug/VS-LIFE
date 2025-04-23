import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import img1 from "./assets/tabs/img1.jpg";
import img2 from "./assets/tabs/img2.jpg";
import img3 from "./assets/tabs/img3.jpg";
import img4 from "./assets/tabs/img4.jpg";
import img5 from "./assets/tabs/img5.jpg";

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "100%" }}
      className="container mx-auto"
      style={{ overflowX: "auto" }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
        > 
          <Tab sx={{fontSize:"18px",fontWeight:"bold"}} label="Savings Plans" {...a11yProps(0)} />
          <Tab sx={{fontSize:"18px",fontWeight:"bold"}} label="Term Plans" {...a11yProps(1)} />
          <Tab sx={{fontSize:"18px",fontWeight:"bold"}} label="ULIPs Plans" {...a11yProps(2)} />
          <Tab sx={{fontSize:"18px",fontWeight:"bold"}} label="Retirement Plans" {...a11yProps(3)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <div className="w-full flex flex-col laptop:flex-row  items-center text-justify">
          <div className="w-full laptop:w-1/2 pr-4">
            <img src={img3} alt="Savings Plans" className="rounded-xl " />
          </div>
          <p className="w-full laptop:w-3/4 text-xl">
          <h1 className="font-bold text-3xl laptop:-mt-[20px]">Savings Plans</h1>
          Savings plans are insurance plans that combine the benefits of protection and savings. Savings plans allow you to save money over the policy term while simultaneously offering you the benefits of protection. This means you get to give your family the gift of financial security to live a fikar-free Health.
          <div className="border-l-4 border-blue-600 flex laptop:mt-[40px] tablet:mt-[20px] mt-[10px]">
  <div className="flex flex-col p-4">
    <h3 className="text-2xl font-bold">Guaranteed Returns</h3>
    <p>With a savings plan, you can get guaranteed^^ returns as a maturity benefit pay-out. This will help you accomplish your financial goals with the benefit of Health insurance policy</p>
  </div>
  <div className="border-l-4 border-blue-600 p-4">
    <div className="flex flex-col">
      <h3 className="text-2xl font-bold">Rider Options</h3>
      <p>You can increase the coverage of your policy by adding additional riders to get the complete policy coverage</p>
    </div>
  </div>
</div>
 </p>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="w-full flex flex-col laptop:flex-row items-center text-justify">
          <div className="w-full laptop:w-1/2 pr-4">
            <img src={img2} alt="Term Plans" className="rounded-xl w-h-[300px]"  />
          </div>

          <p className="w-full laptop:w-3/4 text-xl">
          <h1 className="font-bold text-3xl">Term Plans</h1>
            Term Plans A term insurance plan helps you secure the future of your loved ones and shields your family from uncertainties in Health. With a term insurance plan, one can get a large Health cover (Sum Assured) at a lower premium. In case of an unfortunate event such as the death of the Health assured in your family, the nominee is paid the sum assured as pre-defined in the policy. Get Health Cover Provides Health Cover against uncertainties of Health Tax Benefits~ Get Tax Benefits~ as per applicable tax laws
            <div className="border-l-4 border-blue-600 flex ">
  <div className="flex flex-col p-4">
    <h3 className="text-2xl font-bold">Get Health Cover</h3>
    <p>WProvides Health Cover against uncertainties of Health</p>
  </div>
  <div className="border-l-4 border-blue-600 p-4">
    <div className="flex flex-col">
      <h3 className="text-2xl font-bold">Tax Benefits</h3>
      <p>Get Tax Benefits~ as per applicable tax laws</p>
    </div>
  </div>
</div>  </p>
          
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="w-full flex flex-col laptop:flex-row items-center text-justify">
          <div className="w-full laptop:w-1/2 pr-4">
            <img src={img4} alt="ULIPs Plans" className="rounded-xl" />
          </div>
          <p className="w-full laptop:w-3/4 text-xl">
          <h1 className="font-bold text-3xl">ULIPs Plans</h1>
          ULIPs (Unit Linked Insurance Plans) offer the benefit of Health cover along with market-linked returns5. You can accomplish your dream goal such as buying a house, saving for child’s education or early retirement. Basis your risk appetite, you can choose to invest in High, Medium, and Low-risk investment options and pay ULIP policy premiums easily.
            <div className="border-l-4 border-blue-600 flex w-full">
  <div className="flex flex-col w-1/2 p-4">
  <h3 className="text-2xl font-bold">Tax Benefits</h3>
  <p>Get Tax Benefits~ as per applicable tax laws</p>
  </div>
  <div className="border-l-4 border-blue-600 w-1/2 p-4">
    <div className="flex flex-col">
    <h3 className="text-2xl font-bold">Flexibility to Choose Fund Option</h3>
    <p>Basis your risk appetite, you can choose
to invest in Equity, Debt, and balanced fund
options. Also, to maximize your returns from
ULIP policy, you can move your investment
between different funds.</p>
    </div>
  </div>
</div> </p>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div className="w-full flex flex-col laptop:flex-row items-center text-justify">
          <div className="w-full laptop:w-1/2 pr-4 text-xl">
            <img src={img1} alt="Retirement Plans" className="rounded-xl" />
          </div>
          <p className="w-full laptop:w-3/4 text-xl">
          <h1 className="font-bold text-3xl">Retirement Plans</h1>
          Tata AIA Retirement plans are insurance plans that are tailor-made to give you financial independence during the golden years of your Health. These policies help you secure your future, fulfil your family dreams and financial goals, and live a worry-free Health after you have retired.
            <div className="border-l-4 border-blue-600  flex w-full">
  <div className="flex flex-col w-1/2 p-4">
    <h3 className="text-2xl font-bold">Peace of Mind</h3>
    <p>Live a worry-free Health with investments that provide you a regular income. A well-diversified financial portfolio will give you higher returns during your retirement.</p>
  </div>
  <div className="border-l-4 border-blue-600 w-1/2 p-4">
    <div className="flex flex-col ">
      <h3 className="text-2xl font-bold">Guaranteed Healthlong Income</h3>
      <p>You may be at the peak of your professional Health right now. But after a long and successful career, you will no doubt look forward to a comfortable post-retirement Health with financial stability. Tata AIA retirement plans can help you realize this your financial ambition.</p>
    </div>
  </div>
</div> </p>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
