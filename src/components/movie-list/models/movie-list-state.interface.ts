import { MovieListLayout } from "./movie-list-layout.enum";
import { MovieListType } from "./movie-list-type.enum";
import { MovieList } from "./movie-list.interface";

export interface MovieListState {
  currentMovieListType: MovieListType;
  currentMovieListLayout: MovieListLayout;
  currentMovieListData: MovieList[];
}
