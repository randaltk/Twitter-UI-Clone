import React from "react";

import { Container, Wrapper } from "./styles";
import Main from "./../Main";

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Main></Main>
      </Wrapper>
    </Container>
  );
};

export default Layout;
