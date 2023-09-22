import { Box, Flex, HStack, Text, Button } from "@chakra-ui/react";

const SignUp = () => {
  return (
    <Box bgColor="hsl(179, 62%, 40%)" padding={10}>
      <Text
        color="hsl(204, 43%, 93%)"
        fontSize={18}
        fontWeight="600"
        letterSpacing={1}
      >
        Monthly Subscription
      </Text>
      <Flex flexDirection="column" marginY={5}>
        <HStack marginBottom={1}>
          <Text fontSize={35} fontWeight="600" color="hsl(204, 43%, 93%)">
            $29
          </Text>
          <Text opacity="0.5" color="hsl(204, 43%, 93%)" marginLeft={1}>
            per month
          </Text>
        </HStack>
        <Text
          color="hsl(204, 43%, 93%)"
          opacity={0.9}
          fontSize="lg"
          letterSpacing={0.5}
        >
          Full access for less than $1 a day
        </Text>
      </Flex>
      <Button
        width="90%"
        paddingY={6}
        fontSize="lg"
        bgColor="hsl(71, 73%, 54%)"
        color="hsl(204, 43%, 93%)"
        _hover={{
          opacity: "0.8",
          transition: "opacity .15s",
        }}
        boxShadow="1px 1px 10px 2px rgba(0, 0, 0, 0.2)"
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUp;
