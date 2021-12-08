import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

function MovieDetails() {
    const [movieInfo, setMovieInfo] = useState({});

    const movieID = useParams();

    const fetchMovie = async (query) => {

        const temp = await fetch(`http://www.omdbapi.com/?i=${query}&apikey=ff1dec5e`)
            .then(res => res.json())
            .then(data => {
                return data
            })

        setMovieInfo(temp);
    }

    useEffect(() => {
        fetchMovie(movieID.id);
    }, []);

    return (

        <div className="container">

            <div className="cn-movie">
                <img src={movieInfo.Poster} alt="Movie" />
                <div className="moviedt">
                    <h2>{movieInfo.Title}</h2>
                    <h3>{movieInfo.Year}</h3>
                    <p>{movieInfo.Plot}</p>
                </div>

            </div>
        </div>
    )
}


export default MovieDetails;


