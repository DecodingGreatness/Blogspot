import React from "react";
import { Card, Heading, Button, Text } from "@chakra-ui/react";
import "./index.css";
import ImageCard from "../imageCard";

const ContentCard = ({ src, alt, name }) => {
  return (
    <div data-testid={name}>
      <section className="card">
        <Card>
          <ImageCard src={src} alt={alt} />
        </Card>
        <Heading size="md" className="header">
          Content Title
        </Heading>
        <Text py="2" maxW="400px">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <Button>Read More</Button>
      </section>
    </div>
  );
};

export default ContentCard;
