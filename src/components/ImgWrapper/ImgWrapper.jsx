import React from 'react';

// Style
import './ImgWrapper.scss';

export const ImgWrapper = ({ imagesArr }) => {
  return (
    <div className="gallery-wrrapper">
        { imagesArr.map(img => {
          return (
            <div className="gallery-item" key={img.id} >
              <img src={img.url} alt="Нет доступа к изображению :(" className="gallery-img" />
            </div>
          )}
        )}
    </div>
  )
};

// style={{backgroundImage: `url(${img.url})`}}