import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
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

        Hi! I'm Harshit, a software engineer based in Bangalore, India.<br/>

        I enjoy creating things that live on the internet, whether that be mobile applications or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.


        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;