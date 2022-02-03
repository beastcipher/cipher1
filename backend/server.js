const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;
app.use(cors());

//http://127.0.0.1:3001/check_answer?answer=answer%20here
app.get("/check_answer1", (request, response) => {
    if(request.query.answer === "262926"){
        response.status(200);
        response.sendFile("./riddle2/riddle2.html", { root: '.'});
    }
    else {
        response.sendFile("./wrong.html", { root: '.'})
    }
});

app.get("/check_answer2", (request, response) => {
    if(request.query.answer === "BEAST"){
        response.status(200);
        response.sendFile("./riddle3/riddle3.html", { root: '.'});
    } 
    else {
        response.sendFile("./wrong.html", { root: '.'})
    }
});

app.get("/check_answer3", (request, response) => {
    if(request.query.answer === "AFRICA") {
        response.status(200);
        response.sendFile("./riddle4/riddle4.html", { root: '.'});
    }
    else {
        response.sendFile("./wrong.html", { root: '.'})
    }
});

app.get("/check_answer4", (request, response) => {
    if(request.query.answer === "FIRE") {
        response.status(200);
        response.send("Well done! Your code is 4869.")
    }
    else {
        response.sendFile("./wrong.html", { root: '.'})
    }
});



app.listen(port, () => {
    console.log('Listening on port: ' + port)
});