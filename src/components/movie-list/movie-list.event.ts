import { getElementByIdFrom } from "../../utils";
// import { showMovieDetailView } from "../movie-detail/movie-detail.view";
import { MovieListLayout, MovieListType } from "./models";
import {
  setCurrentMovieListLayout,
  setCurrentMovieListType,
} from "./movie-list.state";
import { listaPeliculas } from "./movie-list";

/**
 * Añade evento en el botón del modo "Grid"
 */
export function addMovieGridLayoutClickListener() {
  const element = getElementByIdFrom(
    "movie-grid-btn",
    "addMovieGridModeClickListener"
  );

  element.addEventListener("click", () => {
    setCurrentMovieListLayout(MovieListLayout.Grid);
  });
}

/**
 * Añade evento en el botón del modo "Row"
 */
export function addMovieRowLayoutClickListener() {
  const element = getElementByIdFrom(
    "movie-list-btn",
    "addMovieListModeClickListener"
  );

  element.addEventListener("click", () => {
    setCurrentMovieListLayout(MovieListLayout.Row);
  });
}

/**
 * Añade evento en el control de formulario
 * select para el tipo de listado de películas
 */
export function addMovieTypeSelectChangeListener() {
  const selectElem = getElementByIdFrom(
    "movie-type-select",
    "addMovieTypeSelectChangeListener"
  );
  selectElem.addEventListener("change", selectChangeEventHandler);
}

/**
 * Función handler que maneja el evento "change" en el select
 * del tipo de listado de películas de acuerdo con MovieListType
 */
async function selectChangeEventHandler(event: Event) {
  const selectElem = event.target as HTMLSelectElement;
  const movieListTypeString = selectElem?.value;
  const movieListTypeOptions: string[] = Object.values(MovieListType);
  const isValidMovieTypeOption =
    movieListTypeOptions.includes(movieListTypeString);
    
    if (!isValidMovieTypeOption)
      throw new Error(
    `Error(selectChangeEventHandler): ${movieListTypeString} is not a MovieListType`
  );
  //generar nueva categoria
  const nuevaCategoria = movieListTypeString as MovieListType;
    setCurrentMovieListType(nuevaCategoria);
    //mas cositas
      console.log("Cambiando a:", nuevaCategoria);
  await listaPeliculas(nuevaCategoria); 

  setCurrentMovieListType(movieListTypeString as MovieListType);
}

/**
 * Añade evento al contenedor del listado de películas
 * que recoje por bubling los clics en la portada de una película
 * @param movieListContainer
 */
export function addMovieListContainerClickListener(
  movieListContainer: HTMLElement
): void {
  movieListContainer.addEventListener("click", (event: Event) => {
    const target: HTMLImageElement | null = event.target as HTMLImageElement;

    if (
      target?.className === "movie-poster" &&
      target?.hasAttribute("data-movie-id")
    ) {
      console.log("id", target.getAttribute("data-movie-id"));
      const movieId = target?.getAttribute("data-movie-id") ?? "";

      // if (movieId?.length > 0) showMovieDetailView(Number(movieId));
    }
  });
}
