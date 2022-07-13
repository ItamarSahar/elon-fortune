//TODO: Add Functionality to the But and Sell Buttons !

export function ProductPreview({ product }) {
	return (
		<li className="product-preview" key={product._id}>
			<h1>{product.name}</h1>
			<h3>{product.price}</h3>
			<button className="sell">Sell</button>
			<button className="buy">Buy</button>
		</li>
	)
}
