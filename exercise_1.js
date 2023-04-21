/*
Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль
все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение.
*/
const parent = {
    name: 'Luke'
};
const successor = Object.create(parent);
successor.first = 100;
successor.second = 'string';
successor.third = function () {
    console.log('hello')
};
function objectKeyAndProp (object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            let result = `Ключ: ${key}, значение: ${object[key]}`;
            console.log(result)
        }


    }
}
objectKeyAndProp(successor);
successor.third()