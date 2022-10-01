const { to, ReE, ReS } = require('../services/util.service');
const { SafetyTip } = require('../models');
const logger = require('../lib/logging');

const create = async function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	const body = req.body;

	if (!body.title) {
		logger.error("SafetyTip controller - create : SafetyTip title cannot be empty");
		return ReE(res, new Error('Please enter a valid SafetyTip title.'), 422);
	}

	[err, safetytip] = await to(SafetyTip.create(body));
	if (err) {
		logger.error("SafetyTip Controller - create : SafetyTip could not be created", err);
		return ReE(res, err, 422);
	}

	return ReS(res, { message: 'Successfully created new SafetyTip.', safetytip: safetytip.toObject() }, 200);

}
module.exports.create = create;


const get = async function (req, res) {
    let safetytip_id, err, safetytip;
    if (!req.query._id) {
      logger.error("SafetyTip Controller - get : SafetyTip Id is empty");
      return ReE(res, new Error("SafetyTip Id is empty"), 422);
    }
  
    safetytip_id = req.query._id;
  
    [err, safetytip] = await to(findByPk(safetytip_id));
    if (err) {
      logger.error("SafetyTip Controller - get : SafetyTip not found", err);
      return ReE(res, err, 422);
    }
  
    res.setHeader("Content-Type", "application/json");
  
    return ReS(res, { safetytip: safetytip.toObject() });
  };
  module.exports.get = get;
  
  const findByPk = async function (id) {
    let safetytip_id, err, safetytip;
    safetytip_id = id;
  
    [err, safetytip] = await to(SafetyTip.findById(safetytip_id));
  
    if (err || !safetytip) {
      logger.error("SafetyTip Controller - findbypk : SafetyTip not found");
      throw new Error(" not found");
    }
    return safetytip;
  };
  module.exports.findSafetyTipById = findByPk;

const getAllSafetyTips = async function (req, res) {
  const { locationsst, showsafetyTipsfrom } = req.query;
  let val = 100 * 365;
  if (showsafetyTipsfrom === "Today") {
    val = 1;
  } else if (showsafetyTipsfrom === "This Week") {
    val = 7;
  } else if (showsafetyTipsfrom === "This Month") {
    val = 31;
  } else if (showsafetyTipsfrom === "This Year") {
    val = 365;
  }
  let err, safetyTips;
  if (locationsst) {
    [err, safetyTips] = await to(
      SafetyTip.find({
        time: {
          $gte: new Date(
            new Date(new Date().getTime() - val * 24 * 60 * 60 * 1000)
          )
        },
        "address.state": locationsst
      })
        .sort({ time: -1 })
    );
  }
  else {
    [err, safetyTips] = await to(
      SafetyTip.find({
        time: {
          $gte: new Date(
            new Date(new Date().getTime() - val * 24 * 60 * 60 * 1000)
          )
        }
      })
        .sort({ time: -1 })
    );
  }
  if (err) {
    logger.error("Safety Tips Controller - get : Safety Tips not found", err);
    return ReE(res, err, 422);
  }

  res.setHeader("Content-Type", "application/json");

  return ReS(res, safetyTips);
};
module.exports.getAllSafetyTips = getAllSafetyTips;