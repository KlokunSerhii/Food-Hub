import React from "react";
import Container from "../../components/Container";
import Welcome from "../../components/Welcome";
import Title from "../../components/Title";

import { Section, Box } from "./Home.styled";

function Home() {
  return (
    <Section>
      <Container>
        <Box>
          <Title title="Раді Вас вітати на 'Light Kitchen' " />
          <Welcome />
        </Box>
      </Container>
    </Section>
  );
}

export default Home;
