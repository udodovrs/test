const { createGraphQLClient } = require("@shopify/graphql-client");

const URL_SHOP =
  "https://cpb-new-developer.myshopify.com/admin/api/2024-01/graphql.json";
const TOKEN_SHOP = process.env.TOKEN_SHOP;

const client = createGraphQLClient({ 
  url: URL_SHOP,
  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Access-Token": TOKEN_SHOP,
  },
  customFetchApi: fetch,
});

const query = `
  {
    products(first:3) {
      edges {
        node {
          id
          bodyHtml          
          images (first:1) {
            nodes {
              src
            }
          }
        }
      }
    }
  }
`;

const getProductsFromShopify = async () => {
  const { data, errors } = await client.request(query);  
  return { data, errors};  
};

module.exports = getProductsFromShopify;

