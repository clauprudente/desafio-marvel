import { api, PUBLIC_KEY, HASH } from "./config";

export const getCharacter = (name) => {
  let route;
  if (name)
    route = `characters?nameStartsWith=${name}&ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;
  else route = `characters?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;

  return api.get(route);
};

export const getCharacterById = (id) => {
  let route = `characters/${id}&ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;

  return api.get(route);
};
