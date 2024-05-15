const express = require('express')
const router = express.Router();
const { Op, json, where } = require('sequelize');
const bcrypt = require('bcryptjs');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


router.get('/',async(req,res) =>{

    let spots = await Spot.findAll()
    console.log(spots)
    res.json({Spots:spots})

})

router.get('/current',requireAuth,async (req,res) =>{
    // console.log(req)
    let spots = await Spot.findAll({where:{ownerId:req.user.id}})

    res.json({Spots:spots})

})

router.get('/:spotId',requireAuth,async (req,res) =>{
    // console.log(req)
    let spots = await Spot.findOne({where:{id:req.params.spotId}})
    if (spots.length < 1){
        return res.json({
            "message": "Spot couldn't be found"
          })
    }
    res.json({Spots:spots})

})


router.post('/',
async (req, res) => {
  const { ownerId, address, city, state, country, lat, lng, name, description, price, previewImage  } = req.body;

  if(Spot.findOne({where:{address:req.body.address}}).length >= 1){
    return res.json({
      "message": "User already exists",
      "errors": {
        "email": "User with that email already exists"
      }
    })

  }

  const newSpot = await Spot.create({ ownerId, address, city, state, country, lat, lng, name, description, price, previewImage });


  return res.json({
    spot: newSpot
  });
});















module.exports = router;
