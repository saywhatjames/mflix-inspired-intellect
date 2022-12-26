const express = require('express');  
const bodyParser = require('body-parser');  
const cors = require('cors');  
const Port = 5000;  
const app = express();  
const fs = require('fs');
const dataPath = './db/movies.json';
app.use(bodyParser.json());  
app.use(cors());  


app.get('/', function(req, res) {  
    res.send('hello server 5000 is working ');  
})  

 app.get('/movies', (req, res) => {
   fs.readFile(dataPath, 'utf8', (err, data) => {
     if (err) {
       throw err;
     }

     res.send(JSON.parse(data));
   });
 });

app.listen(Port, function() {  
    console.log('server running on localhost: ' + Port)  
});   