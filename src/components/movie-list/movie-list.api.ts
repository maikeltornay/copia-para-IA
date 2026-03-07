import { MovieList, MovieListType } from "./models";
import { fetchMoviesData, getMovieListUrl } from "../../utils";
import { movieListMapper } from "./movie-list.mapper";

/**
 * Get a movie list page (20 items) from the TMDB Api
 * @param movieListType: MovieListType
 * @param page: number
 * @returns array of movie objects
 */
export async function getMovieListData(
  movieListType: MovieListType,
  page = 1
): Promise<MovieList[]> {
  const movieListUrl = getMovieListUrl(movieListType, page);
  const movieListData = await fetchMoviesData(movieListUrl);
  return movieListData.results.map((movieData: any) =>
    movieListMapper(movieData)
  );
}
