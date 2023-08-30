const form = document.querySelector('form');
const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const country = document.querySelector('#country');
const countryError = document.querySelector('#countryError');
const zip = document.querySelector('#zip');
const zipError = document.querySelector('#zipError');
// const password = document.querySelector('#password');
// const passwordError = document.querySelector('#passwordError');

email.addEventListener('input', () => {
  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    showEmailError();
  }
});

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

// this is the function in question
function showZipError() {
  console.log(`value too low - ${zip.validity.rangeUnderflow}`);
  if (zip.validity.valueMissing) {
    zipError.textContent = 'Please enter a zip code';
  } else if (zip.validity.rangeUnderflow) {
    zipError.textContent = 'Zip code needs to be at least 5 digits.';
  }
  zipError.className = 'error active';
}

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
  } else {
    e.preventDefault();
  }
});
