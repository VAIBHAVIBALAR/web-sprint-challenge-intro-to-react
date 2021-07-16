import React from  'react';
import styled  from 'styled-components';

const StyleList = styled.div`
padding: 2% 2%;
background-image: url("https://cdn.wallpapersafari.com/30/92/YHzVDv.jpg");
font-family: 'Lato';
`
function Character(props) {
    return  <StyleList>
    {props.character.map(index => 
    <ul>{index.name}
    <li>{index.gender}</li>
    <li>{index.birth_year}</li>
    <li>{index.mass}</li>
    <li>{index.height}</li>
    </ul>)}
    </StyleList>
}
export default Character;