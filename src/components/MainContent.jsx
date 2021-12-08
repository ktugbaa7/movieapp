import React from 'react'
import MovieCard from './MovieCard'


function MainContent(props) {
    return (
        <main>
            <div className="main-head">
                <form className="search-box" onSubmit={props.handleSubmit}>
                    <input type="search" placeholder="Search for a movie.." required
                        value={props.search}
                        onChange={e => props.setSearch(e.target.value)} />
                    <button>search</button>
                </form>
            </div>
            <div>
                <div className="movie-list">
                    {props.movieList.map(movie => (
                        <MovieCard
                            movie={movie}
                            key={movie.imdbID} />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default MainContent
