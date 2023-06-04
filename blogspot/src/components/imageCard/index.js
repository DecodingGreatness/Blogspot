import React from "react";
import { Card, CardBody } from "@chakra-ui/react";
import "./index.css";

const ImageCard = ({ src, alt, name }) => {
  return (
    <div data-testid={name}>
      <Card>
        <CardBody>
          <img src={src} alt={alt} />
        </CardBody>
      </Card>
    </div>
  );
};

export default ImageCard;
