const { to, ReE, ReS } = require("../services/util.service");
const { Incident } = require("../models");
const logger = require("../lib/logging");

const create = async function (req, res) {
  res.setHeader("Content-Type", "application/json");
  // const body = JSON.parse(JSON.stringify(req.body));
  const body = Object.assign({}, req.body)
  if (!body.title) {
    logger.error("incident controller - create : Incident Title cannot be empty");
    return ReE(res, new Error("Please enter a valid Incident Title."), 422);
  }

  [err, incident] = await to(Incident.create(body));
  if (err) {
    logger.error(
      "Incident Controller - create : Incident could not be created",
      err
    );
    return ReE(res, err, 422);
  }

  return ReS(
    res,
    { message: "Successfully created new Incident.", incident: incident.toObject() },
    201
  );
};
module.exports.create = create;


const get = async function (req, res) {
  let incident_id, err, incident;
  if (!req.query._id) {
    logger.error("Incident Controller - get : Incident Id is empty");
    return ReE(res, new Error("Incident Id is empty"), 422);
  }

  incident_id = req.query._id;

  [err, incident] = await to(findByPk(incident_id));
  if (err) {
    logger.error("Incident Controller - get : Incident not found", err);
    return ReE(res, err, 422);
  }

  res.setHeader("Content-Type", "application/json");

  return ReS(res, { incident: incident.toObject() });
};
module.exports.get = get;

const findByPk = async function (id) {
  let incident_id, err, incident;
  incident_id = id;

  [err, incident] = await to(Incident.findById(incident_id));

  if (err || !incident) {
    logger.error("Incident Controller - findbypk : Incident not found");
    throw new Error(" not found");
  }
  return incident;
};
module.exports.findIncidentById = findByPk;

const getAllIncidents = async function (req, res) {
  const { typesofassault, showIncidentfrom, timeoftheday } = req.query;
  console.log(req.query);
  console.log(typesofassault);
  const searchjson = {};
  let currenttypeofassault = [
    "Physical Assault",
    "Rape/Sexual Assault",
    "Chain Snatching/Robbery",
    "Domestic Violence",
    "Stalking",
    "Ogling/Facial Expressions/Staring",
    "Taking photos without permission",
    "Indecent Exposure/Masturbation in public",
    "Touching /Groping",
    "Showing Pornography without consent",
    "Commenting/Sexual Invites",
    "Online Harassment",
    "Human Trafficking",
    "Others"
  ];
  // console.log(typesofassault);
  if (typesofassault) {
    // console.log("I am happy");
    typesofassault.slice(1);
    currenttypeofassault = typesofassault.split(",");
    // for (let ele of req.query.typesofassault) {
    //   currenttypeofassault.push(ele);
    // }

    // typesofassault.split(',').(obj => {
    //   currenttypeofassault.push(obj);
    // })
    // req.query.typesofassault.split(',').map(row => { return row });

  }
  // console.log(currenttypeofassault);
  // if (req.query.showIncidentfrom === 'Today')
  //   searchjson[mindate] = new Date(Date.now());
  // else if(req.query.showIncidentfrom==='This Week')
  // searchjson[mindate]=new Date(Date.now()-7);
  let err, incident;
  [err, incident] = await to(Incident.find({ typeOfViolence: { $in: currenttypeofassault } }));
  // console.log(incident);
  if (err) {
    logger.error("Incident Controller - get : Incident not found", err);
    return ReE(res, err, 422);
  }

  res.setHeader("Content-Type", "application/json");

  return ReS(res, incident);
};
module.exports.getAllIncidents = getAllIncidents;