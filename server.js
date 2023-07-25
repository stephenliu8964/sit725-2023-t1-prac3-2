let express = require('express');
let app = express();
let port = process.env.port || 3000;

const cardList = [{
    title: "Kitten 2",
    path: "images/kitten-2.jpg",
    link: "About Kitten 2",
    desciption: "Demo desciption about kitten 2"
},
{
    title: "Kitten 3",
    path: "images/kitten-3.jpg",
    link: "About Kitten 3",
    desciption: "Demo desciption about kitten 3"
}
];

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

app.get('/', function (req,res) {
    res.render('pages/index',{cats:cardList})
});

app.get('/addTwoNumbers', function (req,res) {
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    let result = parseInt(num1) + parseInt(num2);
    let response = {data:result, message:'sucess', statusCode:200}
    res.json(response);
});

app.listen(port, ()=>{
    console.log('express server started');
});