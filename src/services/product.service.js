import { utilService } from './util.service.js'

export const productService = {
	getProducts,
	increasAmount,
}

//DONE : Addin imgs to every product and write 6 producte with names REAL price !

const products = require('../data/product.json')

function increasAmount(productId, diff = 0) {
	console.log(diff)
	const product = products.find((product) => product._id === productId)
	product.amount = product.amount + diff
	if (product.amount < 0) product.amount = 0
	// if (diff) {
	// 	product.amount++
	// } else {
	// 	if (product.amount) {
	// 		product.amount = 0
	// 	} else {
	// 		product.amount - diff
	// 	}
	//
	return product
}

function getProducts() {
	// console.log(products)
	return products
}
