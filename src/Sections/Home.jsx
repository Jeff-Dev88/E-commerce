import { Flex, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Perfil from "../assets/perfil.png";

function Home() {
  return (
    <Flex justify="center" bg={useColorModeValue("gray.100", "gray.900")}>
      <Text noOfLines={[1, 2, 3]} mt={5} ms={2} fontSize="3xl" as="b">
        Olá, meu nome é Jefferson, um apaixonado por programação!
      </Text>
      <Image src={Perfil} alt="Perfil" boxSize="100px" borderRadius="full" />
    </Flex>
  );
}

export default Home;
