import React from 'react';

/**
 * Modal component displays a modal with photo details.
 * @param {boolean} open - Determines if the modal is open or not.
 * @param {Object} photo - A photo object containing the details to be displayed.
 * @param {Function} onClose - A function to handle the closing of the modal.
 */
export function Modal({ open, photo, onClose }) {
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
