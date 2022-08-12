import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { PageRoutes } from "./routes";

function App() {
  return (
    <ChakraProvider>
      <PageRoutes />
    </ChakraProvider>
  );
}

export default App;
