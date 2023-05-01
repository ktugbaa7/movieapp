import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import MovieDetails from "./components/MovieDetails";


function App() {
  const [movieList, setMovieList] = useState([]);
  const [search, setSearch] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    fetchMovie(search);
  }
  const fetchMovie = async (query) => {
    setMovieList([]);

    if (query == "" || undefined || null) {
      alert("Hata.")
      return
    }

    const filmList = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=ff1dec5e`)
      .then(res => res.json())
      .then(data => {
        if (data.Response == "True") {
          return data.Search
        }
        return []
      })

      if(filmList.length > 0) {
        setMovieList(filmList);
      } else {
        alert("Sonuç bulunamadı.")
      }
      
  }
  
  // ilk yüklemede görünen
useEffect(() => {
    fetchMovie("dune")
  }, [])
  
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <div className="content-wrap">
              <MainContent
                handleSubmit={handleSubmit}
                search={search}
                movieList={movieList}
                setSearch={setSearch}
              />
            </div>} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
