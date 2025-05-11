import React, { useState } from 'react';

function ImageCard({ image }) {
  const [downloads, setDownloads] = useState(image.downloads);

  const handleDownload = async () => {
    try {
      const response = await fetch(image.downloadLink, { method: 'GET' });

      if (!response.ok) {
        throw new Error(`Download failed: ${response.status}`);
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `${image.description || 'downloaded_image'}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloads((prev) => prev + 1);
    } catch (error) {
      console.error('Download error:', error);
      alert('Nie udało się pobrać pliku. Spróbuj ponownie później.');
    }
  };

  return (
    <div className="card">
      <img src={image.url} className="card-img-top" alt={image.description || 'Zdjęcie'} />
      <div className="card-body">
        <p className="card-text">{image.description || 'Brak opisu'}</p>
        <button className="btn btn-primary" onClick={handleDownload}>
          Pobierz
        </button>
        <p className="mt-2">Pobrano: {downloads} razy</p>
      </div>
    </div>
  );
}

export default ImageCard;