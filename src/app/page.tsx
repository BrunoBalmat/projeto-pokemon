'use client'
import './globals.css'
import HomePage from './components/page'
import SearchScreen from "./pages/home/page"
import { useState } from 'react'

export default function Home() {

  const [landing, setLanding] = useState(true);

  return (
    <div>
      <SearchScreen />
      <HomePage landing={landing} setLanding={setLanding}/>
    </div>
  ) 

}
