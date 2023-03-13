import { DetailsContainer } from "./styles";
import PosterImg from '../../assets/spider_man.jpg'

export function Details() {
    return (
        <DetailsContainer>
            <div className="movie">
                <img src={PosterImg} alt="miranha miranha miranha miranha miranha miranha" />
                <div className="details">
                    <h1>Miranha</h1>
                    <span>Sinopse: miranha miranha miranha miranha miranha miranha</span>
                    <span className="release-date">Release date: 03-12-2021</span>
                    <a href="">Go back</a>
                </div>
            </div>
        </DetailsContainer>
    )
}