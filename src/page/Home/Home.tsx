import React from "react";
import Container from "../../components/Container";
import Welcome from "../../components/Welcome";
import { Section } from "./Home.styled";

function Home() {
  return (
    <Section>
      <Container>
        <Welcome />
      </Container>
    </Section>
  );
}

export default Home;
