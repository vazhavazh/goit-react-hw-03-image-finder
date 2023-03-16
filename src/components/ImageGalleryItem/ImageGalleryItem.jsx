import React from 'react';
import PropTypes from 'prop-types';

import { ImageContainer, Image } from './ImageGalleryItemStyled';

export const ImageGalleryItem = ({ images, onClickImage, toggleModal }) => {
  const handle = e => {
    toggleModal();
    onClickImage(e.currentTarget.dataset.largeImage);
  };

  return (
    <>
      {images.map((image, index) => (
        <ImageContainer
          onClick={handle}
          data-large-image={image.largeImageURL}
          key={index}
        >
          <Image src={image.webformatURL} alt={image.name} key={image.id} />
        </ImageContainer>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    
    })
  ).isRequired,
  onClickImage: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
