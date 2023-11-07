require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;

const { engine } = require('express-handlebars');

app.engine('hbs', engine({extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { message: 'hello world', arr: ['hello', 'world'], partial: 'part' });
});

app.listen(port, () => {
  console.log(`app listening at ${port}`);
});
