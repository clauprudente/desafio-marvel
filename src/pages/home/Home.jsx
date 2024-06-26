import React from "react";
import { TextField, Feed } from "../../components";
import { useHome } from "./Home.hooks";
import { StyledContainer } from "./Home.styles";

export const Home = () => {
  const { isLoading, heroName, setHeroNameOnChange, onKeyPress, error, heros } =
    useHome();

  return (
    <StyledContainer>
      {isLoading ? (
        <div className="loading-circle"></div>
      ) : (
        <>
          <TextField
            label="Busca pelo nome"
            name="name"
            type="text"
            value={heroName}
            onChange={({ target }) => setHeroNameOnChange(target.value)}
            onKeyPress={onKeyPress}
            error={error}
          />
          <Feed data={heros} />
        </>
      )}
    </StyledContainer>
  );
};
