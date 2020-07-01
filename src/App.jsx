import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Style
import './App.scss';

// Components
import Form from './components/Form';
import ImgWrapper from './components/ImgWrapper';

function App() {

  // При загрузке страницы выводится ваш исходный файл
  const [images, getImages] = useState([]);
  useEffect(() => {
    axios.get('https://kirill955.github.io/db/Images.json')
      .then(res => {
        getImages(res.data)
      })
      .catch(error => console.log(error))
  }, []);

  // Добавление нового изображения 
  const addImg = (event) => {
    event.preventDefault();
    const image = {url: document.querySelector('input').value};
    getImages([...images, image]);
    document.querySelector('input').value = '';
  };

  // Удаление последнего изображения
  const deleteImg = (event) => {
    event.preventDefault();
    console.log('click');
    const newImages = images;
    newImages.pop();
    getImages([...newImages]);
  };

  return (
    <div className="App">
      <h1 className="title">Добро пожаловать в галерею изображений</h1>
      <Form handlerForm={ addImg } handlerDelete={ deleteImg } />
      <ImgWrapper imagesArr={images} />
    </div>
  );
}

export default App;
