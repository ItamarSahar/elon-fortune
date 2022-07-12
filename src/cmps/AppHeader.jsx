import elon from '../assets/imgs/elon.jpg'

export function AppHeader() {
	return (
		<header>
			<img src={elon} alt="elon-musk" />
			<h1>Spend Elon Musk's Fortune!</h1>
		</header>
	)
}
