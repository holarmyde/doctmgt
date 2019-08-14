const express = require('express');
const app = express();
const config = require('./config')
const ImageController = require('./client/src/push/imageController');
const mysql = require('mysql');



const db = mysql.createConnection({
  host: 'localhost',//'aremufemmydocmgtproj.cetg2pfkxujn.us-east-1.rds.amazonaws.com',
  user: 'root',//'donnyc2017',
  password: '',//'donnyc2017',
  database: 'dontest'
});


// Connect
db.connect((err) => {
  if (err) {
    throw err;

  }

  console.log('Database Connected')
});



app.post('/updatedontest/:email', (req, res) => {
  let newFirstname = 'Updated firstname'
  let sql = `UPDATE dontest SET firstname = '${newFirstname}' WHERE email = ${req.params.email}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('dontest1 Updated...')
  });
})



app.post('/api/uploadImage', ImageController.uploadImageToS3);


//app.use(fileUpload());




app.listen(config.port, () => console.log('Server connected...'));