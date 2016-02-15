
var express = require('express');
var app = express();

var fibonacci = function(n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};

var reverse = function(word) {
    return word.split("").reverse().join("")
}

var triangle = function(a,b,c) {
    var side1 = parseInt(a);
    var side2 = parseInt(b);
    var side3 = parseInt(c);
    
    //Check if they make a triangle
    if ((side1>0 && side2>0 && side3>0 ) && (side1+side2>side3 && side1+side3>side2 && side2+side3>side1))
    {
        // if all sides are equal then Equilateral
        if (side1 == side2 && side2 == side3) {
          return "Equilateral";
        }
        //if any 2 sides are equal then Isosceles
        else if (side1 == side2 || side2 == side3 || side3 == side1) {
          return "Isosceles";
        }
        //else Scalene
        else {
          return "Scalene"
        }
    }
    else {
      return "Error";
    }
}

app.get('/whatisyourtoken', function (req, res) {
       res.end( "305019cd-c4c7-44cf-9289-2d2b5e5f6184" );
})

app.get('/fibonaccinumber/:a', function (req,res){
    var input = req.params.a;
    var output = fibonacci(input);
    res.end(output.toString());
})

app.get('/reversewords/:a', function (req,res){
    var input = req.params.a;
    var output = reverse(input);
    res.end(output.toString());
})

app.get('/whatshapeisthis/:a/:b/:c', function (req,res){
    var a = req.params.a;
    var b = req.params.b;
    var c = req.params.c;
    var output = triangle(a,b,c);
    res.end(output);
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
