const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello World actualizado desde Git!</h1>');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
