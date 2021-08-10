import { GenreResponseProps } from '../@types/types';
import { Button } from './Button';

interface SideBarProps {
  genres: GenreResponseProps[],
  setSelectedGenreId: React.Dispatch<React.SetStateAction<number>>
  selectedGenreId: number
}


export function SideBar(props:SideBarProps) {
function handleClickButton(id: number) {
  props.setSelectedGenreId(id);
}

  return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {props.genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={props.selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}