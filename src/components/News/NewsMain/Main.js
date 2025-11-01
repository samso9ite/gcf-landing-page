import { Link } from 'react-router-dom'
import React from 'react'
import Bredcom from '../../Bredcom/Main'
import First from '../Mennews/First'

const NewsMain = () => {
  return (
    <>
        <Bredcom title={"Home"} subtitle={"Blog"} link={"Blog Grid"}/>
        <First/>
    </>
  )
}

export default NewsMain