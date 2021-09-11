const $passwordButton1 = document.querySelector('.hide1')
const $passwordButton2 = document.querySelector('.hide2')

const $name = document.getElementById('name')
const $email = document.getElementById('email')
const $password1 = document.getElementById('password1')
const $password2 = document.getElementById('password2')

const $registerButton = document.querySelector('.register')

const $website = document.querySelector('.container')

function nameLength (input, min, max){
    let inputText = input.value;

    if (inputText.length > min && inputText.length < max) {
        return true;
    } else {
        alert(`O nome deve conter no mínimo ${min} caracteres e no máximo 
        ${max} caracteres.`)
        return false;
    }
}

function checkEmail(input) {
    let emailText = input.value;

    if (emailText.includes("@")){
        return true;
    } else {
        alert("Insira um E-mail válido")
        return false;
    }

}

function checkPassword(input1, input2){
    let password = input1.value;
    let passwordConfirm = input2.value;

    if ((password === passwordConfirm) && password != '') {
        return true;
    } else {
        alert("As senhas devem ser iguais")
        return false;
    }
}

function hidePassword1(){
    let x = document.getElementById("password1");
    
    if (x.type === 'password'){
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function hidePassword2(){
    let y = document.getElementById("password2");

    if (y.type === 'password'){
        y.type = "text";
    } else {
        y.type = "password";
    }
}


function toggleIcon1(){
    $passwordButton1.classList.toggle('active')
}

function toggleIcon2(){
    $passwordButton2.classList.toggle('active')
}

$passwordButton1.addEventListener('click', function(){
    hidePassword1()
    toggleIcon1()
})

$passwordButton2.addEventListener('click', function(){
    hidePassword2()
    toggleIcon2()
})

$registerButton.addEventListener('click', function(){
    if (nameLength($name, 3, 30) && checkEmail($email) &&
     checkPassword($password1, $password2) == true) {
        $website.innerHTML = "<h1 class='register-title'>Cadastro feito com sucesso!</h1>"
    } else {
        return
    }
})