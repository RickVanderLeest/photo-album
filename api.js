const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/photos';

const getPhotoListByAlbumId = async (albumId) => {
  const response = await axios.get(
    url, {
      params: {
        albumId
      }
    }
  );

  return response.data;
}

module.exports = { getPhotoListByAlbumId };
