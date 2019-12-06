const express = require('express');
const bodyParser = require('body-parser');
// const db = require('./models/connection_db');

const app = express();

const adminProduct = require('./routes/adminproduct');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public')); // static file

app.use('/admin/product.html', adminProduct); // 取用 cardroute

app.get('/', (req, res) => {
  res.send('HEY!');
});


app.listen(3000, () => console.log('Server running on port 3000'));
