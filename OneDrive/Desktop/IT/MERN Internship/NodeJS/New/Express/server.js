const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/', function(request, response) {
    console.log(request.log)
    response.status(200).json({
        "status":"Home"
    })
})
app.get('/java', function(request, response) {
    // response.status(200).send('About Java...')
    response.status(200).json({
        "about":"java"
    })
})

app.post('/validate-user',function(request,response){
    if(request.body.username==='abcd' && request.body.password === '1234'){
        response.status(200).json({
            "status" : "success",
            "message" : "valid user"
        })
    }else{
        response.status(401).json({
            "status" : "failure",
            "message" : "invalid user"
        })
    }
})

app.listen(2000, function() {
    console.log('Listening on port 2000...')
})
