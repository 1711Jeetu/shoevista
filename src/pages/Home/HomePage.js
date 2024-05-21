import React from 'react'
import  ParallaxEffect  from './components/ParallaxEffect'
import { Featured } from './components/Featured'
import { Latest } from './components/Latest'
import useFetch from '../../hooks/useFetch'

export const HomePage = () => {
  return (
    <div>
      <ParallaxEffect />
      <Featured />
      <Latest />
    </div>
  )
}
