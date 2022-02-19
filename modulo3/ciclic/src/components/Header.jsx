import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
    <Box bgColor="blue.500" color="whiteAlpha.900" py={[2, 4]}>
      <Heading
        fontFamily="monospace"
        textTransform="uppercase"
        textAlign="center"
      >
        ciclic
      </Heading>
    </Box>
  );
};
