const Product = require("../models/Product");
const getProductsFromShopify = require("../get-products-from-shopify");

const getProductsFromDB = async () => {
  const products = await Product.find();
  return products;
};

const addProductToDB = async (productData) => {
  const newProduct = await Product.create(productData);
  return newProduct;
};

const addProductsToDB = async () => {
  const { data, errors } = await getProductsFromShopify();  

  if (errors) {
    return "Ошибка соединения с магазином Shopify";
  }  
  data.products.edges.forEach(async ({ node }) => {    
    try {
      await addProductToDB({
        id: node.id,
        bodyHtml: node.bodyHtml,
        images: [node.images.nodes[0].src],
      });
    } catch (e) {   

    }
  });
};

module.exports = {
  getProductsFromDB,  
  addProductsToDB,
};
