import datoCMSClient from "./client";

export const fetchDatoCMSData = async (query: string, variables?: object) => {
  const response = await datoCMSClient.post("", {
    query,
    variables,
  });
  return response.data;
};
