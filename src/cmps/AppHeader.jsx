import elon from '../assets/imgs/elon.jpg'

export function AppHeader() {
	return (
		<header>
			<img src={elon} alt="elon-musk" />
			<h1>Spend Elon Musk's Fortune!</h1>
			<p>If Elon cashed out all of his stocks & assets today he would have</p>
			<p>approximately $217,000,000,000 (US Dollars) in his bank account.</p>
			<p>
				What would you <strong>spend it </strong> on?
			</p>
			<p>Have your receipt at the end!</p>
		</header>
	)
}
