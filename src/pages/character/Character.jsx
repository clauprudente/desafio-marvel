import React from "react";
import { useCharacter } from "./Character.hooks";
import {
  StyledContent,
  StyledImage,
  StyledTitle,
  StyledDescription,
  StyledDetails,
} from "./Character.styles";

export const Character = () => {
  const { isLoading, character } = useCharacter();
  return (
    <>
      {isLoading ? (
        <div className="loading-circle"></div>
      ) : (
        <StyledContent>
          <StyledImage
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          ></StyledImage>
          <StyledTitle>{character.name}</StyledTitle>
          <StyledDescription>{character.description}</StyledDescription>
          {character.comics.available > 0 && (
            <StyledDetails>
              <h1>Comics ({character.comics.available})</h1>
              <ul>
                {character?.comics?.items.map((comic) => {
                  return <li key={comic.name}>{comic.name}</li>;
                })}
              </ul>
            </StyledDetails>
          )}
          {character.series.available > 0 && (
            <StyledDetails>
              <h1>Series ({character.series.available})</h1>
              <ul>
                {character?.series?.items.map((serie) => {
                  return <li key={serie.name}>{serie.name}</li>;
                })}
              </ul>
            </StyledDetails>
          )}
          {character.stories.available > 0 && (
            <StyledDetails>
              <h1>Stories ({character.stories.available})</h1>
              <ul>
                {character?.stories?.items.map((story) => {
                  return <li key={story.name}>{story.name}</li>;
                })}
              </ul>
            </StyledDetails>
          )}
        </StyledContent>
      )}
    </>
  );
};
