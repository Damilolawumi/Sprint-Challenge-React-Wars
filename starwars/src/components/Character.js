import React from "react";
import styled from "styled-components"

const StyledDiv = styled.div`
margin: 20px;
width:400px;
box-shadow: 2px 2px 4px 2px;
`;

const StyledH1 = styled.h1`
display: block;
    margin: 26px;
`;

const StyledParagraph = styled.p`
    color: #110e0e;
    font-family: initial;
    font-size: 24px;
    font-weight: bold;
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