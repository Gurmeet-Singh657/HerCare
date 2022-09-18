var express = require('express');
var router = express.Router();

const safetyTipController = require('../controllers/safetytip.controller');
const incidentController = require('../controllers/incident.controller');
router.post('/safetytip', safetyTipController.create);     //create safetytip
router.get("/safetytip", safetyTipController.get);         //get safetytip
router.post("/incident", incidentController.create);       //create incident
router.get("/incident", incidentController.get);           //get incident
module.exports = router;