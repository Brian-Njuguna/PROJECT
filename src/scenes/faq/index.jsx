import {Box, useTheme,Typography} from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import Accordionsummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens }  from "../../theme";

const FAQ =() =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box m="20px">
            <Header title = "FAQ" subtitle="Frequently Asked Questions Page"/>
            <Accordion defaultExpanded>
                <Accordionsummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant ="h5">
                        Frequently asked questions
                    </Typography>

                </Accordionsummary>
                <AccordionDetails>
                    <Typography>
                        What are you skills
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <Accordionsummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant ="h5">
                        Frequently asked question
                    </Typography>

                </Accordionsummary>
                <AccordionDetails>
                    <Typography>
                        How many years of experience do you have
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
        </Box>
    );

}
export default FAQ;