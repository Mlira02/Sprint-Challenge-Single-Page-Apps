import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';



const StyledDiv = styled.div `
border: 2px solid lightgray;
border-radius: 5px;
margin:10px;
padding: 5px;
`
const Para = styled.p `
color: gray;
`

export default function CharacterList() {
  const [char, setChar] = useState([])
  // TODO: Add useState to track data from useEffect
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      const response = res.data.results
      setChar(response)
    })
    .catch(err => {
      console.log('An Error has occured', err)
    })
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [])

  return( 
  <section className='character-list grid-view'>
      {char.map(thing => (
        <StyledDiv key={thing.id}>
        <img src={thing.image} alt={thing.name}/>
        <h2>{thing.name}</h2>
        <Para>{thing.species} {thing.status}</Para>
        <p>Location: {thing.location.name}</p>
        <p>Origin: {thing.origin.name}</p>
        </StyledDiv>
      ))}
  </section>

  )
}
