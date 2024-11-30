const express = require('express');

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    //kidneys = [1, 2]
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send('You have '+ kidneyLength + ' kidneys');
    // res.status(403).json({msg:  "Invalid"})
}),

app.use(function(err, req, res, next) {
    res.json({msg: "Sorry"});    
})



app.listen(3000);
console.log("app listening on port 3000")
