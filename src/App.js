import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character'
import styled  from 'styled-components';
import themeObj from './themes'

//by using styled components
const StyleDiv = styled.div`
  color: white;
  padding: 0;
  margin: 0;
  height: 100%;
  background-repeat: no-repeat;
  background-position-y: 100%;
  background-size: cover;
  font-family: Arial Black;
  @media ${props => props.theme.breakpointMobile}{
    width: initial;
    padding: 2% 4% 4% 0%;
  }
  `
//using state hooks
const App = () => {
  const[character , setCharacter] = useState([]);

  //function to fetch data from API
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

  //for side effect
useEffect(() =>{
  takeCharacterData()
}, [])
 

  return (
    //using styled component in place of div
     <StyleDiv className="App">
         <h1 className="Header">STAR-WARS CHARACTER</h1>
         <Character  character = {character}/>
     </StyleDiv>
  );
}

export default App;
