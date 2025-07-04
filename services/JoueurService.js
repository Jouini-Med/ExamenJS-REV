const express = require('express');
const addjoueur = require('../controllers/JoueurController');
const router = express.Router();
router.post( '/newjoueur',addjoueur);










module.exports = router;