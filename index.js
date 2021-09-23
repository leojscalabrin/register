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
        return false;
    }
}

function checkEmail(input) {
    let emailText = input.value;

    if (emailText.includes("@")){
        return true;
    } else {
        return false;
    }

}

function checkPassword(input1, input2){
    let password = input1.value;
    let passwordConfirm = input2.value;

    if ((password === passwordConfirm) && password != '') {
        return true;
    } else {
        return false;
    }
}

function hidePassword1(){
    const $password1 = document.getElementById("password1");
    
    if ($password1.type === 'password'){
        $password1.type = "text";
    } else {
        $password1.type = "password";
    }
}

function hidePassword2(){
    const $password2 = document.getElementById("password2");

    if ($password2.type === 'password'){
        $password2.type = "text";
    } else {
        $password2.type = "password";
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
    const nameOk = nameLength($name, 3, 30);
    const emailOk = checkEmail($email);
    const passwordOk = checkPassword($password1, $password2);

    if (nameOk && emailOk && passwordOk) {
        $website.innerHTML = "<h1 class='register-title'>Cadastro feito com sucesso!</h1>"
    } else {
        alert('O nome deve conter no mínimo 3 caracteres e no máximo ' + 
        '30 caracteres, o e-mail deve ser válido, e as senhas devem ser iguais!')
        return
    }
})