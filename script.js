const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
if (fname.value.trim() === '') {
    fname.classList.add('error-input');
    fname.nextElementSibling.style.display = 'block';

} else {
    
    fname.classList.remove('error-input');
    fname.nextElementSibling.style.display = 'none';
}
if (lname.value.trim() === '') {
    lname.classList.add('error-input');
    lname.nextElementSibling.style.display = 'block';
} else {
    lname.classList.remove('error-input');
    lname.nextElementSibling.style.display = 'none';
}
if (password.value.trim() === '') {
    password.classList.add('error-input');
    password.nextElementSibling.style.display = 'block';
} else {
    password.classList.remove('error-input');
    password.nextElementSibling.style.display = 'none';
}
if (email.value.trim() === '' || !validateEmail(email.value.trim())) {
    
    email.classList.add('error-input');
    email.nextElementSibling.style.display = 'block';

} else {
    
    email.classList.remove('error-input');
    email.nextElementSibling.style.display = 'none';
    
}
});

function validateEmail(emailVal) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(emailVal);
}