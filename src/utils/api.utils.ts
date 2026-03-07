import { MovieListType } from "../components/movie-list/models";
import { apiConfig } from "../config";

export function getMoviePosterUrl(path: string, width = 400) {
  return `${apiConfig.posterBaseUrl}/w${width}/${path}`;
}

export function getMovieBackdropUrl(path: string) {
  return `${apiConfig.backdropBaseUrl}${path}`;
}

export function getMovieListUrl(
  movieListType: MovieListType,
  page = 1
): string {
  let movieListUrl = apiConfig.baseUrl;
  movieListUrl += `movie/${movieListType}`;
  movieListUrl += `?language=${apiConfig.langIso}`;
  movieListUrl += `&api_key=${apiConfig.apiKey}`;
  movieListUrl += `&page=${page}`;
    console.log("URL GENERADA:", movieListUrl); 
  return movieListUrl;
}

export function getMovieDetailsUrl(movieId: number): string {
  let movieDetailsUrl = apiConfig.baseUrl;
  movieDetailsUrl += `movie/${movieId}`;
  movieDetailsUrl += `?language=${apiConfig.langIso}`;
  movieDetailsUrl += `&api_key=${apiConfig.apiKey}`;

  return movieDetailsUrl;
}

export function getMovieSearchUrl(query: string, page = 1): string {
  let movieSearchUrl = apiConfig.baseUrl;
  movieSearchUrl += `search/movie`;
  movieSearchUrl += `?query=${query}`;
  movieSearchUrl += `language=${apiConfig.langIso}`;
  movieSearchUrl += `&page=${page}`;
  movieSearchUrl += `&api_key=${apiConfig.apiKey}`;

  return movieSearchUrl;
}

export async function fetchMoviesData(url: string): Promise<any> {
  const response = await fetch(url);
  const data = await response.json();

  if (data?.success === false)
    throw new Error(
      `Error: ${data?.status_message ?? "something whent wrong"}`
    );

  return data;
}
