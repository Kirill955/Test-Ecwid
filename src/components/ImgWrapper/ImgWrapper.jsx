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
    <div className="gallery-wrrapper">
        { images.map(img => {
          return (
            <div className="gallery-item" key={Math.random()} style={{backgroundImage: `url(${img.url})`}} />
          )}
        )}
    </div>
  )
};

