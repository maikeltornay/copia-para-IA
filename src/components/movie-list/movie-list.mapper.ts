import { globalConfig } from "../../config";
import { MovieList } from "./models";

export function movieListMapper(movieData: any): MovieList {
  const { id, title, overview, poster_path, release_date, vote_average } =
    movieData;
  return {
    id,
    title: title ?? globalConfig.notAvailableValue,
    overview: overview ?? globalConfig.notAvailableValue,
    poster: poster_path ?? globalConfig.notAvailableValue,
    year: getFormattedYear(release_date),
    rating: getFormattedRating(vote_average),
  };
}

function getFormattedYear(date: string): string {
  return date?.split("-").shift() ?? globalConfig.notAvailableValue;
}

function getFormattedRating(rating: string): string {
  return Number(rating).toFixed(1).toString() ?? globalConfig.notAvailableValue;
}
