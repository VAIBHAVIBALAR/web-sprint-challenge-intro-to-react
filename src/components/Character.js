import React from  'react';
import styled  from 'styled-components';
import '../App.css';

const StyleList = styled.div`
font-size: 1.5em;
padding: 2% 30%;
font-family: 'Lato';
`
function Character(props) {
    return  <StyleList>
    {props.character.map(index => 
    <div className="List">
        <span >{index.name}</span>
        <span className="Span">{index.birth_year}</span>
        </div> )}
    </StyleList>
}
export default Character;