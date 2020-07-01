import React from 'react';

// Style
import './ImgWrapper.scss';

export const ImgWrapper = ({ imagesArr }) => {
  return (
    <div className="gallery-wrrapper">
        { imagesArr.map(img => {
          return (
            <div className="gallery-item" key={img.id} style={{backgroundImage: `url(${img.url})`}} />
          )}
        )}
    </div>
  )
};

