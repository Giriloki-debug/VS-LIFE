import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const allFAQs = [
  {
    question: "Why should you have Health insurance?",
    answer: "Having Health insurance serves many purposes. If you need pure Health cover, you can get a term insurance plan and secure your family against financial insecurities. With a savings plan or money-back plan, you can save money over the long term and fulfil your future financial goals. Or you can choose wealth generation + Health cover and earn market-linked returns through a Unit-Linked Insurance Plan.",
  },
  {
    question: "When can you purchase a Health insurance policy?",
    answer: "You can purchase Health insurance at any stage of your Health when you need to offer Health insurance coverage to your family and fulfil your financial commitments. However, if you buy Health insurance at a younger age, you can pay lower premiums. Conversely, buying Health insurance at an older age means higher premiums.The maximum age limit up to which you can buy Health insurance is 65 year",
  },
  {
    question: "Can Health insurance be purchased online?",
    answer: "Yes, you can buy Health insurance online. You can purchase a policy of your choice by browsing any Tata AIA Health Insurance plans online. Alternatively, you can also get in touch with us to know more about your policy choice.",
  },
  {
    question: "Can I choose the policy term and premium payment term when buying Health insurance?",
    answer: "Yes, you can choose a policy term and premium paying term per your preference before buying Health insurance. This can help you pay your policy premiums at your convenience.",
  },
  {
    question: "What is a Health insurance premium?",
    answer: "A Health insurance premium is the amount of money that you pay regularly (monthly, quarterly, annually) for a set tenure so that your Health insurance policy remains active. In case something happens to you, your loved ones will be financially protected with the death benefit. The amount you pay depends on your age, health, and the type of policy you choose.",
  },
  {
    question: "Do I get survival benefits under my Health insurance policy?",
    answer: "Whether you receive survival benefits depends on your specific Health insurance policy. These benefits are not offered in all plans. Review your policy documents or contact your insurer to determine if your plan includes survival benefits.",
  },
];
const HealthFAQs = [
  {
    question: "Why should you have Health insurance?",
    answer: "Having Health insurance serves many purposes. If you need pure Health cover, you can get a term insurance plan and secure your family against financial insecurities. With a savings plan or money-back plan, you can save money over the long term and fulfil your future financial goals. Or you can choose wealth generation + Health cover and earn market-linked returns through a Unit-Linked Insurance Plan.",
  },
  {
    question: "When can you purchase a Health insurance policy?",
    answer: "You can purchase Health insurance at any stage of your Health when you need to offer Health insurance coverage to your family and fulfil your financial commitments. However, if you buy Health insurance at a younger age, you can pay lower premiums. Conversely, buying Health insurance at an older age means higher premiums.The maximum age limit up to which you can buy Health insurance is 65 year",
  },
  {
    question: "Can Health insurance be purchased online?",
    answer: "Yes, you can buy Health insurance online. You can purchase a policy of your choice by browsing any Tata AIA Health Insurance plans online. Alternatively, you can also get in touch with us to know more about your policy choice.",
  },
  {
    question: "Can I choose the policy term and premium payment term when buying Health insurance?",
    answer: "Yes, you can choose a policy term and premium paying term per your preference before buying Health insurance. This can help you pay your policy premiums at your convenience.",
  },
  {
    question: "What is a Health insurance premium?",
    answer: "A Health insurance premium is the amount of money that you pay regularly (monthly, quarterly, annually) for a set tenure so that your Health insurance policy remains active. In case something happens to you, your loved ones will be financially protected with the death benefit. The amount you pay depends on your age, health, and the type of policy you choose.",
  },
  {
    question: "Do I get survival benefits under my Health insurance policy?",
    answer: "Whether you receive survival benefits depends on your specific Health insurance policy. These benefits are not offered in all plans. Review your policy documents or contact your insurer to determine if your plan includes survival benefits.",
  },
];
const termFAQs = [
  {
    question: "Why do you need term insurance?",
    answer: "Different policyholders need term insurance for individual reasons. Term insurance is primarily used to secure your family’s financial future in your absence. However, you can also use a term plan with adequate coverage for many other reasons if you meet your demise within the policy term.The sum assured can protect your family from unpaid loans and debts, create a retirement fund for your spouse, set up a charitable trust fund for your family or underprivileged children, and so on.",
  },
  {
    question: "Is term insurance more affordable than other Health insurance policies?",
    answer: "Yes, term insurance is more affordable than other forms of Health insurance. This is because term plans only offer a pure Health cover which can be as extensive as your needs. In the event of your untimely demise during the policy term, the policy will offer your beneficiary/family a death benefit sum assured and then the policy will cease to offer any benefits. Since there are no other components under term insurance, the premiums are also quite low.",
  },
  {
    question: "Which is the best age to buy a term insurance plan?",
    answer: "You can have a term insurance policy at any age if you need Health insurance for yourself and your family. However, buying a term plan when young can ensure lower premium payments due to the lower health risks related to youth.Getting a term insurance plan early also means a longer policy tenure and more years of Health insurance coverage for your family’s protection. ",
  },
  {
    question: "Can I have more than one term policy?",
    answer: "Yes, you can have more than one term insurance policy. However, it is advisable to have one policy with adequate Health insurance coverage than multiple policies. This is because the premium payments for two or three policies can become a financial burden over the years.Moreover, keeping track of so many premium payment due dates is a hassle. However, with one term plan and probably a few essential, optional riders, you can provide comprehensive protection to your family.",
  },
  ];
