import { getMovieListData} from './movie-list.api';
import { MovieListType } from "./models";
import { MovieListLayout } from './models';
import { createMovieListElement, createMoviesContainerElement} from './movie-list.elements';
import {getAppElement} from '../../utils';
import { addMovieListToolbar, } from './movie-list.toolbar';
import { addMovieTypeSelectChangeListener } from './movie-list.event';



// 1. Añadimos 'tipo' como parámetro (por defecto es NowPlaying)

export async function listaPeliculas(tipo: MovieListType = MovieListType.NowPlaying) {
    // 1. Traer datos de la API
    const peliculas = await getMovieListData(tipo);
    
    // 2. LIMPIEZA: Vaciamos el app para que no haya restos de ejecuciones previas
    const app = getAppElement();
    app.innerHTML = ''; 

    // 3. PINTAMOS LA BARRA (Toolbar) arriba
    // Esta función crea el HTML del selector y los botones de grid/list
    addMovieListToolbar(); 

    // 4. CREAMOS EL HUECO PARA LAS PELIS debajo de la barra
    const contenedor = createMoviesContainerElement();
    app.appendChild(contenedor); 

    // 5. METEMOS LAS PELIS en ese hueco
    const listadoHtml = createMovieListElement(peliculas, MovieListLayout.Grid);
    contenedor.appendChild(listadoHtml);

    // 6. ¡EL TRUCO!: En lugar de usar la función que duplica (showMovieListView),
    // vamos a usar solo la función que "despierta" al selector de categorías.
    // Como vimos antes que estaba en movie-list.toolbar.ts:
    addMovieTypeSelectChangeListener(); 
}





