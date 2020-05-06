const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}



const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name')
const buttonOut =  document.querySelector('.button-out')


let login = localStorage.getItem('userLogin')

function toogleModalAuth() {
  loginInput.style.borderColor = '';
  modalAuth.classList.toggle('is-open');
}


function authorized() {

    function logOut() {
        login = '';
        buttonAuth.style.display = '';
        userName.style.display = '';
        buttonOut.style.display = '';
        buttonAuth.removeEventListener('click', logOut);
        checkAuth();
    }

  userName.textContent = login;

  buttonAuth.style.display = 'none';
  userName.style.display = 'inline';
  buttonOut.style.display = 'block';
      
  buttonOut.addEventListener('click', logOut);
}


function notAuthorized() {

    function logIn(event) {
      event.preventDefault();
      
      if (loginInput.value) {
        login = loginInput.value;
        localStorage.setItem('userLogin', login);
        toogleModalAuth();
        buttonAuth.removeEventListener('click', toogleModalAuth);
        closeAuth.removeEventListener('click', toogleModalAuth);
        logInForm.removeEventListener('submit', logIn);
        logInForm.reset();
        checkAuth();
      } else {
        loginInput.style.borderColor = 'red';
      }
    }

buttonAuth.addEventListener('click', toogleModalAuth);
closeAuth.addEventListener('click', toogleModalAuth);
logInForm.addEventListener('submit', logIn);
}

function checkAuth() {
  if (login) {
    authorized();
  } else {
    notAuthorized();
  }
}


checkAuth();