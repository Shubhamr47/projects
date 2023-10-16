// const API_KEY="4032e9ea27904614a270a1e6360405ee";
// const url= "https://newsapi.org/v2/everything?q=";

// window.addEventListener("load", () =>fetchNews("India"));

// async function fetchNews(query){
//     const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
//     const data = await res.json();
//     console.log(data);
// }



const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/news', async (req, res) => {
  const query = req.query.query;
  const apiKey = 'YOUR_API_KEY';
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

