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
    loadGetCharacter(name);
  };

  const loadGetCharacter = async (name) => {
    const result = await getCharacter(name);

    if (result) {
      setHeros(result);
      setIsLoading(false);
    } else {
      setError("Vazio =)");
    }
  };

  return { isLoading, error, heroName, setHeroNameOnChange, heros };
};
