let user  = document.querySelector('#user');
let log  = document.querySelector('#log');
let closes  = document.querySelector('.close');

log.addEventListener('click',()=>{
    user.style.display="flex";
})
closes.addEventListener('click',()=>{
    user.style.display="none";
})
