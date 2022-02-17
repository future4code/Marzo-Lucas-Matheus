import {
  Container,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import React from "react";

export const Homepage = () => {
  return (
    <Container centerContent maxW="container.lg">
      <Heading my="8" color="#404040" size="lg">
        Bem-vindo ao Lista Rango
      </Heading>
      <InputGroup size="md" w="80%" boxShadow="0px 2px 4px #00000029">
        <Input p="4" placeholder="Buscar estabelecimento" />
        <InputRightElement children={<BsSearch />} />
      </InputGroup>
    </Container>
  );
};
