import React from 'react'
import Bredcom from '../Bredcom/Main'
import Get from '../Menabout/Get';
import Gettwo from '../Menhome/Get'
import Testimonials from '../Menhome/Testimonials'
import Counter from '../Menhome/Counter';

const About = () => {
  return (
    <>
      <Bredcom title={"Home"} subtitle={"About"} link={"About Us"} />
      <Get/>
      <Gettwo/>
      <Testimonials/>
      <Counter/>
    </>
  )
}

export default About