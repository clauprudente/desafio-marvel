import { getCharacterById } from "../../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useCharacter = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    loadGetCharacterById(id);
  }, []);

  const loadGetCharacterById = async () => {
    const response = await getCharacterById(id);
    if (response) {
      setCharacter(response);
      setIsLoading(false);
    }
  };

  return { isLoading, character };
};