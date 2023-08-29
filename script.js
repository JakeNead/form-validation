const form = document.querySelector('form');
const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const country = document.querySelector('#country');
const countryError = document.querySelector('#country');
const zip = document.querySelector('#zip');
const zipError = document.querySelector('#zipError');
const password = document.querySelector('#password');
const passwordError = document.querySelector('#passwordError');

email.addEventListener('input', (e) => {
  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    showEmailError();
  }
});

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'Please  enter an email address';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Please enter a real email address';
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email needs to be at least ${email.minLength} characters.`;
  }
  emailError.className = 'error active';
}

country.addEventListener('input', (e) => {
  if (!country.value === '') {
    countryError.textContent = '';
    countryError.className = 'error';
  } else {
    showCountryError();
  }
  console.log(country);
});

function showCountryError() {
  countryError.textContent = 'Please select a country';
}

zip.addEventListener('input', () => {
  if (zip.validity.value) {
    zipError.textContent = '';
    zipError.className = 'error';
  } else {
    showZipError();
  }
});

function showZipError() {
  if (zip.validity.valueMissing) {
    zipError.textContent = 'Please  enter a zip code';
  } else if (zip.validity.tooShort) {
    zipError.textContent = `Zip code needs to be at least ${zip.minLength} numbers.`;
  }
  zipError.className = 'error active';
}
// function showPasswordError() {
// }

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(country.value);
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
  }
});
