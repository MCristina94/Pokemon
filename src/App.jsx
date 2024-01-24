import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import PokemonDetail from './Pages/PokemonDetail'
import PokemonTeam from './Pages/PokemonTeam'

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={ <About/>}/>
        <Route path='/detail/:id' element={<PokemonDetail/>}/>
        <Route path='/pokemonteam' element={<PokemonTeam/>}/>
        
      </Routes>
    </>
  )
}

export default App
