import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./AccordionCard.css"

const AccordionCard = (props) => {
  return (
    <div>
      <Accordion style={{ margin: "3% 0" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontSize="1.3rem">{props.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontSize="1.1rem">{props.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionCard;
