import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const StyledDiv = styled.div `
border: 2px solid lightgray;
border-radius: 5px;
padding: 5px;
margin-top: 6px;
margin-bottom: 25px;
margin-right: 25px;
width:300px;
`

export default function LocationList() {
    const [location, setLocation] = useState([])
    // TODO: Add useState to track data from useEffect
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location/')
            .then(res => {
                const response = res.data.results
                setLocation(response)
            })
            .catch(err => {
                console.log('An Error has occured', err)
            })
        // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, [])

    return (
        <section className='character-list grid-view'>
            {location.map(thing => (
                <StyledDiv key={thing.id}>
                    <h2>{thing.name}</h2>
                    <p>{thing.type} : {thing.dimension}</p>
                </StyledDiv>
            ))}
        </section>

    )
}
