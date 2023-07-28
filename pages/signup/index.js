import { v4 as uuidv4 } from 'uuid';
import { postData } from '../../modules/http';
let form = document.forms.signup

form.onsubmit = (e) => {
    e.preventDefault();
    
    let user = {
        id: uuidv4()
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    postData("/users", user)
        .then(res => {
            if(res.status === 200 || res.status === 201) {
                location.assign('/pages/login/')
            }
        })
}