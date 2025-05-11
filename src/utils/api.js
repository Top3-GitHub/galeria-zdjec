const ACCESS_KEY = 'z0u18a3aCNM2q2I2Ig3CxgrPXiVdOXLKa4HmoStHggY';

export const fetchImages = async (query = '') => {
  const url = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&count=9${
    query ? `&query=${query}` : ''
  }`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }

    console.log(response.status);

    const data = await response.json();

    return data.map((photo) => ({
      id: photo.id,
      url: photo.urls.small,
      description: photo.alt_description,
      tags: photo.tags ? photo.tags.map((tag) => tag.title) : [],
      downloads: photo.downloads || 0,
      downloadLink: photo.links.download,
    }));
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};