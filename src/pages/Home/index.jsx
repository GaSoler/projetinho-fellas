import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { HomeContainer, MovieContainer, MovieListContainer } from "./styles";

export function Home() {
    const imagePath = 'https://image.tmdb.org/t/p/w500/'

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fc160f66ad619fe7cd42af7c27b8d91a&language=en-US`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results)
    })
  }, [])

    return (
        <HomeContainer>
            <h1>Movies</h1>
            <MovieListContainer>
                {movies.map(movie => {
                    return (
                        <MovieContainer key={movie.id}>
                            <Link to={`/details/${movie.id}`}>
                                <img src={`${imagePath}${movie.poster_path}`} alt={movie.title}/>
                            </Link>
                            <span>{movie.title}</span>
                        </MovieContainer>
                    )
                })}
            </MovieListContainer>
        </HomeContainer>
    )
}