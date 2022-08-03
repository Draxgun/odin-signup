



/* Function in charge of checking that passwords match */
function onChange() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=confirmPassword]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'Passwords matching';
    } else {
      confirm.setCustomValidity('Passwords do not match');
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'Passwords do not match';
    }
}