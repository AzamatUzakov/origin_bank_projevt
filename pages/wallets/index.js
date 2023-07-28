import {
	reloadCards,
} from "/modules/ui";
import {
	getData
} from "/modules/http"

let cardBox = document.querySelector('.items-box')
let userData = JSON.parse(localStorage.getItem("user"))
document.querySelector("#user-email").textContent = userData.email

getData("/cards?user_id=" + userData.id)
	.then(res => {
		reloadCards(res.data, cardBox)
		const add_card = document.createElement("div")
		const img = document.createElement("img")
		const add_card_title = document.createElement("p")

		add_card.classList.add("card", "add-new-card")
		img.classList.add("add-card__img")

		add_card_title.textContent = "Добавить карту"
		img.src = "/public/add-icon.svg"
		add_card.onclick = () => location.assign("/pages/create-card/")

		add_card.append(add_card_title, img)
		cardBox.append(add_card)
	})