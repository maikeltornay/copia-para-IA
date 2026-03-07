import { getAppElement } from "../../utils";
import { addMovieListToolbar } from "./movie-list.toolbar";
import { getMovieListData } from "./movie-list.api";
import {
  createMovieListElement,
  createMoviesContainerElement,
} from "./movie-list.elements";
import { movieListState } from "./movie-list.state";
import { addMovieListPaginator } from "./movie-list.paginator";

/**
 * Muestra la vista de la lista de películas añadiendo
 * los elementos visuales correspondientes
 */
export async function showMovieListView(): Promise<void> {
  movieListState.currentMovieListData = await getMovieListData(
    movieListState.currentMovieListType
  );

  addMovieListToolbar();
  addMovieListElements();
  addMovieListPaginator();
}

/**
 * Añade el listado de las películas
 * para el tipo de layout seleccionado ("Grid" o "Row")
 * y el tipo de listado seleccionado de acuerdo a MovieListType
 */
export async function addMovieListElements(): Promise<void> {
  let moviesContainerElement = document.getElementById("movie-list-container");

  if (moviesContainerElement === null) {
    moviesContainerElement = createMoviesContainerElement();
    getAppElement().appendChild(moviesContainerElement);
  }

  moviesContainerElement.innerHTML = "";

  moviesContainerElement.appendChild(
    createMovieListElement(
      movieListState.currentMovieListData,
      movieListState.currentMovieListLayout
    )
  );
}
