import React from 'react';
import styled from 'styled-components';

export const ImageGalleryItem = ({ images, onClickImage, toggleModal }) => {
  const handle = e => {
    toggleModal();
    onClickImage(e.currentTarget.dataset.largeImage);
  };
  
  return (
    <>
      {images.map((image, index) => (
        <ImageContainer
          key={index}
          onClick={handle}
          data-large-image={image.largeImageURL}
        >
          <ImageItem src={image.webformatURL} alt={image.name} />
        </ImageContainer>
      ))}
    </>
  );
};






const ImageContainer = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const ImageItem = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

