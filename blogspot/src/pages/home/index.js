import React from "react";
import { Text } from "@chakra-ui/react";
import "./index.css";

const Home = () => {
  return (
    <div className="Homepage">
      <section className="textdiv">
        <Text fontSize="4xl">Designer & React developer</Text>
        <Text fontSize="6xl">Hi, I am a software developer</Text>
        <Text fontSize="3xl">My Mission is to design and develop websites</Text>
      </section>
      <img
        src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        alt="profile"
        width={490}
        height={625}
      />
    </div>
  );
};

export default Home;
