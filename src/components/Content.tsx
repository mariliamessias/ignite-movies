import { MovieCard } from './MovieCard';
import { Header } from './Header';
import { GenreResponseProps, MovieProps } from '../@types/types';

interface ContentProps {
  movies: MovieProps[],
  genreSelected: GenreResponseProps
}

export function Content( props: ContentProps ) {
  return(
    <div className="container">

        <Header genreSelected={props.genreSelected}/>
        <main>
          <div className="movies-list">
            {props.movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
    </div>
  )
}