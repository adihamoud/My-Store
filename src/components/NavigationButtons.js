import React from 'react';

/**
 * NavigationButtons component displays buttons for navigating between pages.
 * @param {Function} onPrev - A function to handle the "Prev" button click.
 * @param {Function} onNext - A function to handle the "Next" button click.
 */
export function NavigationButtons({ onPrev, onNext }) {
  return (
    <>
      <button onClick={onPrev}>Prev</button>
      <button onClick={onNext}>Next</button>
    </>
  );
}

