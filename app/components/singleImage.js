import React from 'react';
import styles from '../styles';

const style = styles.SingleImage;


const SingleImage = ({ image, changSelectedeImage }) => {

  const handleClick = (event) => {

    event.preventDefault();
    changSelectedeImage(image);

  };

  return (

    <button

      type="button"
      style={style.button}
      onClick={handleClick}
    >

      <img alt="#" style={style.image} src={image.file} />

      <span style={style.name}>{image.name || 'No Name'}</span>
    </button>
  );

};

export default SingleImage;
