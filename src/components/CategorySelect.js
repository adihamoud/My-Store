import React from 'react';

/**
 * CategorySelect component displays a dropdown for selecting a photo category.
 * @param {string} value - The currently selected category.
 * @param {Function} onChange - A function to handle the change of the category.
 */
export function CategorySelect({ value, onChange }) {
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


