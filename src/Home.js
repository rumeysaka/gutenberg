import React from 'react'
import Cards from './components/Cards/Cards'

export default function Home({onHandleFav}) {
  return (
    <div><Cards onHandleFav={onHandleFav} /></div>
  )
}
