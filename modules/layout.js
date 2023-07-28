
let userData = JSON.parse(localStorage.getItem("user"))
createModal(document.querySelector("header"))
let backgroun_modal = document.querySelector('.backgroun_modal')
let yes_btn = document.querySelector('.yes')
let no_btn = document.querySelector('.noo')


header(document.querySelector('header'))
function header(place) {
    let headers = document.createElement('div')
    let my_action = document.createElement('div')
    let email = document.createElement('div')
    let home_a = document.createElement('a')
    let wallet_a = document.createElement('a')
    let transactions_a = document.createElement('a')
    let email_a = document.createElement('a')
    let icon = document.createElement('img')

    headers.classList.add('container', "header-items")
    my_action.classList.add('my_action')
    email.classList.add('email')
    home_a.classList.add('a')
    wallet_a.classList.add('a')
    transactions_a.classList.add('a')
    email_a.classList.add('a')
    icon.classList.add('logout')

    home_a.href = '/'
    wallet_a.href = '/pages/wallets/'
    transactions_a.href = '/pages/transactions/'
    email_a.href = '/'


    home_a.innerHTML = 'Главная'
    wallet_a.innerHTML = 'Мои кошельки'
    transactions_a.innerHTML = 'Мои транзакции'
    email_a.innerHTML = userData.email

    icon.src = '/public/exit.png'



    headers.append(my_action, email)
    my_action.append(home_a, wallet_a, transactions_a)
    email.append(email_a, icon)
    place.append(headers)

    icon.onclick = () => {
        backgroun_modal.style.display = 'block'
        setTimeout(() => {
            backgroun_modal.style.scale = 1
            backgroun_modal.style.opacity = 1
        }, 1);
    }

    no_btn.onclick = () => {
        backgroun_modal.style.display = 'none'
        backgroun_modal.style.scale = 0
        backgroun_modal.style.opacity = 0
    }

    yes_btn.onclick = () => {
        localStorage.removeItem('user')
        location.reload()
    }

}



function createModal(place) {
    let background = document.createElement("div")
    let modal = document.createElement("div")
    let h1 = document.createElement("h1")
    let flex = document.createElement("div")
    let confirm = document.createElement("button")
    let cancel = document.createElement("button")

    h1.textContent = "Хотите выйти"
    confirm.textContent = "Да"
    cancel.textContent = "Нет"

    background.classList.add("backgroun_modal")
    modal.classList.add("modal")
    flex.classList.add("flex_button")
    confirm.classList.add("yes", "op")
    cancel.classList.add("noo", "op")

    background.append(modal)
    modal.append(h1, flex)
    flex.append(confirm, cancel)

    place.append(background)
}
