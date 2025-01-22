import axios from "axios";

// Configurazione client per DatoCMS
const datoCMSClient = axios.create({
  baseURL: "https://graphql.datocms.com/",
  headers: {
    Authorization: `Bearer 23d68bb0bba7a845ee6e58c35fd841`,
  },
});

export default datoCMSClient;
