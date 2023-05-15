import { useState, React } from "react";
import { useSelector } from "react-redux";
import { ImageGrid } from "./components/ImageGrid";
import { Modal } from "./components/Modal";
import { CategorySelect } from "./components/CategorySelect";
import { NavigationButtons } from "./components/NavigationButtons";
import { usePhotoNavigation } from "./components/usePhotoNavigation";

import "./App.css";

/**
 * Main application component.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setModalOpen(false);
  };

  const photos = useSelector((state) => state.photos.photos);
   const [
    category,
    page,
    handlePrev,
    handleNext,
    handleCategoryChange,
  ] = usePhotoNavigation('');

  return (
    <div className="App">
      {/* Navigation buttons and category selection */}
      <div>
        <NavigationButtons onPrev={handlePrev} onNext={handleNext} />
        <CategorySelect value={category} onChange={handleCategoryChange} />
      </div>

      {/* Image grid */}
      <ImageGrid photos={photos} onPhotoClick={handlePhotoClick} />

      {/* Photo details modal */}
      <Modal open={modalOpen} photo={selectedPhoto} onClose={closeModal} />
    </div>
  );
}

export default App;