const ulipFAQs = [
  {
    question: "Why should you have Health insurance?",
    answer: "Having Health insurance serves many purposes. If you need pure Health cover, you can get a term insurance plan and secure your family against financial insecurities. With a savings plan or money-back plan, you can save money over the long term and fulfil your future financial goals. Or you can choose wealth generation + Health cover and earn market-linked returns through a Unit-Linked Insurance Plan.",
  },
  {
    question: "Why should one invest in a Unit-Linked Insurance Plan?",
    answer: "You can invest in a ULIP to grow your wealth long-term. By investing regularly, you can benefit from the market-linked returns5 through the years and, at maturity, receive the fund value on your investment.",
  },
  {
    question: "Can I opt for more than one fund in a ULIP?",
    answer: "There are multiple funds to choose from when you invest in a ULIP. You can opt for a few or all the funds to invest in. This can help you diversify your ULIP portfolio. The type of funds will vary as per the ULIP you choose.",
  },
  {
    question: "Is it possible to switch between funds?",
    answer: "If you are not satisfied with the performance of certain funds, you are allowed to make a certain number of free fund switches during the year. You can move your money to other funds available under the ULIP policy to improve your fund performance.",
  },
  {
    question: "How many ULIPs are needed for wealth creation?",
    answer: "One ULIP can suffice for your wealth creation goals if you plan your investment. However, over the years, if you want to invest in new funds, you can opt for a second ULIP plan. It is advisable not to go overboard with many ULIPs as these are market-linked plans and carry investment risk.",
  },
];
const retirementFAQs = [
  {
    question: "When should I plan my retirement?",
    answer: "Retirement planning should start at least 10-20 years before your retirement. This will enable you to accumulate and save enough funds for all your post-retirement needs.",
  },
  {
    question: "Can I get a regular income with a retirement plan?",
    answer: "Yes, you can opt for a retirement plan that offers regular income. Once you retire, you can buy an annuity plan with the investment. This annuity plan will pay out a monthly income to you. This can help you fulfil all your essential needs and meet any planned future goals after retirement.",
  },
  {
    question: "Do retirement plans offer Health insurance?",
    answer: "If you select a Health insurance retirement plan, you can get a Health cover for your family. Hence, in case of your death after retirement, your family can still be secured with the sum assured from Health insurance",
  },
  {
    question: "Do I need to pay separate premiums for Health insurance?",
    answer: "You only pay the premiums towards your retirement plan and buy the annuity on your retirement. There is no need to pay a separate premium for the Health insurance component if your retirement plan offers Health insurance benefits. ",
  },
];

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false); // If expanded, set to current panel, else close
  };
  
  return (<>
    <Typography variant="h4" gutterBottom className="text-center">
  Frequently Asked Questions
</Typography>
    <Box sx={{ width: '100%' }} className="container mx-auto">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{fontSize:"18px",fontWeight:"bold"}} label="Health Insurance" {...a11yProps(0)} />
          <Tab sx={{fontSize:"18px",fontWeight:"bold"}} label="Term Insurance" {...a11yProps(1)} />
          <Tab sx={{fontSize:"18px",fontWeight:"bold"}} label="ULIP" {...a11yProps(2)} />
          <Tab sx={{fontSize:"18px",fontWeight:"bold"}} label="Retirement" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="px-4 container mx-auto">
       

          {HealthFAQs.map((faq, index) => (
            <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleAccordionChange(`panel${index}`)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <div className="px-4 container mx-auto">
       

       {termFAQs.map((faq, index) => (
         <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleAccordionChange(`panel${index}`)}>
           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
             <Typography variant="h6">{faq.question}</Typography>
           </AccordionSummary>
           <AccordionDetails>
             <Typography>{faq.answer}</Typography>
           </AccordionDetails>
         </Accordion>
       ))}
     </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <div className="px-4 container mx-auto">
       

       {ulipFAQs.map((faq, index) => (
         <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleAccordionChange(`panel${index}`)}>
           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
             <Typography variant="h6">{faq.question}</Typography>
           </AccordionSummary>
           <AccordionDetails>
             <Typography>{faq.answer}</Typography>
           </AccordionDetails>
         </Accordion>
       ))}
     </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <div className="container mx-auto">
       

       {retirementFAQs.map((faq, index) => (
         <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleAccordionChange(`panel${index}`)}>
           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
             <Typography variant="h6">{faq.question}</Typography>
           </AccordionSummary>
           <AccordionDetails>
             <Typography>{faq.answer}</Typography>
           </AccordionDetails>
         </Accordion>
       ))}
     </div>
      </CustomTabPanel>
    </Box></>
  );
}
