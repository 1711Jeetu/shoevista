import React from 'react'
import  ParallaxEffect  from './components/ParallaxEffect'
import { Featured } from './components/Featured'
import { Latest } from './components/Latest'

export const HomePage = () => {
  return (
    <div>
      <ParallaxEffect />
      <Featured />
      <Latest />
    </div>
  )
}
