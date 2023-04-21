/*
Задание 4.

Реализовать следующее консольное приложение подобно примеру, который разбирался в видео.
Реализуйте его на прототипах.

Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер).
Выбрав прибор, подумайте, какими свойствами он обладает.

План:

Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, о
тличные от родительских методов.
Создать экземпляры каждого прибора.
Вывести в консоль и посмотреть результаты работы, гордиться собой. :)
Общие требования:

Имена функций, свойств и методов должны быть информативными.
Соблюдать best practices:
использование camelCase нотации для переменных и методов,
PascalCase для названия функций-конструкторов и классов;
информативные имена (а не a, b);
четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
использование синтаксиса ES6 (кроме функции-конструкторов) и т. д.
При возникновении проблем по ходу решения вы всегда можете обратиться к ментору в Slack.

Удачи!
*/

function ElectricalAppliance(selfName, power) {
    this.switch = 'off';
    this.name = selfName;
    this.power = power;
}

ElectricalAppliance.prototype.makeSwitching = function (action) {
    if (action === 'on' || action === 'off') {
        this.switch = action
    } else {
        console.log('error')
    }
}

function KitchenAppliances(selfName, power) {
    this.name = selfName;
    this.power = power;
}

KitchenAppliances.prototype = new ElectricalAppliance();

const toster = new KitchenAppliances('toster', 700);
toster.makeSwitching('off');

function ConstructionAppliances(selfName, power) {
    this.name = selfName;
    this.power = power;
    this.noiseLevel = '50';
}

ConstructionAppliances.prototype = new ElectricalAppliance();

const perforator = new ConstructionAppliances('perforator', 2000);
perforator.makeSwitching('on');

const screwdriver = new ConstructionAppliances('screwdriver', 1000);
screwdriver.makeSwitching('on');

function getSumPower(...rest) {
    let power = rest.map(function (element){
        if (element.switch === 'on') {
            return element.power
        } else {
            return 0
        }
    });
    let result = power.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue
    })

    return result
}
const sumPower = getSumPower(perforator, screwdriver, toster);
console.log(sumPower)
console.log(toster, perforator, screwdriver)