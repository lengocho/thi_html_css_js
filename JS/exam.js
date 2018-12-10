var btnSubmit = document.forms['register-form']['btnSubmit'];
btnSubmit.onclick = function () {
   validateForm();
}

function validateForm() {
    var isValidName = true;
    var isValidEmail = true;
    var isValidPhone = true;
    var txtName = document.forms['register-form']['name'];
    var msgName = txtName.nextElementSibling;
    if (txtName.value == null || txtName.value.length == 0) {
        msgName.classList.remove('msg-success');
        msgName.classList.add('msg-error');
        msgName.innerHTML = 'Name is required';
        isValidName = false;
    } else if (txtName.value.length <= 50) {
        msgName.classList.remove('msg-error');
        msgName.classList.add('msg-success');
        msgName.innerHTML = 'OK';
    } <!-- validate Name -->
    var txtEmail = document.forms['register-form']['email'];
    var msgEmail = txtEmail.nextElementSibling;
    if (txtEmail.value == null || txtEmail.value.length == 0) {
        msgEmail.classList.remove('msg-success');
        msgEmail.classList.add('msg-error');
        msgEmail.innerHTML = 'Email is required';
        isValidEmail = false;
    } else {
        msgEmail.classList.remove('msg-error');
        msgEmail.classList.add('msg-success');
        msgEmail.innerHTML = 'OK';
    }  <!-- validate Email -->
    var txtPhone = document.forms['register-form']['phone'];
    var msgPhone = txtPhone.nextElementSibling;
    if (txtPhone.value == null || txtPhone.value.length == 0) {
        msgPhone.classList.remove('msg-success');
        msgPhone.classList.add('msg-error');
        msgPhone.innerHTML = 'Phone is required';
        isValidPhone = false;
    } else {
        msgPhone.classList.remove('msg-error');
        msgPhone.classList.add('msg-success');
        msgPhone.innerHTML = 'OK';
    }  <!-- validate Phone -->
    var txtGender = document.forms['register-form']['gender'];
    var msgGender = txtGender.nextElementSibling;
    if (txtGender.value == null || txtGender.value.length == 0) {
        msgGender.classList.remove('msg-success');
        msgGender.classList.add('msg-error');
        msgGender.innerHTML = 'Gender is required';
        isValidPhone = false;
    } else {
        msgGender.classList.remove('msg-error');
        msgGender.classList.add('msg-success');
        msgGender.innerHTML = 'OK';
    }  <!-- validate Gender -->
}