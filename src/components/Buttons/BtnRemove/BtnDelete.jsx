import React from 'react';

// Кнопка для удаления
export const BtnDelete = ({ handler }) => {
  return (
    <button type="button" onClick={ handler } className="btn-delete" >Удалить</button>
  )
};