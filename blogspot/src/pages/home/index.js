import React from "react";
import { Text, Button, Link } from "@chakra-ui/react";
import { MdCall } from "react-icons/md";
import "./index.css";

const Home = () => {
  return (
    <div className="Homepage">
      <section className="textdiv">
        <Text fontSize="4xl">Designer & React developer</Text>
        <Text fontSize="5xl">HI, I AM A SOFTWARE DEVELOPER</Text>
        <Text fontSize="3xl">My Mission is to design and develop websites</Text>
        <section className="buttondiv">
          <Button
            leftIcon={<MdCall />}
            colorScheme="teal"
            size="md"
            variant="solid"
            borderRadius="24px"
          >
            Let's chat on whatsapp
          </Button>
          <Link className="linkText">OR SEND ME AN EMAIL</Link>
        </section>
      </section>
      <img
        src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        alt="profile"
        width={490}
        height={520}
      />
    </div>
  );
};

export default Home;
