const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models/connection_db');
const router = express.Router(); // create a router

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static('public')); // static file

router.get('/', (req, res) => {
  // res.redirect('/admin/product.html');
  res.render('/');
});

router.post('/', (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const texture = req.body.texture;
  const wash = req.body.wash;
  const place = req.body.place;
  const note = req.body.note;
  const story = req.body.story;
  const type = req.body.type;
  const hot_title = req.body.hot_title;

  const color = req.body.color;

  const size = req.body.size;
  const stock = req.body.stock;

  let inserProductTB = `INSERT INTO product (id, title, description, price, texture, wash, place, note, story, type, hot_title)
                  VALUES (${id}, '${title}', '${description}', ${price}, '${texture}', '${wash}', '${place}', '${note}', '${story}', '${type}', '${hot_title}');`;

  let inserColorTB = `INSERT INTO color (p_id, name, code) VALUES (${id}, '${color}', 'color code');`;
  // image color_code
  let inserVariantTB = `INSERT INTO variant (size, stock, s_id, color_code) VALUES ('${size}', ${stock}, '1', 'color code');`;
  // s_id color_code

  db.query(inserProductTB, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Insert to product table ok');
  });

  db.query(inserColorTB, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Insert to color table ok');
  });

  db.query(inserVariantTB, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Insert to variant table ok');
  });

  res.redirect('/admin/product.html');

});

module.exports = router;
