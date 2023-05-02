import React from 'react';

/**
 * ImageGrid component displays a grid of images based on the provided data.
 * @param {Array} photos - An array of photo objects to be displayed in the grid.
 * @param {Function} onPhotoClick - A function to handle click events on a photo.
 */
export function ImageGrid({ photos, onPhotoClick }) {
  return (
    <div className="grid-container">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="grid-item"
          onClick={() => onPhotoClick(photo)}
        >
          <img src={photo.webformatURL} alt={photo.tags} />
        </div>
      ))}
    </div>
  );
}

