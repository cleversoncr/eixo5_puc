const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Estou dizendo para o Express usar o EJS como View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Body parser - captura de dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('perguntar');
});

//Configuração a porta localhost
app.listen(8080, () => {
  console.log('App rodando!');
});