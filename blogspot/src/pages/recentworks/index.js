import React from "react";
import "./index.css";
import { Button } from "@chakra-ui/react";

const RecentWorks = () => {
  return (
    <div className="recentWorksDiv">
      <section className="cardDiv">
        <img
          src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
          alt="card 1 product"
          width={490}
          height={520}
        />

        <img
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
          alt="card 2"
          width={490}
          height={520}
        />

        <img
          src="https://images.unsplash.com/photo-1507527413181-c37774c5cb27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
          alt="card 3"
          width={490}
          height={520}
        />
      </section>
      <Button>Read More</Button>
    </div>
  );
};

export default RecentWorks;
