const express = require("express");
const router = express.Router();
const buyerController = require("../controllers/buyerController");

router.get("/products", buyerController.getAllProducts);
router.post("/:buyerId/product/:productId/buy", buyerController.buyProduct);

module.exports = router;
