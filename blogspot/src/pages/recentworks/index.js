import React, { useState } from "react";
import "./index.css";
import ContentCard from "../../components/contentCard";
import ImageCard from "../../components/imageCard";
import { imageSource } from "../../constant";

const RecentWorks = () => {
  return (
    <div className="recentWorksDiv">
      <section className="cardDiv">
        {imageSource.map((image, index) =>
          image.isSelected ? (
            <ContentCard
              key={index}
              src={image.src}
              alt={image.alt}
              name={image.name}
            />
          ) : (
            <ImageCard
              key={index}
              src={image.src}
              alt={image.alt}
              name={image.name}
            />
          )
        )}
      </section>
    </div>
  );
};

export default RecentWorks;
