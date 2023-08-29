const form = document.querySelector('form');
const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const country = document.querySelector('#country');
const countryError = document.querySelector('#countryError');
const zip = document.querySelector('#zip');
const zipError = document.querySelector('#zipError');
const password = document.querySelector('#password');
const passwordError = document.querySelector('#passwordError');

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
    emailError.textContent = 'Please  enter an email address';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Please enter a valid email address';
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email needs to be at least ${email.minLength} characters.`;
  }
  emailError.className = 'error active';
}

country.addEventListener('change', () => {
  console.log(country.value === '');
  if (!country.value == '') {
    countryError.textContent = '';
    countryError.className = 'error';
  } else {
    showCountryError();
  }
//   console.log(country.value);
});

function showCountryError() {
  countryError.textContent = 'Please select a country';
  countryError.className = 'error active';
}

// zip.addEventListener('input', () => {
//   if (zip.validity.valid) {
//     zipError.textContent = '';
//     zipError.className = 'error';
//   } else {
//     showZipError();
//   }
// });

// function showZipError() {
//   if (zip.validity.valueMissing) {
//     zipError.textContent = 'Please  enter a zip code';
//   } else if (zip.validity.tooShort) {
//     zipError.textContent = `Zip code needs to be at least ${zip.minLength} numbers.`;
//   }
//   zipError.className = 'error active';
// }
// function showPasswordError() {
// }

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!email.validity.valid) {
    showEmailError();
    e.preventDefault();
  }
  if (country.value === '') {
    console.log('test');
    showCountryError();
    e.preventDefault();
  }
//   if (!zip.validity.valid) {
//     showZipError();
//     e.preventDefault();
//   }
//   if (!password.validity.valid) {
//     // showPasswordError();
//     e.preventDefault();
//   }
});
