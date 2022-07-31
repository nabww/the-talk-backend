const { Users } = require("../models");

//Add
const addUser = async (req, res) => {
  const { email, phone, message } = req.body;

  Users.create({
    email: email,
    phone: phone,
    message: message,
  })
    .then(() => {
      res.json("User added!");
    })
    .catch((error) => {
      if (error) {
        res.status(400).json({ error: error });
      }
    });
};

module.exports = {
  addUser,
};
