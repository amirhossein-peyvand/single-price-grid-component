import { SimpleGrid } from "@chakra-ui/react";
import SignUp from "./SignUp";
import About from "./About";

const Bottom = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      <SignUp />
      <About />
    </SimpleGrid>
  );
};

export default Bottom;
