import React from "react";

import {
  MatchesContainer,
  H1,
  Wrapper,
  Card,
  Icon,
  H2,
  P
} from "./MatchElements";

import Icon1 from "../../Media/first.webp";
import Icon2 from "../../Media/second.avif";
// import Icon3 from "../../Media/django.svg";
import Icon4 from "../../Media/third.webp";

const Matches = () => {
  return (
    <MatchesContainer id="matches">
      <H1>Happy Stories</H1>
      <Wrapper>
        <Card>
          <Icon src={Icon1} />
          <H2>Yuzi & Dhanashree</H2>
          <P>
            How chess master became Dhanashree Verma's king rather than pawn 😉
          </P>
        </Card>

        <Card>
          <Icon src={Icon2} />
          <H2>Shikhar & Ayesha</H2>
          <P>Cricketer Shikhar Dhawan leading a beautifu happy life</P>
        </Card>

        {/* <Card>
          <Icon src={Icon3} />
          <H2>Django</H2>
          <P>Wanna debug together later tonight?</P>
        </Card> */}

        <Card>
          <Icon src={Icon4} />
          <H2>Hardik & Natasha</H2>
          <P>This story is all about foreign love affair which left all the Indians shoked...</P>
        </Card>
      </Wrapper>
    </MatchesContainer>
  );
};

export default Matches;