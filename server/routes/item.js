const express = require("express");
const router = express.Router();
const ItemModel = require("../models/Item");


router.get("/", (req, res, next) => {
    ItemModel.find()
      .then((itemDocuments) => {
        // res.render("yourview.hbs", { guitars: guitarDocuments }); // Module 2
        res.status(200).json(itemDocuments);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  });

  router.get("/:id", (req, res, next) => {
    console.log(req.params.id);
    ItemModel.findById(req.params.id)
      .then((itemDocument) => {
        res.status(200).json(itemDocument);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  });

  router.post("/", (req, res, next) => {
    // const newGuitar = { ...req.body };
    // newGuitar.image = "feauhfuaehfueoafaueofa"
    const { name, description, image, category, quantity, address, location, formattedAddress, creator, contact } = req.body;
    if (!name) {
      return res.status(400).json({ message: "No empty fields please !" });
    }
    const newItem = {
      name,
      description,
      image,
      category,
      quantity,
      address,
      location,
      formattedAddress,
      creator,
      contact
    };
    ItemModel.create(newItem)
      .then((itemDocument) => {
        res.status(201).json(itemDocument);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  });

  router.patch("/:id", (req, res, next) => {
    console.log(req.params.id);
    ItemModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((itemDocument) => {
        res.status(200).json(itemDocument);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  });

  router.delete("/:id", (req, res, next) => {
      console.log(req.params.id);
    ItemModel.findByIdAndDelete(req.params.id)
      .then((itemDocument) => {
        // res.status(200).json(guitarDocument);
        res.sendStatus(204);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  });


module.exports = router;
