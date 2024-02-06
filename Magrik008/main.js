//console.log(document.forms[0])
let form = document.forms.registration;
let email = form.elements.email
let error = document.querySelector('.error')
let errorAgree = document.querySelector('.error')
let agree = form.elements.agree

//email.addEventListener('blur', () => {})
//form.addEventListener('focusout', () => console.log('focusout'))

email.addEventListener('change', () => console.log(email.value))
agree.addEventListener('change', () => console.log(agree.checked))