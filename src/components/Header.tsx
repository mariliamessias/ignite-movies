import { GenreResponseProps } from "../@types/types";

interface HeaderProps {
    genreSelected: GenreResponseProps
}

export function Header(props:HeaderProps){
    return(
       <header>
            <span className="category">Categoria:<span> {props.genreSelected.title}</span></span>
      </header>
    )
}