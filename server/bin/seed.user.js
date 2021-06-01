const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const UserModel = require("../models/User");

const users = [
{
    firstName: "Bob",
    lastName: "Sapp",
    email: "bob@sapp.com",
    password: "bobsapp",
    phoneNumber: 11223344,
  },
  {
    firstName: "Gas",
    lastName: "Ton",
    email: "gas@ton.com",
    password: "gaston",
    phoneNumber: 11223344,
  },
  {
    firstName: "Quen",
    lastName: "Tin",
    email: "qq@tt.com",
    password: "qqtt",
    phoneNumber: 11223344,
  }
];

UserModel.create(users)
  .then((userDocuments) => {
    console.log(userDocuments);
  })
  .catch((error) => {
    console.log(error);
  });



