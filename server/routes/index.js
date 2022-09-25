var express = require('express');
var router = express.Router();

const safetyTipController = require('../controllers/safetytip.controller.js');
const incidentController = require('../controllers/incident.controller.js');
router.post('/safetytip', safetyTipController.create);     //create safetytip
router.get("/safetytip", safetyTipController.get);         //get safetytip
router.post("/incident", incidentController.create);       //create incident
router.get("/incident", incidentController.get);           //get incident        
router.get("/getAllIncidents", incidentController.getAllIncidents);     // get all incidents
module.exports = router;