/*
Задание 3.
Написать функцию, которая создает пустой объект, но без прототипа.
*/
function emptyObject() {
    let obj = Object.create(null);
    return obj
}
const result = emptyObject()
console.log(result)