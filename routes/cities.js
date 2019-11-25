const cityModel = require('../model/cityModel')
const express = require('express')

const router = express.Router()
                            // tester route // 
/* router.get('/test', (req, res) => { res.send({ msg: 'Cities test route.' })
})
module.exports = router; */
                           //get all cities//

router.get('/all',
    (req, res) => {
        cityModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });

    


     // Post new city //
 router.route('/add').post((req, res)=>{
     const cityname = req.body.cityname; 
     const country = reg.body.country;
     const img = reg.body.image;
     const newcity = new cityModel({cityname,country,img});
     newcity.save()
     .then(()=> res.json("City Added"))
     .catch(err => console.log(err))
 })
 
module.exports =  router;