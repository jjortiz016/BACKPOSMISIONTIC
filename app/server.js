const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000;

app.listen(PORT, function (){
  console.log(`La app ha arrancado en http://${hostname}:${PORT}`);


});