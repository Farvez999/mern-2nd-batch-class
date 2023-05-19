document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email')
    const email = emailField.value;
    console.log(email)

    const passField = document.getElementById('user-pass')
    const pass = passField.value;
    console.log(pass)

    if (email === 'abc@gmail.com' && pass == '123456') {
        window.location.href = 'bank.html'
        console.log('Login Success')
    } else {
        console.log('Login Faild')
    }
})