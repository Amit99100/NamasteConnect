// // Information exchange: JWTs are a good way of securely transmitting 
// information between parties because they can be signed, which means you 
// can be certain that the senders are who they say they are. Additionally, 
// the structure of a JWT allows 
// you to verify that the content hasn't been tampered with.
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const jwt = require("jsonwebtoken");

const generateToken = (id) => {

  return jwt.sign({ id }, process.env.JWT_SECRET, {
    // in how much time token expires , here i made 30 days . 
    expiresIn: "5d",
  });
};

module.exports = generateToken;
