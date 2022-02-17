import {
  Center,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { HomepageCard } from "../../components";

export const Homepage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://challange.goomer.com.br/restaurants").then(({ data }) => {
      setRestaurants(data);
      setLoading(false);
    });
  }, []);
  return (
    <Container centerContent maxW="container.lg">
      <Heading my="8" color="#404040" size="lg">
        Bem-vindo ao Lista Rango
      </Heading>
      <InputGroup my="8" size="md" w="80%" boxShadow="0px 2px 4px #00000029">
        <Input p="4" placeholder="Buscar estabelecimento" />
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
        <SimpleGrid my="8" columns={[1, 2, 3]} spacing={[4, 8]}>
          {restaurants.map((restaurant) => (
            <HomepageCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
};
