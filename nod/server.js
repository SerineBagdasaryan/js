var express = require('express');
var app = express();

// This responds with "Hello World" on the homepage

// This responds a POST request for the homepage
app.post('/', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/api/cars', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    console.log("Got a GET request for /list_user");
    var responseBody1 =
        [
            {"year":2001,
                "iconYear":"cars/carsImage/iconyear.png",
                "make":"Mercedes","model":"Maybach S560",
                "image":"CAR LISTING/carsImage/image.jpg",
                "condition":"use car",
                "body":"compact",
                "icontransmission":"CAR LISTING/carsImage/icontransmission.png",
                "transmission":"Automatic",
                "iconuseWay":"CAR LISTING/carsImage/iconuseWay.png",
                "useWay":13000,
                "price":240500,
                "stars":"CAR LISTING/carsImage/stars.png",
                "description":"LAMBORJINI"},

            {"year":2001,
                "iconYear":"CAR LISTING/carsImage/iconyear.png",
                "make":"Bugatti",
                "model":"Chiron",
                "image":"CAR LISTING/carsImage/in.jpg",
                "icontransmission":"cars/carsImage/icontransmission.png",
                "condition":"use car",
                "body":"compact",
                "transmission":"Automatic",
                "iconuseWay":"CAR LISTING/carsImage/iconuseWay.png",
                "useWay":14000,
                "price":1400000,
                "stars":"CAR LISTING/carsImage/stars.png",
                "description":"INFINITY"},

            {"year":2001,
                "iconYear":"CAR LISTING/carsImage/iconyear.png",
                "make":"AUDI",
                "model":"A8 QUATTRO",
                "image":"CAR LISTING/carsImage/bm.jpg",
                "condition":"use car",
                "body":"compact",

                "transmission":"Automatic",

                "useWay":13000,
                "price":201000,
                "stars":"CAR LISTING/carsImage/stars.png",
                "description":"BMW"},

            {"year":2001,
                "iconYear":"CAR LISTING/carsImage/iconyear.png",
                "make":"BLUE BIRD",
                "model":"ALL AMERICAN",
                "image":"CAR LISTING/carsImage/imag.jpg",
                "condition":"use car",
                "body":"compact",
                "transmission":"Automatic",

                "useWay":13000,
                "price":201000,
                "stars":"CAR LISTING/carsImage/stars.png",
                "description":"BlueBird"},

            {"year":2001,
                "iconYear":"CAR LISTING/carsImage/iconyear.png",
                "make":"BLUE BIRD",
                "model":"SHL TC2000",
                "image":"CAR LISTING/carsImage/images.jpg",
                "condition":"use car",
                "body":"compact",

                "transmission":"Automatic",

                "useWay":13000,
                "price":201000,
                "stars":"CAR LISTING/carsImage/stars.png",
                "description":"Ford Mustang"}

        ];

    res.send(responseBody1);
})

