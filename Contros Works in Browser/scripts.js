"use strict";
// Задание 1
let usersArray= [   
                    {name:"John", login:"OPPYM", password:"3223322"}, 
                    {name:"Max", login:"Maxwell", password:"paninpes111"}, 
                    {name:"Annet", login:"BeutyAnne", password:"qwerty"},
                ];

function createLoginForm(){
    let uname = String(prompt("Enter your username", ''));
    let passwd = String(prompt("Enter your password", ''));
    console.log(uname, passwd);

    let user = usersArray.find(u => u.login === uname && u.password === passwd);
    if (user) {
        alert(`Добро пожаловать, ${user.name}!`);
    } else {
        alert('Неверный логин или пароль');
    }
}

// Задание 2


let otvet = Math.floor(Math.random() * 10)
let input = prompt("Введите число")

function games() {
  
  if (input === null) {
    return;
  } else if (parseInt(input) > otvet) {
    input = prompt("Меньше!")
    games();
  } else if (parseInt(input) < otvet) {
    input = prompt("Больше!")
    games();
  } else if (parseInt(input) === otvet) {
    alert("Правильно!")
  }else if (isNaN(parseInt(input))) {
    input = prompt("Не число!")
    games();
  }

}

function main() {
    createLoginForm();
    games();
}
main();