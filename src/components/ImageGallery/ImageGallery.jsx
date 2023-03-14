import styled from "styled-components"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";


export const ImageGallery = ({ images }) => {
    return (
      <Gallery>
        {images.map(image => (
          <ImageGalleryItem key={image.id} imageURL={image.webformatURL} />
        ))}
      </Gallery>
    );
}

// export const <ImageGallery>
//             {images.map(image => (
//               <ImageGalleryItem key={image.id} imageURL={image.largeImageURL} />
//             ))}
//           </ImageGallery>

const Gallery = styled.ul`
    
`