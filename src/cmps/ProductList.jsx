import { useEffect, useState } from 'react'
import { productService } from '../services/product.service.js'
import { ProductPreview } from './ProductPreview.jsx'
import { utilService } from '../services/util.service.js'

export function ProductList() {
	const [totalMoney, setTotalMoney] = useState(0)
	const [spendMoney, setSpendMoney] = useState('You havent Spent yet !')
	const [products, setProducts] = useState([])

	useEffect(() => {
		setTotalMoney(217000000000)
		getProducts()
	}, [])

	const getProducts = () => {
		// console.log('called!')
		setProducts(productService.getProducts())
	}
	console.log(products)
	if (products.length === 0) return <h1>loading...</h1>
	return (
		<main>
			<div className="total">
				<span> Remaining: {utilService.currencyFormat(totalMoney)}</span>
				<span>{spendMoney}</span>
			</div>
			<ul className="products-list">
				{products.map((product) => (
					<ProductPreview
						product={product}
						key={product._id}
						getProducts={getProducts}
					/>
				))}
			</ul>
		</main>
	)
}
