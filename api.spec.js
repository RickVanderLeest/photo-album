const { getPhotoListByAlbumId } = require('./api');
const axios = require('axios');

jest.mock('axios');

const photoData = [{
  'albumId': 1,
  'id': 1,
  'title': 'accusamus beatae ad facilis cum similique qui sunt',
  'url': 'https://via.placeholder.com/600/92c952',
  'thumbnailUrl': 'https://via.placeholder.com/150/92c952'
}];

test('should successfully call getPhotoListByAlbum', async () => {
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: photoData
    })
  );
  const data = await getPhotoListByAlbumId(1);

  expect(data).toEqual(photoData);
  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith(
    'https://jsonplaceholder.typicode.com/photos',
    {
      params: {
        albumId: 1
      }
    }
  );
});
