import React, { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import MovieList, { Movie } from '../components/MovieList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import MovieDetail from '../components/MovieDetail';
import moviesData from '../movies.json';
import '../styles/App.css';

// Importa las imágenes
import pelicula1 from '../assets/lord_of_the_rings.jpg';
import pelicula2 from '../assets/el_hobbit.jpg';
import pelicula3 from '../assets/van_helsing.jpg';
import pelicula4 from '../assets/harry_potter.jpg';
import pelicula5 from '../assets/la_monja.jpg';
import pelicula6 from '../assets/annabelle.jpg';
import pelicula7 from '../assets/terrifier.jpg';
import pelicula8 from '../assets/john_wick.jpg';
import pelicula9 from '../assets/volver_al_futuro_3.jpg';
import pelicula10 from '../assets/shrek_2.jpg';
import pelicula11 from '../assets/piratas_del_caribe.jpg';
import pelicula12 from '../assets/school_of_rock.jpg';

const images: { [key: number]: string } = {
  1: pelicula1,
  2: pelicula2,
  3: pelicula3,
  4: pelicula4,
  5: pelicula5,
  6: pelicula6,
  7: pelicula7,
  8: pelicula8,
  9: pelicula9,
  10: pelicula10,
  11: pelicula11,
  12: pelicula12,
};

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const updatedMovies = moviesData.movies.map((movie: Movie) => ({
      ...movie,
      poster: images[movie.id] || '',
    }));
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies); 
  }, []);
  
  const handleSearch = (query: string) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseMovieDetail = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Header />
        <SearchBar onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={<MovieList movies={filteredMovies} onSelect={handleSelectMovie} />}
          />
          <Route
            path="/page-2"
            element={
              <div>
                <h2>Page 2</h2>
                <Link to="/">Regresar a la cartelera</Link>
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
      {selectedMovie && (
        <MovieDetail movie={selectedMovie} onClose={handleCloseMovieDetail} />
      )}
    </div>
  );
};

export default App;
