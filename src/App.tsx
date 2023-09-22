import { Box } from "@chakra-ui/react";
import Top from "./components/Top";
import Bottom from "./components/Bottom";

function App() {
  const styles = {
    width: "clamp(400px, 70%, 50rem)",
    margin: "0 auto",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "1px 1px 15px 4px rgba(0, 0, 0, .1)",
  };

  return (
    <Box style={styles}>
      <Top />
      <Bottom />
    </Box>
  );
}

export default App;
