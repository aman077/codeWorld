const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');

let validUser = false;
let validEmail = false;
let validPhone = false;
let validAddress = false;

$('#failure').hide();
$('#success').hide();

name.addEventListener('blur', () => {
    console.log('name is blured');
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}$/;
    let str = name.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('your name is valid');
        name.classList.remove('is-invalid')
        validUser = true;
    }
    else{
        console.log('your name is invalid')
        name.classList.add('is-invalid')
        validUser = false;
    }
})

email.addEventListener('blur', () => {
    console.log('name is blured');
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('your email is valid');
        email.classList.remove('is-invalid')
        validEmail = true;
    }
    else{
        console.log('your email is invalid')
        email.classList.add('is-invalid')
        validEmail = false;
    }
})

address.addEventListener('blur', () => {
    console.log('address is blured');
    let regex = /([a-zA-Z0-9\/\,\''\-])*$/;
    let str = address.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('your address is valid');
        address.classList.remove('is-invalid')
        validAddress = true;
    }
    else{
        console.log('your address is invalid')
        address.classList.add('is-invalid')
        validAddress = false;
    }
})

phone.addEventListener('blur', () => {
    console.log('phone is blured');
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('your phone is valid');
        phone.classList.remove('is-invalid')
        validPhone = true;
    }
    else{
        console.log('your phone is invalid')
        phone.classList.add('is-invalid')
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click',(e) => {
    e.preventDefault();

    console.log('you clicked on me');

    if(validUser && validEmail && validAddress && validPhone){
        console.log("your form has been submit successfully!")

        let success = document.getElementById('success');
        success.classList.add('show');
        $('#failure').hide();
        $('#success').show();

    }
    else{
        console.log("your form han not been submitted successfully!")
        let failure = document.getElementById('failure');
        failure.classList.add('show');
       $('#success').hide();
       $('#failure').show();
    }
    
})

