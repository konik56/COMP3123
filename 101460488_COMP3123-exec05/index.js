const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const fs = require('fs');

app.use(express.json());


router.get('/home', (req,res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

router.get('/profile', (req,res) => {
  fs.readFile(path.join(__dirname, 'user.json'), 'utf8', (err, data) => {

    if (err) res.status(500).send('There was an error reading user.json file');

    try {
      const users = JSON.parse(data);
      res.json(users);
    }
    catch (err) {
      res.status(500).send('There was an error parsing the user.json file');
    }
  });
});

router.post('/login', (req,res) => {
  console.log(req.body);
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ status: false, message: 'Username and password are required' });
  }

  fs.readFile(path.join(__dirname, 'user.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading user.json file');
    }

    const users = JSON.parse(data);
    const user = users.find(u => u.username === username);
    console.log(user);

    if (!user) {
      return res.json({ status: false, message: 'The username is not valid' });
    }

    if (user.password !== password) {
      return res.json({ status: false, message: 'The password is not valid' });
    }

    return res.json({ status: true, message: 'The user is valid' });
    
  });
});

router.get('/logout', (req,res) => {
  const username = req.query.username;

  if (!username) {
    return res.status(400).send('Username is required');
  }

  res.send(`Username ${username} successful logout.`);
``});

app.use((err,req,res,next) => {
  console.error(err);
  res.status(500).send('Server Error');
});

app.get('/error', (req, res) => {
  throw new Error('This is a test error');
})

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));