import { ExpandMoreRounded } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import { ReactElement } from 'react';

interface FullRecipeInfoAccordionProps {
  description: string;
  ingredients: ReactElement;
}

export const FullRecipeInfoAccordion = ({
  description,
  ingredients,
}: FullRecipeInfoAccordionProps) => {
  return (
    <Box
      sx={{
        mb: 2,
        '& .MuiAccordion-root.Mui-expanded': {
          m: 0,
        },
        '& .MuiAccordion-root.Mui-expanded:last-of-type': {
          m: 0,
        },
        '& .MuiAccordion-root.Mui-expanded:first-of-type': {
          m: 0,
        },
        '& .MuiAccordion-root .Mui-focusVisible': {
          backgroundColor: 'inherit',
        },
        '& .MuiAccordion-root:before': {
          display: 'none',
        },
        '& .MuiAccordion-root': {
          borderTop: '1px solid rgba(0, 0, 0, 0.12)',
          borderRadius: 0,
        },
      }}
    >
      <Accordion elevation={0}>
        <AccordionSummary
          sx={{ px: { xs: 1 } }}
          expandIcon={<ExpandMoreRounded />}
        >
          <Typography>Описание</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align="justify">{description}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          sx={{ px: { xs: 1 } }}
          expandIcon={<ExpandMoreRounded />}
        >
          <Typography>Ингрeдиенты</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: { xs: 1, sm: 2 } }}>
          {ingredients}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
