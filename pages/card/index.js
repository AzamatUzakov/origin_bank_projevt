import Card3d from "card3d";
import axios from 'axios'
import {
	createTransactionBox
} from "/modules/ui";
import {
	getData
} from "/modules/http"
import {
	getRandomColor,
} from "/modules/helpers"

const item = document.querySelector(".item")
const transactions_box = document.querySelector("table")
const cart_place = document.getElementById("multiChart");
const convertBtn = document.getElementById("convert");
const convertView = document.querySelector(".item-convert-balance");


let card_id = location.search.split("=").at(-1)
let card = null
let monthNames = []
let spendings = []

getData("/cards?id=" + card_id)
	.then(res => {
		[user] = res.data
		card = user
		document.querySelector(".item-name").textContent = user.name
		document.querySelector(".item-currency").textContent = user.currency
		document.querySelector(".item-date").textContent = user.date
		document.querySelector(".item-balance").textContent = user.balance
	})


getData("/transactions?wallet_id=" + card_id)
	.then(res => {
		createTransactionBox(res.data, transactions_box)
		res.data.forEach(el => {
			monthNames.push(el.date)
			spendings.push(el.total)
		})
		createMultiChart(monthNames, spendings, cart_place);
	})


convertBtn.onclick = async () => {
	try {
		const res = await axios.get(`https://api.apilayer.com/fixer/convert?to=UZS&from=${card.currency}&amount=${card.balance}`, {
			headers: {
				apiKey: import.meta.env.VITE_API_KEY
			}
		})
		console.log(res.data.success);
		if (res.data.success) {
			if (res.status === 200 || res.status === 201) {
				convertView.innerHTML = Number(res.data.result).toLocaleString('uz-UZ')
			}
		} else {
			convertView.innerHTML = res?.data?.error?.info
		}
	} catch (e) {
		console.log(e);
	}

}



function createMultiChart(labels, data, place) {
	const ctx = place.getContext('2d');

	new Chart(ctx, {
		type: 'line',
		data: {
			labels: labels,
			datasets: [{
				label: "Spendings",
				backgroundColor: "blue",
				borderColor: "blue",
				borderWidth: 1.5,
				data: data,
			}],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
				}
			},
			elements: {
				line: {
					tension: 0.4,
				}
			}
		}
	});
}
item.style.background = `linear-gradient(66deg, ${getRandomColor()} 0%, ${getRandomColor()} 100%)`