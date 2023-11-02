import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const DiseaseListItem = ({ disease }) => {
  const addLineBreaks = (text) => {
    if (text) {
      // Split the text at '-' character and create separate <p> elements
      return text.split('-').map((part, index) => (
        <p key={index} className="Disease-cont">•{part}</p>
      ));
    }
    return null; // Return null if the text is undefined or empty
  };

  return (

      <div>

      <div className='Disease-h1'>{disease.Disease}</div>

      <div className='accordianText'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Some Known Symptoms: </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {addLineBreaks(disease.Symptoms)}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Disease Overview: </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {addLineBreaks(disease.Overview)}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Diagnosis: </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {addLineBreaks(disease.Diagnosis)}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Treatment Options: </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {addLineBreaks(disease.TreatmentOptions)}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Made Worse By: </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {addLineBreaks(disease.MadeWorseBy)}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>When to See a Doctor: </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {addLineBreaks(disease.WhentoSeeaDoctor)}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What to Ask a Doctor: </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {addLineBreaks(disease.WhattoAskaDoctor)}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What to Expect: </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {addLineBreaks(disease.WhattoExpect)}
          </Typography>
        </AccordionDetails>
      </Accordion>

      </div>
      </div>

    
  );
};

// {/* <li key={disease._id}>
//       <div className="Disease">
//         <h1 className="Disease-h1">Disease:</h1>
//         <u><h2 className="Disease-cont">{disease.Disease}</h2></u>
//         <h1 className="Disease-h1">Some Known Symptoms:</h1>
//         {addLineBreaks(disease.Symptoms)}
//         {/* <h1 className="Disease-h1">Disease Overview:</h1>
//         {addLineBreaks(disease.Overview)} */}
//         <h1 className="Disease-h1">Diagnosis:</h1>
//         {addLineBreaks(disease.Diagnosis)}
//         <h1 className="Disease-h1">Treatment Options:</h1>
//         {addLineBreaks(disease.TreatmentOptions)}
//         <h1 className="Disease-h1">Made Worse By:</h1>
//         {addLineBreaks(disease.MadeWorseBy)}
//         <h1 className="Disease-h1">When to See a Doctor:</h1>
//         {addLineBreaks(disease.WhentoSeeaDoctor)}
//         <h1 className="Disease-h1">What to Ask a Doctor:</h1>
//         {addLineBreaks(disease.WhattoAskaDoctor)}
//         <h1 className="Disease-h1">What to Expect:</h1>
//         {addLineBreaks(disease.WhattoExpect)}
//       </div>
//     </li> */}