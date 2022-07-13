import { useEffect, useState } from 'react'
import { productService } from '../services/product.service.js'
import { ProductPreview } from './ProductPreview.jsx'
export function ProductList() {
	const [totalMoney, setTotalMoney] = useState(0)
	const [spendMoney, setSpendMoney] = useState('You havent Spent yet !')
	const [products, setProducts] = useState([])

	useEffect(() => {
		setTotalMoney(217000000000)
		setProducts(productService.getProducts())
	}, [])

	if (products.length === 0) return <h1>loading...</h1>
	return (
		<main>
			<div className="total">
				<span> Remaining:{totalMoney}</span>
				<span>{spendMoney}</span>
			</div>
			<ul className="products-list">
				{products.map((product) => (
					<ProductPreview product={product} />
				))}
			</ul>
		</main>
	)
}
