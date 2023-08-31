const form = document.querySelector('form');
const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const country = document.querySelector('#country');
const countryError = document.querySelector('#countryError');
const zip = document.querySelector('#zip');
const zipError = document.querySelector('#zipError');
const password = document.querySelector('#password');
const passwordError = document.querySelector('#passwordError');
const confirmPassword = document.querySelector('#confirmPassword');
const confirmPasswordError = document.querySelector('#confirmPasswordError');

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'Please enter an email address';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Please enter a valid email address';
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email needs to be at least ${email.minLength} characters.`;
  }
  emailError.className = 'error active';
}
email.addEventListener('input', () => {
  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    showEmailError();
  }
});

country.addEventListener('change', () => {
  if (country.value !== '') {
    countryError.textContent = '';
    countryError.className = 'error';
  } else {
    showCountryError();
  }
});

function showCountryError() {
  countryError.textContent = 'Please select a country';
  countryError.className = 'error active';
}

zip.addEventListener('input', () => {
  if (zip.validity.valid) {
    zipError.textContent = '';
    zipError.className = 'error';
  } else {
    showZipError();
  }
});

function showZipError() {
  if (zip.validity.valueMissing) {
    zipError.textContent = 'Please enter a zip code';
  } else if (zip.validity.rangeUnderflow) {
    zipError.textContent = 'Zip code needs to be at least 5 digits.';
  }
  zipError.className = 'error active';
}

function showPasswordError() {
  if (password.validity.valueMissing) {
    passwordError.textContent = 'Please enter a password';
  } else if (password.validity.tooShort) {
    passwordError.textContent = 'This needs to be at least 8 characters';
  }
  passwordError.className = 'error active';
}

password.addEventListener('input', () => {
  if (password.validity.valid) {
    passwordError.textContent = '';
    passwordError.className = 'error';
  } else {
    showPasswordError();
  }
  if (password.value === confirmPassword.value) {
    confirmPasswordError.textContent = '';
    confirmPasswordError.className = 'error';
  }
});

function showConfirmPasswordError() {
  confirmPasswordError.textContent = 'Passwords need to match';
  confirmPasswordError.className = 'error active';
}

confirmPassword.addEventListener('input', () => {
  if (password.value === confirmPassword.value) {
    confirmPasswordError.textContent = '';
    confirmPasswordError.className = 'error';
  } else {
    showConfirmPasswordError();
  }
});

form.addEventListener('submit', (e) => {
  if (!email.validity.valid) {
    showEmailError();
    e.preventDefault();
  }
  if (country.value === '') {
    showCountryError();
    e.preventDefault();
  }
  if (!zip.validity.valid) {
    showZipError();
    e.preventDefault();
  }
  if (!password.validity.valid) {
    showPasswordError();
    e.preventDefault();
  } else {
    e.preventDefault();
    alert('Everything looks great!');
  }
});

// please enter a password
// password needs to contain letters, numbers, upper and lowercase, and special characters

// passwords need to match
