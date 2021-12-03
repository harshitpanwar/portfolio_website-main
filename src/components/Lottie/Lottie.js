import React, { useEffect, useRef} from 'react'
import lottie from 'lottie-web'
import Button from '../../styles/GlobalComponents/Button';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Link from 'next/link';


const Lottie = (props) => {

    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            loop: true,
            renderer: 'svg',
            autoplay: true,
            animationData: require('./data.json'),

        })
     }, [])

    return (
        <div style={{display:'flex',flexDirection:'row'}}  >
            <div ref={container} style={{width:'50%'}}></div>
            <div style={{width:'50%'}}>
            
            <SectionTitle>

                Check out My resume

            </SectionTitle>       
            <SectionText style={{padding:'5px'}}>
                
                
                I am an Android Developer, competitive programmer and love to solve brain teasing problems.<br />
                Below you can find my resume.
            
                        
            </SectionText>     

            <a  style={{marginRight:'15px'}} href="https://drive.google.com/file/d/16lbFl5ls1Eie3WDp8QC3s0ySBRnKCRfX/view">
            <Button 
            >My Resume</Button>
            </a>
         
            </div>

    
        </div>
    )
}

export default Lottie;
