import { getElementByIdFrom } from "../../utils";
import {
  addMovieGridLayoutClickListener,
  addMovieRowLayoutClickListener,
  addMovieTypeSelectChangeListener,
} from "./movie-list.event";

export function addMovieListToolbar(): void {
  const appElement = getElementByIdFrom("app", "addMovieListToolbar");
  const movieToolbarWrapper = document.createElement("div");
  movieToolbarWrapper.className = "movie-toolbar-wrapper";
  movieToolbarWrapper.innerHTML = `
    <div id="movie-list-toolbar" class="container movie-toolbar">
      <div class="nav col-12 justify-content-between align-items-center">
        <div>
          <!-- grid icon button -->
          <button type="button" id="movie-grid-btn" class="btn btn-icon">
            <img src="grid-layout.svg" alt="grid movies" />
          </button>

          <!-- list icon button -->
          <button type="button" id="movie-list-btn" class="btn btn-icon">
            <img src="list-layout.svg" alt="list movies" />
          </button>
        </div>
        <div>
          <!-- list type select -->
          <select
            id="movie-type-select"
            class="form-select"
            aria-label="Movie list type"
          >
            <option selected value="now_playing">En cartelera</option>
            <option value="popular">Popular</option>
            <option value="top_rated">Mejor valoradas</option>
            <option value="upcoming">Próximamente</option>
          </select>
        </div>
      </div>
    </div>   
  `;
  appElement.appendChild(movieToolbarWrapper);

  // Add event listeners to the toolbar controls
  addMovieGridLayoutClickListener();
  addMovieRowLayoutClickListener();
  addMovieTypeSelectChangeListener();
}
