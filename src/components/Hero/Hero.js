import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>

        Hi, I am Harshit<br />
        I am an Android Developer and a competitive programmer<br />
        Below you can find my various projects that I have coded in Kotlin, Java and various other programminglanguages.<br />
        I am also a 3 star coder at codechef.


        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;