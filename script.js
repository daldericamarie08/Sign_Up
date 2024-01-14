const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnSignup-popup');


btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
})

