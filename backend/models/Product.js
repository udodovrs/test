const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
		id: {
			type: String,
			unique: true,
		},
		bodyHtml: {
			type: String,		
		},
		images: [
			{
				type: String,				
			},
		],		
	},
	{ timestamps: true }
)

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;