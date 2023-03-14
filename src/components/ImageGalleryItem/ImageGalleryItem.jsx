import React from 'react';
import styled from 'styled-components';

export const ImageGalleryItem = ({ imageURL }) => {
  return (
    <ImageContainer>
      <ImageItem src={imageURL} alt="img" />
    </ImageContainer>
  );
};

const ImageItem = styled.img`
  width: 100%;
  height: 100%;
  transition: all 0.4s ease-in;

  object-fit: cover;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 3px 4px 2px 0 lightblue;
    scale: 1.1;
  }
`;
const ImageContainer = styled.li`
  list-style: none;
  border-radius: 8px;
  overflow: hidden;
`;
