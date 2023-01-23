import axios from "axios";

import { IResult } from "../interfaces/result";
import { IParamsFetchApi } from "../interfaces/paramsFetchApi";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export async function fetchApi (
  {
    query,
    nextPageToken,
    part = "snippet",
    type = "video",
    limit = 50
  }: IParamsFetchApi
): Promise<IResult | null> {
  const paramsUrl = `${API_URL}?part=${part}&q=${query}&key=${API_KEY}&maxResults=${limit}&type=${type}` +
  (nextPageToken ? `&pageToken=${nextPageToken}` : "");

  try {
    const { data } = await axios.get(paramsUrl);    
    return data;
  } catch (error) {
    if ( error instanceof Error) throw error;
  };
  return null;
};