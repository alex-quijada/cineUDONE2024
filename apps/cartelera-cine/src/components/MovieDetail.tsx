import React from 'react';
import '../styles/MovieDetail.css';
import { Movie } from './MovieList';

const MovieDetail: React.FC<{ movie: Movie; onClose: () => void }> = ({ movie, onClose }) => {
  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="movie-detail-view">
        <button className="close-button" onClick={onClose}>Cerrar</button>
        <img src={movie.poster} alt={movie.title} className="movie-poster-large" />
        <h2 className="movie-title-large">{movie.title}</h2>
        <p className="movie-synopsis">{movie.synopsis}</p>
        <div className="movie-additional-details">
          <div className="movie-detail"><strong>Horario:</strong> <span>{movie.schedule}</span></div>
          <div className="movie-detail"><strong>Tipo:</strong> <span>{movie.type}</span></div>
          <div className="movie-detail"><strong>Clasificación:</strong> <span>{movie.rating}</span></div>
          <div className="movie-detail"><strong>Duración:</strong> <span>{movie.duration} mins</span></div>
        </div>
        <button className="buy-button">Comprar entrada</button> {/* Botón de comprar entrada */}
      </div>
    </>
  );
};

export default MovieDetail;
