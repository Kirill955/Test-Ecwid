import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Style
import './ImgWrapper.scss';

export const ImgWrapper = () => {
  const [images, getImages] = useState([]);
  useEffect(() => {
    axios.get('https://kirill955.github.io/db/Images.json')
      .then(res => {
        getImages(res.data)
      })
  }, []);
  return (
    <>
      {images.map(img => {return (<img src={img.url} alt="fd" key={Math.random()}/>)})}
      {console.log(images)}
    </>
  )
};

