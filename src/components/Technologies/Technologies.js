import React, {useEffect, useRef} from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import lottie from 'lottie-web';

const Technologies = () =>  {
  
  
  const android = useRef(null);
  const react = useRef(null);
  const nodejs = useRef(null);
  const firebase = useRef(null);
  const figma = useRef(null);

  //android animation
  useEffect(() => {
      lottie.loadAnimation({
          container: android.current,
          loop: true,
          renderer: 'svg',
          autoplay: true,
          
          animationData: require('../Lottie/androidanimation.json'),
      })
   }, [])

   //react animation
   useEffect(() => {
    lottie.loadAnimation({
        container: react.current,
        loop: true,
        renderer: 'svg',
        autoplay: true,
        
        animationData: require('../Lottie/react.json'),
    })
 }, [])

  //node animation
 useEffect(() => {
  lottie.loadAnimation({
      container: nodejs.current,
      loop: true,
      renderer: 'svg',
      autoplay: true,
      
      animationData: require('../Lottie/nodejs.json'),
  })
}, [])
  

  //firebase animation
  useEffect(() => {
    lottie.loadAnimation({
        container: firebase.current,
        loop: true,
        renderer: 'svg',
        autoplay: true,
        
        animationData: require('../Lottie/firebase.json'),
    })
  }, [])

    //figma animation
    useEffect(() => {
      lottie.loadAnimation({
          container: figma.current,
          loop: true,
          renderer: 'svg',
          autoplay: true,
          
          animationData: require('../Lottie/figma.json'),
      })
    }, [])
    
  
  return(
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the Android and Web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Android Studio and React
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',paddingRight:'80px'}}>
            <div className="container" style={{height:"50px"}} ref={android}></div>
            <div className="container" style={{height:"70px"}} ref={react}></div>


            </div>


          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Firebase

            <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',paddingRight:'80px'}}>
            <div className="container" style={{height:"50px", marginTop:"10px"}} ref={nodejs}></div>
            <div className="container" style={{height:"70px", marginTop:"10px"}} ref={firebase}></div>


            </div>


          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma

            <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'left',paddingRight:'80px'}}>
            <div className="container" style={{height:"50px", marginTop:"10px"}} ref={figma}></div>


            </div>


          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

}
export default Technologies;
