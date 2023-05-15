import React from 'react';

/**
 * Modal - displays photo details in a modal.
 * @param {boolean} open - Modal's open status.
 * @param {Object} photo - Photo details.
 * @param {Function} onClose - Function to close the modal.
 */
export function Modal({ open, photo, onClose }) {
  if (!open) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Photo Details</h2>
        <p>Views: {photo.views}</p>
        <p>Downloads: {photo.downloads}</p>
        <p>Likes: {photo.likes}</p>
        <p>Collections: {photo.collections}</p>
        <p>Comments: {photo.comments}</p>
        <p>User: {photo.user}</p>
        <p>Tags: {photo.tags}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
