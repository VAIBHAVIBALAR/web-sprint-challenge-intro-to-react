import React from  'react';
import styled, { keyframes }  from 'styled-components';
import '../App.css';

//Stretch goals styled components
const kf = keyframes`
100% {
  opacity : 1;
  transform: scale(1) rotateZ(0);
    }
`
//styled components for custom component
const StyleList = styled.div`
font-size: 1.5em;
padding: 2% 30%;
font-family: 'Lato';
opacity: 0;
transform: scale(2) ;
animation: ${kf} 0.5s ease-in-out forwards;
@media ${props => props.theme.breakpointMobile}{
    width: initial;
    padding: 2% 2%;
    margin: 2% 6%;
  }
`

const StyleInList = styled.span`
opacity: 0;
transform: scale(2) rotateZ(360deg);
animation: ${kf} 0.5s ease-in-out forwards;
`
//Custom components
function Character(props) {
    return  <StyleList>
                 {props.character.map(index => 
                    <div className="List">
                         <StyleInList >{index.name}</StyleInList>
                         <StyleInList className="Span">{index.birth_year}</StyleInList>
                    </div> )}
             </StyleList>
}
export default Character;