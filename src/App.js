import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character'
import styled  from 'styled-components';
import themeObj from './themes'

const StyleDiv = styled.div`
color: white;
padding: 0;
margin: 0;
height: 100%;
background-repeat: no-repeat;
background-position-y: 100%;
background-size: cover;
font-family: Arial Black;
`

const App = () => {
  const[character , setCharacter] = useState([])

  const takeCharacterData = () =>{
    axios.get('https://swapi.dev/api/people')
    .then((res) =>{
      console.log(res.data)
      setCharacter(res.data)
    })
    .then(res =>{
      console.log(res.data)
      console.log(character)
    })
    .catch(err => console.log(err))

  }
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() =>{
  takeCharacterData()
}, [])
  return (
    <StyleDiv className="App">
      <h1 className="Header">STAR-WARS CHARACTER</h1>
     <Character  character = {character}/>
    </StyleDiv>
  );
}

export default App;
