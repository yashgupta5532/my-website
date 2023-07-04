const cross=document.querySelector('#cross-bar');
const exit=document.querySelector('#exit');
cross.addEventListener("click",()=>{
    exit.classList.toggle("show");
});

//for physics
const physicsid =document.getElementById('physics');
const english =document.getElementsByClassName('english')[0];
const physicsclass =document.getElementsByClassName('physics')[0];
physicsid.addEventListener("click",()=>{
    english.style.display="none";
    physics.style.display="block";
})

//for english
const englishid=document.getElementById('english');
const container=document.querySelectorAll('.container');
englishid.addEventListener("click",()=>{
    container.style.display="none";
    english.style.display="block";
})
