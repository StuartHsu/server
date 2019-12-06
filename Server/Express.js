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

// app.get('/admin/product.html', (req, res) => {
//   // res.redirect('/admin/product.html');
//   res.render('/admin/product');
// });

// app.post('/admin/product.html', (req, res) => {
//   const id = req.body.id;
//   const title = req.body.title;
//   const s_title = String(title);
//   const description = req.body.description;
//   const price = req.body.price;
//   const texture = req.body.texture;
//   const wash = req.body.wash;
//   const place = req.body.place;
//   const note = req.body.note;
//   const story = req.body.story;
//   const color = req.body.color;
//   const size = req.body.size;
//   const stock = req.body.stock;
//
//   // let inserSQL = `INSERT INTO product (id, title, description, price, texture, wash, place, note, story)
//   //                  VALUES (${id}, ${title}, ${description}, ${price}, ${texture}, ${wash}, ${place}, ${note}, ${story});`;
//
//   let inserSQL = `INSERT INTO product (id, title, description, price, type) VALUES (${id}, '${title}', '${description}', ${price}, "ok");`;
//
//                   // let inserSQL = "INSERT INTO product (id, title, description, price, type) VALUES (560, '好', '沒問題', 5, 'ok');";
//
//   insertDB = db.query(inserSQL, (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//   });
//
//   res.redirect('/admin/product.html');
//   // res.send('OK');
// });

// app.get('/admin/campaign.html', (req, res) => {
//   res.send('campaign!');
// });
//
// app.get('/admin/checkout.html', (req, res) => {
//   res.send('checkout!');
// });

app.listen(3000, () => console.log('Server running on port 3000'));
