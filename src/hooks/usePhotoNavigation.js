import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos, setCategory } from '../components/photoActions';

/**
 * Custom hook to manage photo navigation, including fetching data and updating category.
 *
 * @param {string} initialCategory - The initial category to load.
 * @returns {Array} An array containing category, page, handlePrev, handleNext, handleCategoryChange, handlePhotoClick, and closeModal.
 */
export function usePhotoNavigation(initialCategory) {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.photos);
  const [page, setPage] = useState(1);
  const category = useSelector((state) => state.photos.category);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    dispatch(fetchPhotos(initialCategory, 1));
  }, [dispatch, initialCategory]);

  const handlePrev = () => {
    setPage(page - 1);
    dispatch(fetchPhotos(category, page - 1));
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

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return [
    category,
    page,
    handlePrev,
    handleNext,
    handleCategoryChange,
    handlePhotoClick,
    closeModal,
  ];
}

