import React from "react";

import {
  DiscoverContainer,
  H1,
  Wrapper,
  Card,
  Icon,
  H2,
  P
} from "./DiscoverElements";

import Icon4 from "../../Media/nextjs.svg";
import Icon5 from "../../Media/vue.svg";
import Icon6 from "../../Media/mongo.svg";

const Discover = () => {
  return (
    <DiscoverContainer id="discover">
      <H1>Discover</H1>
      <Wrapper>
      <Card>
          
          <H2>FrontEnd</H2>
          <P>JavaScript and ReactJS</P>
        </Card>

        <Card>

          <H2>Backend</H2>
          <P>MongoDB</P>
        </Card>

        <Card>

          <H2>Authentication</H2>
          <P>FireBase</P>
        </Card>

      </Wrapper>
    </DiscoverContainer>
  );
};

export default Discover;