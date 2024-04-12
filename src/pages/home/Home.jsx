import React from "react";
import { TextField, Feed } from "../../components";
import { useHome } from "./Home.hooks";
import { StyledContainer } from "./Home.styles";

export const Home = () => {
  const { isLoading, heroName, setHeroNameOnChange, error, heros } = useHome();

  return (
    <StyledContainer>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <TextField
            label="Busca pelo nome"
            name="name"
            type="text"
            value={heroName}
            onChange={({ target }) => setHeroNameOnChange(target.value)}
            error={error}
          />
          <Feed data={heros} />
        </>
      )}
    </StyledContainer>
  );
};
