import { Box, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box bgColor="hsl(179, 62%, 43%)" padding={10}>
      <Text fontSize={18} color="hsl(204, 43%, 93%)" marginBottom={5}>
        Why us
      </Text>
      <Text letterSpacing={1} color="hsl(204, 43%, 93%)" opacity="0.9">
        Tutorials by industry experts Peer &amp; expert code review Coding
        exercises Access to our GitHub repos Community forum Flashcard decks New
        videos every week
      </Text>
    </Box>
  );
};

export default About;
