import SDK from '../../network/SDK.js'
export default class TransactionManager {
	static container = document.querySelector('.list-all-transactions')

	static async render() {
		const data = await SDK.getAllTransactions()
		TransactionManager.container.innerHTML = ''
		data.forEach((item) => {
			TransactionManager.container.append(
				TransactionManager.renderTransaction(item)
			)
		})
	}

	static renderTransaction(transaction) {
		const container = document.createElement('div')
		const deleteButton = document.createElement('button')
		deleteButton.innerText = 'Delete'
		const oneTransaction = document.createElement('p')
		deleteButton.addEventListener('click', (event) => {
			container.remove()
			SDK.deleteTransaction(transaction.id).then(() =>
				TransactionManager.render()
			)
		})
		container.append(oneTransaction, deleteButton)
		oneTransaction.innerText = `to: ${transaction.to} from: ${transaction.from} amount: ${transaction.amount}`
		return container
	}
}
