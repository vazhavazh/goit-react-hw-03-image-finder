import PropTypes from "prop-types"

import { Gallery } from "./ImageGalleryStyled"
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

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
  onClickImage: PropTypes.func.isRequired
};


