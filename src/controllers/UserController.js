const User = require("../models/User")
module.exports = {
  async store(req, res) {
    const email = await User.findOne(req.body)

    if (email) {
      return res.json(email)
    }

    const user = await User.create(req.body)

    return res.json(user)
  }
}
