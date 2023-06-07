"use strict";

console.log("==============1=================");

let arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b');
console.log(arr);

console.log("==============2=================");

const obj = {js:"test", jq:"hello", css: "world"};
const keysArr = Object.keys(obj);
console.log(keysArr)

console.log("==============3=================");

const strStart = "http://IHATESQLANDJS.fk";
if (strStart.startsWith("http://")) {
    console.log("True");
} 
else {
    console.log("False");
}

console.log("==============4=================");

const strEnd = "http://IHATESQLANDJS.html";
if (strEnd.endsWith(".html")) {
        console.log("True");
} 
else {
    console.log("False");
}

console.log("==============5=================");

const numeric = "123456";
const reversedNum = numeric.split("").reverse().join("");
console.log(reversedNum);

console.log("==============6=================");

const str = "var_test_text";
let up = "";
for (let i = 0; i < str.length; i++) {
    if (str[i] === "_") {
        up += str[i + 1].toUpperCase();
        i++;
    } else {
        up += str[i];
    }
}
console.log(up);

console.log("==============7=================");

const js = ["я", "учу", "javascript", "!"];
let camelCaseStr = "";
for (let i = 0; i < js.length; i++) {
    camelCaseStr += ` ${js[i].toUpperCase()}`;
}
console.log(camelCaseStr);

console.log("==============8=================");

let date = "2025-12-31";
let parts = date.split("-");
let newDate = parts[2] + "/" + parts[1] + "/" + parts[0];
console.log(newDate);

console.log("==============9=================");

const fullName = "Иван Иванович Иванов";
console.log(fullName);
const surname = "Иванов";

const nameArray = fullName.split(" ");

if (nameArray[nameArray.length - 1] === surname) {
    const lastName = nameArray.pop();
    nameArray.unshift(lastName);
    const newFullName = nameArray.join(" ");
    console.log(newFullName);
}

console.log("==============10================");

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false; // Достаточно поймать одно несходство
        }
    }
    return true;
}

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [1, 2 ,1];
  
console.log(compareArrays(array1, array2));
console.log(compareArrays(array1, array3));
