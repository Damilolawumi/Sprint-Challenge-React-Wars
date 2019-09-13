import React from "react";
import styled from "styled-components"

const StyledDiv = styled.div`
margin:10px;
margin: 30px;
    border: 1px solid grey;
`;

const StyledH1 = styled.h1`

`;

const StyledParagraph = styled.p`

`;

function Character(props) {
    return (
        <StyledDiv>
            <StyledH1>{props.character.name}</StyledH1>
            <StyledParagraph>{props.character.birth_year}</StyledParagraph>
            <StyledParagraph>{props.character.gender}</StyledParagraph>
            <StyledParagraph>{props.character.height}</StyledParagraph>
            <StyledParagraph>{props.character.mass}</StyledParagraph>
            <StyledParagraph>{props.character.hair_color}</StyledParagraph>
            <StyledParagraph>{props.character.eye_color}</StyledParagraph>
            <StyledParagraph>{props.character.skin_color}</StyledParagraph>
        </StyledDiv>
    )
}

export default Character