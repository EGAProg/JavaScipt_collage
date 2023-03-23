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




function main() {
    createLoginForm();
}
main();