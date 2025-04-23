// import React, { useState } from "react";
// import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// export default function Claim() {
//   // Array of all FAQ questions and answers
//   const allFAQs = [
//     {
//      question: "Claim intimation",
//        answer: "Write to Tata AIA Life Insurance to inform us about the claim or call us. ~The written claim intimation should contain: The Policy Number. Image the policy number. Insured's Name the insured’s name. The date and place of death the date and place of death. The cause of death the cause of death. The claimant's name the claimant's name. Alternatively, you can also file the claim offline, at any of our office branches."
//       },
      
//     {
//       question: "What factors affect fertility?",
//       answer: "Various factors affect fertility, including age, lifestyle, medical conditions, stress, diet, and environmental factors. For women, age is particularly important, with fertility decreasing after 35. In men, sperm quality may decline with age.",
//     },
//     {
//       question: "What can I do to improve my fertility?",
//       answer: "Maintaining a healthy lifestyle, managing stress, eating a balanced diet, avoiding smoking and excessive alcohol, and exercising regularly can help improve fertility in both men and women.",
//     },
//     {
//       question: "When should I see a doctor about fertility?",
//       answer: "If you have been trying to conceive for over a year (or 6 months if you are over 35), it's advisable to see a fertility specialist for an evaluation. Medical conditions like irregular periods, low sperm count, or hormonal imbalances can also be signs to seek help sooner.",
//     },
//     {
//       question: "What are fertility treatments?",
//       answer: "Fertility treatments include medications, assisted reproductive technologies (like IVF or IUI), and surgeries to address reproductive issues. The type of treatment depends on the underlying cause of infertility.",
//     },
//     {
//       question: "Can stress affect fertility?",
//       answer: "Yes, chronic stress can disrupt hormonal balance and affect ovulation in women and sperm production in men, potentially impacting fertility.",
//     },
//     {
//       question: "How does age impact fertility?",
//       answer: "For women, fertility declines significantly after the age of 35 due to a decrease in the quantity and quality of eggs. In men, sperm quality may also decline with age, but the effect is less pronounced.",
//     },
//     {
//       question: "What lifestyle changes can boost fertility?",
//       answer: "Healthy lifestyle changes like regular exercise, a balanced diet, maintaining a healthy weight, reducing alcohol and smoking, and managing stress can improve fertility.",
//     },
//   ];

//   // State to track the expanded accordion
//   const [expanded, setExpanded] = useState(false);

//   // Handle changing the expanded accordion
//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false); // If expanded, set to current panel, else close
//   };

//   return (
//     <div className="container mx-auto">
//       <Typography variant="h4" gutterBottom className="text-center">
//         Frequently Asked Questions
//       </Typography>

//       {allFAQs.map((faq, index) => (
//         <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography variant="h6">{faq.question}</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>{faq.answer}</Typography>
//           </AccordionDetails>
//         </Accordion>
//       ))}
//     </div>
//   );
// }