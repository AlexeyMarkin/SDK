import TransactionManager from '../components/transaction-manager/transaction-manager.js'
import SDK from '../network/SDK.js'
export default class Application {
	constructor() {
		TransactionManager.render()
		Application.init()
	}
	static init() {
		const form = document.querySelector('form')
		form.addEventListener('submit', (event) => {
			event.preventDefault()
			const data = new FormData(form)
			const to = data.get('to')
			const from = data.get('from')
			const amount = data.get('amount')
			SDK.createTransaction(to, from, amount).then(() =>
				TransactionManager.render()
			)
		})
	}
}
