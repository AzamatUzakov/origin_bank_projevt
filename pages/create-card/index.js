import { v4 as uuidv4 } from 'uuid';
import { getSymbols, postData } from '../../modules/http';

const form = document.forms.create_card
const select = document.querySelector('datalist')
let userData = JSON.parse(localStorage.getItem("user"))
let symbols = []

getSymbols()
	.then(res => {
		symbols = Object.keys(res)
		for(let key in res) {
			let opt = new Option(res[key], key)
			select.append(opt)
		}
	})

form.onsubmit = (e) => {
	e.preventDefault()

	let card = {
		"id": uuidv4(),
		"user_id": userData.id,
		"date": new Date().toLocaleDateString('en-CA'),
	}
	let fm = new FormData(form)
	fm.forEach((value, key) => {
		card[key] = value
	})

	if(!symbols.includes(card.currency)) {
		alert('There are no such a currency')
		return
	}

	postData("/cards", card)
		.then(res => {
			if (res.status === 200 || res.status === 201) {
				location.assign('/pages/wallets/')
			}
		})

	form.reset()
}


// function getDate() {
// 	const currentDate = new Date()
// 	const year = currentDate.getFullYear();
// 	const month = addZero(currentDate.getMonth() + 1);
// 	const day = addZero(currentDate.getDate());
// 	return `${year}-${month}-${day}`;
// }

// function addZero(number) {
// 	return number < 10 ? "0" + number : number;
// }



