const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));

app.get('/photos', async (req, res) => {
  try {
    const { category = 'all', page = 1, sort = 'id' } = req.query;
    const response = await axios.get(
      `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}&page=${page}`
    );

    let photos = response.data.hits;

    if (sort === 'date') {
      photos.sort((a, b) => new Date(b.webformatURL) - new Date(a.webformatURL));
    } else {
      photos.sort((a, b) => b.id - a.id);
    }

    const pageSize = 9;
    const offset = (page - 1) * pageSize;
    const paginatedPhotos = photos.slice(offset, offset + pageSize);

    res.json(paginatedPhotos);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching photos' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
