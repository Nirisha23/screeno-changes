// const toggleButton = document.getElementsByClassName('open-menu')[0];
// const navbarLinks = document.getElementsByClassName('nav-links ul');

// toggleButton.addEventListener('click',function(){
//     for(var i=0; i<navbarLinks.length; i++)
//     navbarLinks[ul].classList.toggle('active')
// });     

const toggleButton = document.getElementById('.open-menu');
const navList = document.getElementById('.nav-link');

toggleButton.addEventListener('click', ()=>{
    navList.classList.toggle('active');
});