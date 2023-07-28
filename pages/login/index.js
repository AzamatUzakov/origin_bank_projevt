import {getData} from '../../modules/http';
let form = document.forms.login

form.onsubmit = (e) => {
    e.preventDefault();

    let formData = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        formData[key] = value
    })

    getData('/users?email=' + formData.email)
        .then((res) => {
            let [user] = res.data

            if(user) {
                if(user.password === formData.password) {
                    delete user.password

                    localStorage.setItem('user', JSON.stringify(user))

                    location.assign('/')
                } else {
                    alert('не правильный пароль')
                }
            } else {
                alert('сначала зарегистрируйтесь')
            }
        })   
}