const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models/connection_db');
const router = express.Router(); // create a router
const multer  = require('multer'); // file upload

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/');
  },
  filename: function (req, file, cb) {
    var newFilename = Math.floor((Math.random() * 1000000));
    cb(null, newFilename + '.png');
  }
});
var upload = multer({ storage: storage });

// const upload = multer({ dest: 'uploads/' }); // file upload

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static('public')); // static file

router.get('/', (req, res) => {
  // res.redirect('/admin/product.html');
  res.render('/');
});

router.post('/', upload.array('images', 3), (req, res) => {
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
  const imagePath = req.files.map(file => `http://localhost:3000/uploads/${file.filename}`);

  const size = req.body.size;
  const stock = req.body.stock;

  let inserProductTB = `INSERT INTO product (id, title, description, price, texture, wash, place, note, story, type, hot_title, main_image, images)
                  VALUES (${id}, '${title}', '${description}', ${price}, '${texture}', '${wash}', '${place}', '${note}', '${story}', '${type}', '${hot_title}', '${imagePath[0]}', '${imagePath}');`;

  let inserColorTB = `INSERT INTO color (p_id, name, code) VALUES (${id}, '${color}', 'color code');`;
  // color_code
  const number = Math.random()*10;
  let inserVariantTB = `INSERT INTO variant (size, stock, s_id, color_code) VALUES ('${size}', ${stock}, ${number}, 'color code');`;


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
