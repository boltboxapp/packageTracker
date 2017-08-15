'use strict';

const pg = require('pg');
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();
const conString = 'postgres://USERNAME:PASSWORD@HOST:PORT/databaseName';
const client = new pg.Client(conString);
client.connect();
// client.on('error', err => console.error(err));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));


app.get('/getUsers', (request, response) => {
  client.query(`SELECT * FROM users;`)
  .then(result => response.send(result.rows))
  .catch(console.error);
});

app.get('/getUserByID', (request, response) => {
  client.query(`SELECT * FROM users WHERE user_id=$1;`, [request.body.user_id])
  .then(result => response.send(result.rows))
  .catch(console.error);
});

app.post('/addUser', function(request, response) {
  client.query(
    'INSERT INTO users (user_name) VALUES ($1) ON CONFLICT DO NOTHING;', [request.body.user_name])
  .then(result => response.send(result.rows))
  .catch(console.error);
});

app.get('/getPackagesByUser', (request, response) => {
  client.query(`SELECT * FROM packages WHERE user_id=$1;`, [request.body.user_id])
  .then(result => response.send(result.rows))
  .catch(console.error);
})

app.post('/addPackageByUser', function(request, response) {
  client.query(
    'INSERT INTO packages (tracking_num, user_id, carrier) VALUES ($1, $2, $3) ON CONFLICT DO NOTHING;', [request.body.tracking_num, request.body.user_id, request.body.carrier])
  .then(result => response.send(result.rows))
  .catch(console.error);
})

createTables();

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));

function createTables(){

	client.query(`
    CREATE TABLE IF NOT EXISTS
    users (
      user_id SERIAL PRIMARY KEY,
      user_name VARCHAR (255) NOT NULL
    );`
  )
  .then(console.log('User table created'))
  .catch(console.error);


	client.query(`
    CREATE TABLE IF NOT EXISTS
    carriers (
      carrier_id SERIAL PRIMARY KEY,
      carrier VARCHAR (255) NOT NULL
    );`
  )
  .then(console.log('Carrier table created'))
  .catch(console.error);


  	client.query(`
    CREATE TABLE IF NOT EXISTS
    packages (
       package_id SERIAL PRIMARY KEY,
       user_id INTEGER REFERENCES users(user_id) NOT NULL,
       tracking_num VARCHAR (255) NOT NULL,
       carrier_id INTEGER REFERENCES carriers(carrier_id) NOT NULL
    );`
  )
  .then(console.log('Packages table created'))
  .catch(console.error);

};


// Only to be used when reseting tables
function setCarriers(){
	client.query("INSERT INTO carriers (carrier) VALUES ('UPS') ON CONFLICT DO NOTHING;")
  .then(console.log)
  .catch(console.error);

  client.query("INSERT INTO carriers (carrier) VALUES ('Fedex') ON CONFLICT DO NOTHING;")
  .then(console.log)
  .catch(console.error);

  client.query("INSERT INTO carriers (carrier) VALUES ('USPS') ON CONFLICT DO NOTHING;")
  .then(console.log)
  .catch(console.error);
}
