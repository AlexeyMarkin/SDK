export default class SDK {
	static async getAllTransactions() {
		const response = await fetch(
			'https://acb-api.algoritmika.org/api/transaction/'
		)
		return await response.json()
	}
	static async deleteTransaction(id) {
		return await fetch(
			`https://acb-api.algoritmika.org/api/transaction/${id}`,
			{
				method: 'DELETE',
			}
		)
	}
	static async createTransaction(to, from, amount) {
		const transaction = {
			to: to,
			from: from,
			amount: amount,
		}
		console.log(transaction)
		const response = await fetch(
			'https://acb-api.algoritmika.org/api/transaction/',
			{
				method: 'POST',
				body: JSON.stringify(transaction),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		).catch((e) => console.log(e))
		return await response.json()
	}
}
