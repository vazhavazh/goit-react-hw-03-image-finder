import axios from 'axios';

export const GetImages = (query, page) => {
  return axios.get(
    `https://pixabay.com/api/?key=33620588-dd89b1b0713208c28d32b322f&q=${query}&image_type=photo&per_page=12&page=${page}`
  );
};


