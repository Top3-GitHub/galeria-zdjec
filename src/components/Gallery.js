import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import { fetchImages } from '../utils/api';

function Gallery() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchAndSetImages = async (query = '') => {
    setLoading(true);
    const data = await fetchImages(query);
    setImages(data);
    setLoading(false);
  };

  useEffect(() => {

    fetchAndSetImages();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAndSetImages(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Wpisz tag (np. kwiaty, flowers)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="btn btn-primary mt-2">
          Szukaj
        </button>
      </form>

      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Ładowanie...</span>
          </div>
          <p>Ładowanie zdjęć...</p>
        </div>
      ) : images.length === 0 ? (
        <p>Nie znaleziono zdjęć.</p>
      ) : (
        <div className="row">
          {images.map((image) => (
            <div key={image.id} className="col-md-4 mb-4">
              <ImageCard image={image} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;