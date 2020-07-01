import React from 'react';

// Кнопка для обработки форм
export const BtnSubmit = ({ handler }) => {
  return (
    <button type="submit" onClick={ handler }>Добавить</button>
  );
};