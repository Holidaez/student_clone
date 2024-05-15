const express = require('express')
const router = express.Router();
const { Op, json, where } = require('sequelize');
const bcrypt = require('bcryptjs');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

router.post('/', validateSignup,
async (req, res) => {
  const { email, password, username, firstName, lastName } = req.body;
  const hashedPassword = bcrypt.hashSync(password);
  if(User.findOne({where:{email:req.body.email}}).length >= 1){
    return res.json({
      "message": "User already exists",
      "errors": {
        "email": "User with that email already exists"
      }
    })

  }
  else if(User.findOne({where:{username:req.body.username}}) >= 1){
    return res.json({
      "message": "User already exists",
      "errors": {
        "username": "User with that username already exists"
      }
    })

  }
  const user = await User.create({ email, username, firstName, lastName, hashedPassword });

  const safeUser = {
    id: user.id,
    email: user.email,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName
  };

  await setTokenCookie(res, safeUser);

  return res.json({
    user: safeUser
  });
});


  router.get('/user-info',requireAuth,async (req,res) =>{

    if(req.user){
      const user = await User.findByPk(req.user.id)
      user.email = req.user.email
      res.json(user)
    }

    else{
      res.json({user:null})
    }
  })




module.exports = router;