app.get('/api/products', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log("Got a GET request for /list_user");
    var responseBody =
        [
            {id:1,
                "year":2001,
                "iconYear":"products/carsImage/iconyear.png",
                "make":"Mercedes","model":"Maybach S560",
                "image":"products/carsImage/mercedesmaybachS560.jpg",
                "condition":"use car",
                "body":"compact",
                "icontransmission":"products/carsImage/icontransmission.png",
                "transmission":"Automatic",
                "iconuseWay":"products/carsImage/iconuseWay.png",
                "useWay":13000,
                "price":240500,
                "stars":"products/carsImage/stars.png",
                "description":"Nunc facilisis sagittis ullamcorper. Proin lectulputate"},

            {id:2,
                "year":2001,
                "iconYear":"products/carsImage/iconyear.png",
                "make":"Bugatti",
                "model":"Chiron",
                "image":"products/carsImage/BugattiChiron.jpg",
                "icontransmission":"products/carsImage/icontransmission.png",
                "condition":"use car",
                "body":"cupe",
                "transmission":"Automatic",
                "iconuseWay":"products/carsImage/iconuseWay.png",
                "useWay":14000,
                "price":1400000,
                "stars":"products/carsImage/stars.png",
                "description":"Nunc facilisis sagittis ullamcorper. Proin lectulputate"},

            {id:3,
                "year":2001,
                "iconYear":"products/carsImage/iconyear.png",
                "make":"AUDI",
                "model":"A8 QUATTRO",
                "image":"products/carsImage/Audi A8Quattro.jpg",
                "condition":"use car",
                "body":"compact",

                "transmission":"Automatic",

                "useWay":13000,
                "price":201000,
                "stars":"products/carsImage/stars.png",
                "description":"Nunc facilisis sagittis ullamcorper. Proin lectulputate"},

            {id:4,
                "year":2001,
                "iconYear":"products/carsImage/iconyear.png",
                "make":"BLUE BIRD",
                "model":"ALL AMERICAN",
                "image":"products/carsImage/BlueBirdAllAmerica.jpg",
                "condition":"use car",
                "body":"compact",
                "transmission":"Automatic",

                "useWay":13000,
                "price":201000,
                "stars":"products/carsImage/stars.png",
                "description":"Nunc facilisis sagittis ullamcorper. Proin lectulputate"},

            {id:5,
                "year":2001,
                "iconYear":"products/carsImage/iconyear.png",
                "make":"BLUE BIRD",
                "model":"SHL TC2000",
                "image":"products/carsImage/BLUEBIRDSHLTC2000.jpg",
                "condition":"use car",
                "body":"compact",

                "transmission":"Automatic",

                "useWay":13000,
                "price":201000,
                "stars":"products/carsImage/stars.png",
                "description":"Nunc facilisis sagittis ullamcorper. Proin lectulputate"}
        ];

    res.send(responseBody);
})


    var tours =
        [

            {id:1,
                "year":2001,
                "iconYear":"cars/carsImage/iconyear.png",
                "make":"Mercedes","model":"Maybach S560",
                "image":"CAR LISTING/carsImage/image.jpg",
                "condition":"use car",
                "body":"compact",
                "icontransmission":"CAR LISTING/carsImage/icontransmission.png",
                "transmission":"Automatic",
                "iconuseWay":"CAR LISTING/carsImage/iconuseWay.png",
                "useWay":13000,
                "price":240500,
                "stars":"CAR LISTING/carsImage/stars.png",
                "description":"LAMBORJINI"},

            {id:2,
                "year":2001,
                "iconYear":"CAR LISTING/carsImage/iconyear.png",
                "make":"Bugatti",
                "model":"Chiron",
                "image":"CAR LISTING/carsImage/in.jpg",
                "icontransmission":"cars/carsImage/icontransmission.png",
                "condition":"use car",
                "body":"compact",
                "transmission":"Automatic",
                "iconuseWay":"CAR LISTING/carsImage/iconuseWay.png",
                "useWay":14000,
                "price":1400000,
                "stars":"CAR LISTING/carsImage/stars.png",
                "description":"INFINITY"},

            {id:3,
                "year":2001,
                "iconYear":"CAR LISTING/carsImage/iconyear.png",
                "make":"AUDI",
                "model":"A8 QUATTRO",
                "image":"CAR LISTING/carsImage/bm.jpg",
                "condition":"use car",
                "body":"compact",

                "transmission":"Automatic",

                "useWay":13000,
                "price":201000,
                "stars":"CAR LISTING/carsImage/stars.png",
                "description":"BMW"},

            {id:4,
                "year":2001,
                "iconYear":"CAR LISTING/carsImage/iconyear.png",
                "make":"BLUE BIRD",
                "model":"ALL AMERICAN",
                "image":"CAR LISTING/carsImage/imag.jpg",
                "condition":"use car",
                "body":"compact",
                "transmission":"Automatic",

                "useWay":13000,
                "price":201000,
                "stars":"CAR LISTING/carsImage/stars.png",
                "description":"BlueBird"},

            {id:5,
                "year":2001,
                "iconYear":"CAR LISTING/carsImage/iconyear.png",
                "make":"BLUE BIRD",
                "model":"SHL TC2000",
                "image":"CAR LISTING/carsImage/images.jpg",
                "condition":"use car",
                "body":"compact",

                "transmission":"Automatic",

                "useWay":13000,
                "price":201000,
                "stars":"CAR LISTING/carsImage/stars.png",
                "description":"Ford Mustang"}

        ];

