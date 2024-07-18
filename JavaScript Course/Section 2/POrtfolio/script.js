let navbar = document.getElementById('navbar');
navbar.style.backgroundColor = 'red';


let welcome = document.body.querySelectorAll('section')
welcome[0].style.backgroundColor = "green"

let temp = document.body.querySelectorAll('nav >ul >li > a')
for (let index = 0; index < temp.length; index++) {
    temp[index].style.color = "blue" 
} 
