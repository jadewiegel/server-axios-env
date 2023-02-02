const axios = require('axios');
const express = require ('express');
const router = express.Router();

require('dotenv').config();

router.get('/', (req,res) => {
    console.log('inside get route');
    //request to 3rd party api
    axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}&limit=2&rating=pg`)
    .then((response) => {
        res.send(response.data);
    }).catch( err => {
        console.log('error getting giphys', err)
        res.send(500);
    })
    });

module.exports = router;