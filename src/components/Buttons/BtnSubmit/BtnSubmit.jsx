import React from 'react';

export const BtnSubmit = ({ handler }) => {
  return (
    <button type="submit" onClick={ handler }>Добавить</button>
  );
};