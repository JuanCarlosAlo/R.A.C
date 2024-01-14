const mongoose = require("mongoose");

const UsersScheme = mongoose.Schema(
  {
    _id: String,
    email: String,
    userName: String,
    type: String,
    history: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cars",
      },
    ],

  },
  {
    collection: "users",
  }
);

const UserModel = mongoose.model("users", UsersScheme);

module.exports = UserModel;
