import React from 'react';

// Style
import './Form.scss';

// Components
import { Inputs } from '../Inputs/Inputs';
import { Buttons } from '../Buttons/Buttons';


export const Form = ({ handlerForm, handlerDelete }) => {
  return (
    <form action="POST" className="form-img" >
      <Inputs.Text />
      <div className="form__btn-wrapper">
        <Buttons.Submit handler={ handlerForm } />
        <Buttons.Delete handler={ handlerDelete } />
      </div>
    </form>
  );
};