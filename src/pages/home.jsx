import React from 'react'
import Header from '../components/header';
import Steps from '../components/Steps';
import BackgroundSlider from '../components/BackgroundSlider';

const home = () => {
  return (
    <div>
        <Header/>
        <Steps/>
        <BackgroundSlider/>
    </div>
  )
}

export default home;