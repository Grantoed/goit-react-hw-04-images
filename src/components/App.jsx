import { useState } from 'react';
import { getImages } from './PixabayApi';
import { loadMore } from './PixabayApi';
import { Searchbar } from './Searchbar/Searchbar';
import { Gallery } from './ImageGallery/ImageGallery';

export const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.query.value;
    setLoading(true);
    getImages(searchQuery).then(result => {
      setImages([...result]);
      setLoading(false);
    });
  };

  const handleLoadMore = () => {
    setLoading(true);
    loadMore().then(result => {
      if (result.length === 0) {
        alert('You have reached the end of the list');
      }
      setImages(prevState => [...prevState, ...result]);
      setLoading(false);
    });
  };

  return (
    <>
      <Searchbar handleSubmit={handleSubmit}></Searchbar>
      <Gallery
        images={images}
        isLoading={loading}
        handleLoadMore={handleLoadMore}
      ></Gallery>
    </>
  );
};
