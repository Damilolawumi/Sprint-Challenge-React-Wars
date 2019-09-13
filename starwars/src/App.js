import React, { useEffect, useState } from 'react'; // imported usestate and use effect
import './App.css';
import axios from "axios" //imported axios
import Character from "./components/Character"
import styled from "styled-components"


const StyledSection = styled.section`
display:flex;
flex-wrap: wrap;
`;

const App = () => {
  //setup the component data
  const [starWarsInfo, setStarWarsInfo] = useState([])

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(response => {
        console.log(response)

        setStarWarsInfo(response.data.results)
      })
  }, [])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      <StyledSection>
        {/* created a section tag to hold the result of the mapped function inorder to flex the container */}
        {starWarsInfo.map((person, index) => {
          return <Character key={index} character={person} />
        })}
      </StyledSection>

    </div>
  );
}

export default App;
