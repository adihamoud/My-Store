import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos, setCategory } from './photoActions';

/**
 * Custom hook to manage photo navigation, including fetching data and updating category.
 *
 * @param {string} initialCategory - The initial category of photos to fetch.
 * @returns {Array} Array containing category, page number, and handler functions for previous page, next page, category change, photo click, and modal closing.
 */
export function usePhotoNavigation(initialCategory) {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.photos);
  const [page, setPage] = useState(1);
  const category = useSelector((state) => state.photos.category);
  

  useEffect(() => {
    dispatch(fetchPhotos(initialCategory, 1));
  }, [dispatch, initialCategory]);

  const handlePrev = () => {
    if (page > 1) { 
      setPage(page - 1);
      dispatch(fetchPhotos(category, page - 1));
    }
  };
  
  const handleNext = () => {
    setPage(page + 1);
    dispatch(fetchPhotos(category, page + 1));
  };

  const handleCategoryChange = (newCategory) => {
    setPage(1);
    dispatch(setCategory(newCategory));
    dispatch(fetchPhotos(newCategory, 1));
  };


  return [
    category,
    page,
    handlePrev,
    handleNext,
    handleCategoryChange,
  ];
}
