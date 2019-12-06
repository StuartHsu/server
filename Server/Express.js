const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('HEY!');
});

app.get('/admin/product.html', (req, res) => {
  res.send('product!');
});

app.get('/admin/campaign.html', (req, res) => {
  res.send('campaign!');
});

app.get('/admin/checkout.html', (req, res) => {
  res.send('checkout!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
