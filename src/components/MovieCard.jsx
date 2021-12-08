import React from 'react'
import {Link} from 'react-router-dom'

function MovieCard({ movie }) {
    return (
        <div>
            <article className="movie-card">
                <Link to={`movie/${movie.imdbID}`}>
                <figure>
                    <img src={movie.Poster} alt="Movie" />
                </figure>
                </Link>
                <h3>{movie.Title}</h3>
            </article>
        </div>
    )
}

export default MovieCard
