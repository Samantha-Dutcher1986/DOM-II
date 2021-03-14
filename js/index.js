// Your code goes here
const anchorTag = document.querySelectorAll('a');
const buttons = document.querySelectorAll('.btn');
const headerH1 = document.querySelector('.logo-heading');
const headerH2 = document.querySelector('.intro h2');
const img1 = document.querySelector('.intro img');
const img2 = document.querySelector('.content-section img')
const doc = this.document;

//Scroll Event Listener
doc.addEventListener('scroll', (event) => {
    headerH1.innerHTML = 'Fun Bus Travels!';
});

//Mouseover Event Listeners
doc.addEventListener('mouseover', (event) => {
    headerH1.innerHTML = 'Greece!';
});

headerH2.addEventListener('mouseover', (event) => {
    headerH2.style.color = 'seashell';
    headerH2.innerHTML = 'Welcome to Fun Bus Travels!';
});

img1.addEventListener('mouseover', (event) => {
    img1.src = 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=779&q=80';
});

img2.addEventListener('mouseover', (event) => {
    img2.src = 'https://images.unsplash.com/photo-1471085507142-12355181f804?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDV8fGdyZWVjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
});

anchorTag[2].addEventListener('mouseover', (event) => {
    anchorTag[2].style.color = 'red';
});

anchorTag[3].addEventListener('mouseover', (event) => {
    anchorTag[3].style.color = 'purple';
});


//Mouseleave Event Listener
img2.addEventListener('mouseleave', (event) => {
    img2.src = 'https://unspash.com/phtots/2rTcxH33Zd8';
});

//onkeydown Event Listener
document.onkeydown = function(){
    nav.style.backgroundColor = 'aquamarine';
    document.querySelector('.footer').style.backgroundColor = 'silver';
};

//onkeyup Event Listener
document.onkeyup = function(){
    nav.style.backgroundColor = 'pink';
    document.querySelector('.footer').style.backgroundColor = 'turquoise';
};

//onscroll Event Listener
document.onscroll = function(){
    document.body.style.backgroundColor = 'eggshell';
    document.body.style.backgroundColor = 'seagreen';
    document.body.style.color = 'seashell';
};

//ondblclick Event Listener
buttons.ondblclick = function(){
    buttons.style.backgroundColor = 'red';
};

//preventDefault
document.querySelector('a').addEventListener('click', (event) => {
    event.preventDefault()
});

//stopPropagation
document.querySelector('body').addEventListener('onclick', (event) => {
    event.stopPropagation()
});

document.querySelector('div').addEventListener('onclick', (event) => {
    event.stopPropagation()
});