const userSchema = require('../models/user.model');

module.exports = {
  createAccount: async function (req, res) {
    try {
      const data = req.body;
      const user = new userSchema(data);
      await user.save();
      res.json({
        success: true,
        message: 'user created successfully!',
        data: user,
      });
    } catch (ex) {
      res.json({ success: false, message: ex.message, data: null });
    }
  },
  signIn: function (req, res) {
    // sign in a user
  },
};
