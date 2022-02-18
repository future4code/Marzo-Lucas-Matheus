import {
  Container,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { HomepageCard } from "../../components";

export const Homepage = ({ restaurants, loading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  function filterRestaurants(restaurant) {
    if (searchTerm === "") return true;
    if (
      restaurant.name.includes(searchTerm) ||
      restaurant.name.toLowerCase().includes(searchTerm)
    )
      return true;
    return false;
  }
  return (
    <Container centerContent maxW="container.lg">
      <Heading my="8" color="#404040" size="lg">
        Bem-vindo ao Lista Rango
      </Heading>
      <InputGroup mb="8" size="md" w="80%" boxShadow="0px 2px 4px #00000029">
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          p="4"
          placeholder="Buscar estabelecimento"
        />
        <InputRightElement children={<BsSearch />} />
      </InputGroup>

      {loading ? (
        <Spinner
          thickness="10px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#009CA3"
          size="xl"
        />
      ) : (
        <SimpleGrid columns={[1, 2, 3]} spacing={[4, 8]}>
          {restaurants.filter(filterRestaurants).map((restaurant) => (
            <HomepageCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
};
