import { HomeContainer, MovieContainer, MovieListContainer } from "./styles";
import PosterImg from '../../assets/spider_man.jpg'
import { useEffect, useState } from "react";

export function Home() {
    const imagePath = ''

    const [movies, setMovies] = useState([])

    // useEffect(() => {
    //     fetch(``)
    //     .then(response => response.json)
    //     .then(data => {
    //         setMovies(data.results)
    //     })
    // }, [])

    return (
        <HomeContainer>
            <h1>Movies</h1>
            <MovieListContainer>
                <MovieContainer>
                    <a href="">
                        <img src={PosterImg} alt="" />
                    </a>
                    <span>Miranha</span>
                </MovieContainer>
            </MovieListContainer>
        </HomeContainer>
    )
}