app.get('/tours/:id?', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    responsetours = req.params.id !== undefined ?
        tours.filter(function(obj)   {return obj.id== req.params.id} )
        : tours;
    res.json(responsetours );
    console.log(responsetours);
});




// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
})

var server = app.listen(8080, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

/*
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 8080);
// custom 404 page

var tours = [
    {id:1,
        "year":2001,
        "iconYear":"products/carsImage/iconyear.png",
        "make":"Mercedes","model":"Maybach S560",
        "image":"products/carsImage/mercedesmaybachS560.jpg",
        "condition":"use car",
        "body":"compact",
        "icontransmission":"products/carsImage/icontransmission.png",
        "transmission":"Automatic",
        "iconuseWay":"products/carsImage/iconuseWay.png",
        "useWay":13000,
        "price":240500,
        "stars":"products/carsImage/stars.png",
        "description":"Nunc facilisis sagittis ullamcorper. Proin lectulputate"},

    {id:2,
        "year":2001,
        "iconYear":"products/carsImage/iconyear.png",
        "make":"Bugatti",
        "model":"Chiron",
        "image":"products/carsImage/BugattiChiron.jpg",
        "icontransmission":"products/carsImage/icontransmission.png",
        "condition":"use car",
        "body":"cupe",
        "transmission":"Automatic",
        "iconuseWay":"products/carsImage/iconuseWay.png",
        "useWay":14000,
        "price":1400000,
        "stars":"products/carsImage/stars.png",
        "description":"Nunc facilisis sagittis ullamcorper. Proin lectulputate"},

    {id:3,
        "year":2001,
        "iconYear":"products/carsImage/iconyear.png",
        "make":"AUDI",
        "model":"A8 QUATTRO",
        "image":"products/carsImage/Audi A8Quattro.jpg",
        "condition":"use car",
        "body":"compact",

        "transmission":"Automatic",

        "useWay":13000,
        "price":201000,
        "stars":"products/carsImage/stars.png",
        "description":"Nunc facilisis sagittis ullamcorper. Proin lectulputate"},

    {id:4,
        "year":2001,
        "iconYear":"products/carsImage/iconyear.png",
        "make":"BLUE BIRD",
        "model":"ALL AMERICAN",
        "image":"products/carsImage/BlueBirdAllAmerica.jpg",
        "condition":"use car",
        "body":"compact",
        "transmission":"Automatic",

        "useWay":13000,
        "price":201000,
        "stars":"products/carsImage/stars.png",
        "description":"Nunc facilisis sagittis ullamcorper. Proin lectulputate"},

    {id:5,
        "year":2001,
        "iconYear":"products/carsImage/iconyear.png",
        "make":"BLUE BIRD",
        "model":"SHL TC2000",
        "image":"products/carsImage/BLUEBIRDSHLTC2000.jpg",
        "condition":"use car",
        "body":"compact",

        "transmission":"Automatic",

        "useWay":13000,
        "price":201000,
        "stars":"products/carsImage/stars.png",
        "description":"Nunc facilisis sagittis ullamcorper. Proin lectulputate"}
];



app.get('/toursall', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(tours);
});


app.get('/tours/:id?', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    responsetours = req.params.id !== undefined ?
        tours.filter(     function(obj)   {return obj.id== req.params.id} )
        : tours;
    res.json(responsetours );
    console.log(responsetours);
});


app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});
// custom 500 page
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});
app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.' );
});
*/