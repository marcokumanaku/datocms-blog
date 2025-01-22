import axios from "axios";

const baseURL = import.meta.env.VITE_BASEURL_DATOCMS ?? "";
const token = import.meta.env.VITE_TOKEN_DATOCMS ?? "";

// Configurazione client per DatoCMS
const datoCMSClient = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default datoCMSClient;
