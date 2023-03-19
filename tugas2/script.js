const choose_regex = {
    nim : /^[0-9]{9}/,
    zip : /^[0-9]{5}/,
    fname : /^[A-Za-z. ]{3,20}$/,
    lname : /^[A-Za-z. ]{3,20}$/,
    phone : /^0[0-9]{10,13}$/,
    address : /^[A-Za-z. ]{10,100}$/,
    state : /^[A-Za-z. ]{3,30}$/,
    email : /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/,
    password : /^[#\w@_-]{8,20}$/,
}

const validate = (field, regex) => {
    regex.test(field.value) ? field.className = 'valid' : field.className = 'invalid';
}
    
let keys = document.querySelectorAll('input');
    keys.forEach(item => item.addEventListener(
    'keyup', e => {
        validate(e.target, choose_regex[e.target.attributes.name.value])
    }
));