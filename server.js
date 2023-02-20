const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = 3001;
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2003Huskie!',
    database: 'movie_db'
})

app.use(express.static('public'));

db.query(
    'SELECT * FROM movies',
    function(err, results) {
        app.get('/api/movies', (req,res) => {
            
        })
    }
);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });


  

