import React from 'react';

/**
 * CategorySelect - a dropdown for photo categories.
 * @param {string} value - Current category.
 * @param {Function} onChange - Function to update the category.
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
