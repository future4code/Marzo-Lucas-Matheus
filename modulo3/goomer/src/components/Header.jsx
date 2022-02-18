import { Box, Center, IconButton } from "@chakra-ui/react";
import React from "react";
import { BiHomeSmile } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Box bg="#009CA3" w="100%" h="3rem">
      <Center>
        <IconButton
          isRound
          my="1"
          variant="ghost"
          icon={<BiHomeSmile size={30} />}
          onClick={() => navigate("/")}
        />
      </Center>
    </Box>
  );
};
