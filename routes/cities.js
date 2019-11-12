const cityModel = require('../model/cityModel')
const express = require('express')

const router = express.Router()

/* router.get('/test', (req, res) => { res.send({ msg: 'Cities test route.' })
})
module.exports = router; */ 
/*get all cities*/
router.get('/all',
    (req, res) => {
        cityModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });

module.exports =  router;