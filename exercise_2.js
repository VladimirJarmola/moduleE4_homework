/*
Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем.
Функция должна возвращать true или false.
*/
const obj = new Object();
obj.first = 100;
obj.second = 'string';
obj.third = false;

const str = 'first';

function methodName (object, string) {
    return string in object
}
const result = methodName(obj, str)
console.log(result)