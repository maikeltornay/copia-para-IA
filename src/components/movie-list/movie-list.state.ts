import { globalConfig } from "../../config";
import { MovieListLayout, MovieListState, MovieListType } from "./models";
import { getMovieListData } from "./movie-list.api";
import { addMovieListElements } from "./movie-list.view";

export const movieListState: MovieListState = {
  currentMovieListType: globalConfig.defaultMovieListType,
  currentMovieListLayout: MovieListLayout.Grid,
  currentMovieListData: [],
};

export async function setCurrentMovieListType(
  movieListType: MovieListType
): Promise<void> {
  movieListState.currentMovieListType = movieListType;
  movieListState.currentMovieListData = await getMovieListData(
    movieListState.currentMovieListType
  );
  addMovieListElements();
}

export function setCurrentMovieListLayout(
  movieListLayout: MovieListLayout
): void {
  if (movieListLayout !== movieListState.currentMovieListLayout) {
    movieListState.currentMovieListLayout = movieListLayout;
    addMovieListElements();
  }
}
