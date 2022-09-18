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