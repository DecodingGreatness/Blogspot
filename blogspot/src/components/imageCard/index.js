import React from "react";
import { Card, CardBody } from "@chakra-ui/react";
import "./index.css";

const ImageCard = ({ src, alt }) => {
  return (
    <Card>
      <CardBody>
        <img src={src} alt={alt} />
      </CardBody>
    </Card>
  );
};

export default ImageCard;
