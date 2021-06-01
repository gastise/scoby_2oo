const express = require("express");
const router = express.Router();
const UserModel = require("../models/User");

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/me", (req, res, next) => {
  UserModel.find(req.session.currentUser)
    .then((userDocuments) => {
      // res.render("yourview.hbs", { guitars: guitarDocuments }); // Module 2
      res.status(200).json(userDocuments);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/me/items", (req, res, next) => {
  UserModel.find(...)
    .then((userDocuments) => {
      // res.render("yourview.hbs", { guitars: guitarDocuments }); // Module 2
      res.status(200).json(userDocuments);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.patch("/me", (req, res, next) => {
  console.log(req.session.currentUser);
  UserModel.findByIdAndUpdate(req.session.currentUser, { new: true })
    .then((userDocument) => {
      res.status(200).json(userDocument);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});


module.exports = router;
