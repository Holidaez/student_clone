// backend/routes/index.js
const express = require('express');
const router = express.Router();
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
router.use(cookieParser());
const apiRouter = require('./api');


router.use('/api', apiRouter);

router.use(
  csurf({
    cookie: true
  })
);

router.get("/api/csrf/restore", (req, res) => {
  const csrfToken = req.csrfToken();
  res.cookie("XSRF-TOKEN", csrfToken);
  res.status(200).json({
    'XSRF-Token': csrfToken
  });
});

module.exports = router;
