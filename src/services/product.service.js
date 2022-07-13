import { utilService } from './util.service.js'

export const productService = {
	getProducts,
}

//TODO : Addin imgs to every product and write 6 producte with names REAL price !
const products = [
	{
		_id: utilService.makeId(),
		name: 'product',
		price: 100,
	},
	{
		_id: utilService.makeId(),
		name: 'product',
		price: 100,
	},
	{
		_id: utilService.makeId(),
		name: 'product',
		price: 100,
	},
	{
		_id: utilService.makeId(),
		name: 'product',
		price: 100,
	},
	{
		_id: utilService.makeId(),
		name: 'product',
		price: 100,
	},
	{
		_id: utilService.makeId(),
		name: 'product',
		price: 100,
	},
	{
		_id: utilService.makeId(),
		name: 'product',
		price: 100,
	},
	{
		_id: utilService.makeId(),
		name: 'product',
		price: 100,
	},
	{
		_id: utilService.makeId(),
		name: 'product',
		price: 100,
	},
	{
		_id: utilService.makeId(),
		name: 'product',
		price: 100,
	},
	{
		_id: utilService.makeId(),
		name: 'product',
		price: 100,
	},
	{
		_id: utilService.makeId(),
		name: 'product',
		price: 100,
	},
]

function getProducts() {
	return products
}
