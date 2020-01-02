const express = require('express');
const reload = require('reload');
const app = express();

app.set('views', './view');
app.set('view engine', 'ejs');

const arrPeo = [
    {name: 'Viet', age: 19},
    {name: 'Long', age: 20}
];
const arrSubject = ['MongoDB', 'Angola', 'Python'];
app.locals.arrPeople =arrPeo;

app.get('/', (req, res) => res.render('home'));
app.get('/learn', (req, res) => res.render('learn', { username :'Viet Quoc', arrSubject : arrSubject}));

reload(app);
const server = require('http').createServer(app);
app.listen(3000), () => console.log('Server start');
