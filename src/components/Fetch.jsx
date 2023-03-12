const BASE_URL = 'https://pixabay.com/api';
export const fetchImagesByQuery = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/?q=${query}&page=1&key=33620588-dd89b1b0713208c28d32b322f&image_type=photo&orientation=horizontal&per_page=12`
    );
    const items = await response.json();
    return items;
  } catch (error) {
    console.log(error.message);
  }
};
