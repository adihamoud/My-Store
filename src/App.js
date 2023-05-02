import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotos, setCategory } from './actions/photoActions';
import './App.css';

function CategorySelect({ value, onChange }) {
  const options = ['animals', 'sports', 'work', 'nature', 'technology'];

  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">Select a category</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

function Modal({ open, photo, onClose }) {
  if (!open) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Photo Details</h2>
        <p>Views: {photo.views}</p>
        <p>Downloads: {photo.downloads}</p>
        <p>Collection: {photo.collection}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}


function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.photos);
  const [page, setPage] = useState(1);
  const category = useSelector((state) => state.photos.category); // Get category from the Redux store
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    dispatch(fetchPhotos('', 1));
  }, [dispatch]);

  const handlePrev = () => {
    setPage(page - 1);
    dispatch(fetchPhotos('', page - 1));
  };

  const handleNext = () => {
    setPage(page + 1);
    dispatch(fetchPhotos('', page + 1));
  };

  const handleCategoryChange = (category) => {
    setPage(1);
    dispatch(setCategory(category));
    dispatch(fetchPhotos(category, 1));
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <div>
        <button onClick={handlePrev}>Prev</button>
        <CategorySelect value={category} onChange={handleCategoryChange} />
        <button onClick={handleNext}>Next</button>
      </div>
      <div className="grid-container">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="grid-item"
            onClick={() => handlePhotoClick(photo)}
          >
            <img src={photo.webformatURL} alt={photo.tags} />
          </div>
        ))}
      </div>
      <Modal open={modalOpen} photo={selectedPhoto} onClose={closeModal} />
    </div>
  );
}

export default App;
