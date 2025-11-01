import React from 'react'
import Bredcom from '../Bredcom/Main'
import Contactfile from '../Mencontact/Contactfile'
import Map from '../Mencontact/Map'

const Contact = () => {
    return (
        <>
            <Bredcom title={"Home"} subtitle={"Contact"} link={"Contact us"}/>
            <Contactfile />
            <Map/>
        </>
    )
}

export default Contact