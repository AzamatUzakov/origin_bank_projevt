import {
    createTransactionBox
} from "/modules/ui.js"
import { getData } from '../../modules/http'

let userData = JSON.parse(localStorage.getItem("user"))
document.querySelector("#user-email").textContent = userData.email

let tran_box = document.querySelector('table')
getData('/transactions?user_id=' + userData?.id)
    .then(res => {
        createTransactionBox(res.data, tran_box)
    })
