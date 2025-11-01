import React from 'react'
import Bredcom from '../Bredcom/Main'
import Careerfirst from '../Mencareers/Careerfirst'
import Aboutcareers from '../Mencareers/Aboutcareers'

const Careers = () => {
    return (
        <>
            <Bredcom title={"Home"} subtitle={"CAREERS"} link={"Careers"}/>
            <Careerfirst/>
            <Aboutcareers/>
        </>
    )
}

export default Careers