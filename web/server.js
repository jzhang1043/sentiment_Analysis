const express = require('express');
const { spawn } = require('child_process')
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {texts:"", value: ""});
});

app.post('/', (req, res) => {
  const inputText = req.body.inputText;
  console.log(`Input is: ${inputText}`);

  const python = spawn('python', ['script.py', inputText])

  python.stdout.on('data', (data) => {
    res.render('index', {texts: inputText, value: data});
  })
});


// listen to port
app.listen(3000);
