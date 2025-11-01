import React from 'react'
import Bredcom from '../Bredcom/Main'
import Contact from '../Menfaq/Contact';
import First from '../Menfaq/First';

const Faqs = () => {

  return (
    <>
        <Bredcom title={"Home"} subtitle={"FAQS"} link={"FAQs"}/>
        <First/>
        <Contact/>
    </>
  )
}

export default Faqs