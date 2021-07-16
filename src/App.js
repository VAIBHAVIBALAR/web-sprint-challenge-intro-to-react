import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character'
import styled  from 'styled-components';

const StyleDiv = styled.div`
color: white;
padding: 2% 5%;
margin: 8% 15%;
background-image: url("https://wallpapercave.com/wp/boHuSO8.png");
font-family: "Times New Roman", Times, serif;
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
