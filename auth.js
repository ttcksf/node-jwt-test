const jwt = require("jsonwebtoken");
const config = require("./config");

function auth(req, res, next) {
  try {
    //setting token
    const token = req.headers.token;

    const decoded = jwt.verify(token, config.jwt.secret);
    //デコードされた内容をログに出力
    console.log(decoded);
    next();
  } catch (err) {
    return res.send(401).json({
      msg: "Invalid",
    });
  }
}

module.exports = auth;
