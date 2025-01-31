import express from "express";
import hanlebars from 'express-handlebars'
import homeController from './controllers/homeController.js';

const app = express();

app.engine('hbs', hanlebars.engine({
    extname:'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use('/static' , (express.static('./src/public')));


app.use(homeController)



app.get('*' , (req,res) => {
    res.render('404');
});
app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));
