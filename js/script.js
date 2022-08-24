document.addEventListener('DOMContentLoaded',function(){
const burger = document.getElementById('burger');
const nav = document.querySelector('nav');

burger.addEventListener('click',()=>{
    nav.classList.toggle('active');
})
const closeNav=()=>{
    nav.className=('header__nav')
}
nav.querySelectorAll('a').forEach((link, index)=>{
    link.addEventListener('click',()=>{
        closeNav();
    })
})
})
