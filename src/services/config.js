import axios from "axios";

const baseUrl = `https://gateway.marvel.com/v1/public/`;

const api = axios.create({
  baseURL: baseUrl,
});
const PUBLIC_KEY = "fa7436d01c2a90e78b550b27a7c109b2";
const HASH = "54f6159258b768497f84f4db55d8b5b7";

export { api, PUBLIC_KEY, HASH };
