import styled from "styled-components"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";


export const ImageGallery = ({ images, toggleModal, onClickImage }) => {
  return (
    <Gallery>
      <ImageGalleryItem
        images={images}
        onClickImage={onClickImage}
        toggleModal={toggleModal}
      />
    </Gallery>
  );
};




const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;