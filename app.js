// api/app.js

const express = require('express');
const app = express()
const { auth } = require('express-oauth2-jwt-bearer');



const jwtCheck = auth({
  audience: 'http://localhost:5000',
  issuerBaseURL: 'https://dev-6ofio36uw33k76yq.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});

// enforce on all endpoints
// app.use(jwtCheck);




app.get('/public', (req, res) => {
    res.json ({
        type: "public"
    })
})

app.get('/private', jwtCheck, (req, res) => {
    res.json ({
        type: "private"
    })
})

app.listen(5000)