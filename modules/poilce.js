let user = JSON.parse(localStorage.getItem('user'))


if(user === null) {
    location.assign('/pages/login/')
}