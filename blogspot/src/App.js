import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import RecentWorks from "./pages/recentworks";
import Contact from "./pages/contact";

const App = () => {
  return (
    <div className="App">
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recentworks" element={<RecentWorks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ChakraProvider>
    </div>
  );
};

export default App;
