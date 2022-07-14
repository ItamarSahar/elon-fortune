//TODO: Add Functionality to the But and Sell Buttons !
import { utilService } from '../services/util.service.js'
import { productService } from '../services/product.service.js'
import { useEffect, useState } from 'react'
export function ProductPreview({ product, getProducts }) {
	const [currProduct, setCurrProduct] = useState(product)

	useEffect(() => {
		setCurrProduct(product)
	}, [product])

	const changeAmount = (diff) => {
		const newProduct = productService.increasAmount(currProduct._id, diff)
		// console.log(newProduct)
		setCurrProduct(newProduct)
		getProducts()
		// console.log('currProduct', currProduct.amount)
	}
	return (
		<li className="product-preview">
			<img src={currProduct.img} alt="" />
			<h1>{currProduct.name}</h1>
			<h1>{utilService.currencyFormat(currProduct.price)}</h1>
			<div className="actions">
				<button onClick={() => changeAmount(-1)} className="sell">
					Sell
				</button>
				<p>{currProduct.amount}</p>
				<button onClick={() => changeAmount(1)} className="buy">
					Buy
				</button>
			</div>
		</li>
	)
}
