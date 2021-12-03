import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 18, text: 'Open Source Projects'},
 
  { number: 200, text: 'Github contributions in 2021', },


];

const data2 = [

  { number: 5, text: 'stars at Hacker Rank', },

  { number: 3, text: 'stars at CodeChef', },


]

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}

      {data2.map((card, index) => (
              <Box key={index}>
                <BoxNum>{`${card.number}`}</BoxNum>
                <BoxText>{card.text}</BoxText>
              </Box>
            ))}

    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
