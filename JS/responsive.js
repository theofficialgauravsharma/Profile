burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightNav=document.querySelector('.rightNav')


burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-responsive');
    navList.classList.toggle('v-class-responsive');
    rightNav.classList.toggle('v-class-responsive');
})

