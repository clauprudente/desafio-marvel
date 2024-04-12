import { useEffect, useState } from "react";
import { getCharacter } from "../../services/api";

export const useHome = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [heroName, setHeroName] = useState("");
  const [heros, setHeros] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    loadGetCharacter();
  }, []);

  const setHeroNameOnChange = (name) => {
    setHeroName(name);
  };

  const onKeyPress = (evt) => {
    if (evt.key === "Enter") {
      loadGetCharacter(heroName);
    }
  };

  const loadGetCharacter = async (name) => {
    const response = await getCharacter(name);

    if (response.data && response.status === 200) {
      setHeros(response.data.data.results);
      setIsLoading(false);
    } else {
      setError("Vazio =)");
    }
  };

  return { isLoading, error, heroName, onKeyPress, setHeroNameOnChange, heros };
};
