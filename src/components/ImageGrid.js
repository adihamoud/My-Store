import React from 'react';

/**
 * ImageGrid - a grid display for images.
 * @param {Array} photos - Photo data for display.
 * @param {Function} onPhotoClick - Function to handle photo click events.
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
