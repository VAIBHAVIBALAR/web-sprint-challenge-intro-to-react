import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled, {keyframes} from 'styled-components'

const kf = keyframes`
100% {
  opacity : 1;
  transform: scale(1) rotateZ(0);
}
`
const StyledDetails = styled.div`
opacity: 0;
transform: scale(2) rotateZ(180deg);
animation: ${kf} 0.5s ease-in-out forwards;
border: 1px solid #2a2a2a;
box-shadow: 0px 1px 6px -2px #807f7f;
  border-radius: 8px;
  margin-top: 16px;
  padding: 16px;
`
export default function Details(props) {
  const { cCharacter, close } = props
  const [details, setDetails] = useState(null)

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => { setDetails(res.data) })
      .catch(err => { debugger }) // eslint-disable-line
  }, [cCharacter])

  return (
    <StyledDetails>
      <h2>Details:</h2>
      {
        details &&
        <>
          <p>Gender: {details.gender}</p>
          <p>mass: {details.mass}</p>
          <p>height: {details.height}</p>
          <p>hair_color: {details.hair_color}</p>
          <p>skin_color: {details.skin_color}</p>
        </>
      }
      <button onClick={close}>Close</button>
      </StyledDetails>
  )
}
