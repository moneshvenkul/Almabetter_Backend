const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send('This is the root path');
  });


app.get('/hello', (req, res) => {
    res.send('Hello, world!');
  });


  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];




app.get('/pets', (req, res) => {
res.send('Hello, pets!');
});

app.get('/products/:id', function(req, res) {
    const productId = req.params.id
    res.send(`Product ID: ${productId}`)
  })



  app.post('/users', (req, res) => {
    const { name } = req.body;
    const id = users.length + 1;
    const user = { id, name };
    users.push(user);
    res.json(users);
  });

 
  app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const user = users.find(u => u.id == id);
    if (!user) {
      res.status(404).send('User not found');
    } else {
      user.name = name;
      res.json(users);
    }
  });


  app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(u => u.id == id);
    if (index < 0) {
      res.status(404).send('User not found');
    } else {
      const user = users[index];
      users.splice(index, 1);
      res.json(users);
    }
  });



app.listen(3000, () => console.log('Server started on port 3000'));
