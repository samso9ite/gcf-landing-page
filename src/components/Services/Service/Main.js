import { Link } from 'react-router-dom'
import React from 'react'
import Bredcom from '../../Bredcom/Main'
import First from '../Menservise/First'

const Service = () => {
  return (
    <>
        <Bredcom title={"Home"} subtitle={"SERVICES"} link={"Our Services"}/>
        <First/>
    </>
  )
}

export default Service
