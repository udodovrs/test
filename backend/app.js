require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { addProductsToDB, getProductsFromDB } = require("./conrollers/product");

const port = 3001;

const app = express();
app.use(express.static("../my-app/build"));
app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const products = await getProductsFromDB();
    res.send({ error: null, data: products });
  } catch (e) {
    res.send({ error: e.message || "Unknown error" });
  }
});

mongoose.connect(process.env.DB_CONECTION_STRING).then(async () => {
  app.listen(port, () => {
    console.log(`Server was started on port ${port}`);
  });

 await addProductsToDB();
});
