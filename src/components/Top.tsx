import { Box, Heading, Text } from "@chakra-ui/react";

const Top = () => {
  return (
    <Box fontFamily="karla" bgColor="white" padding={10}>
      <Heading
        as="h1"
        marginBottom={6}
        fontSize="3xl"
        fontFamily="karla"
        color="hsl(179, 62%, 43%)"
      >
        Join our community
      </Heading>
      <Text
        fontSize={18}
        marginBottom={2}
        color="hsl(71, 73%, 54%)"
        fontWeight="bold"
      >
        30-day, hassle-free money back guarantee
      </Text>
      <Text color="hsl(218, 22%, 67%)">
        Gain access to our full library of tutorials along with expert code
        reviews. Perfect for any developers who are serious about honing their
        skills.
      </Text>
    </Box>
  );
};

export default Top;
