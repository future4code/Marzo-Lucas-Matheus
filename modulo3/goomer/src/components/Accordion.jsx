import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

export const AccordionContainer = ({ restaurantDetails, group }) => {
  return (
    <Accordion w="100%" allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {group}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {restaurantDetails
            .filter((food) => food.group.toUpperCase() === group)
            .map((food) => (
              <p>{food.name}</p>
            ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
