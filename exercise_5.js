/*
Задание 5.

Переписать консольное приложение из предыдущего юнита на классы.

Общие требования:

Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;
Использовать синтаксис ES6.
При возникновении проблем по ходу решения вы всегда можете обратиться к ментору в Slack.

Удачи!
 */

class ElectricalAppliance {
    constructor(selfName, power) {
        this.switch = 'off';
        this.selfName = selfName;
        this.power = power;
    }
    makeSwitching(action) {
        if (action === 'on' || action === 'off') {
            this.switch = action
        } else {
            console.log('error')
        }
    }
}

class KitchenAppliances extends ElectricalAppliance {
    constructor(selfName, power) {
        super(selfName, power);
    }
}

class ConstructionAppliances extends ElectricalAppliance{
    constructor(selfName, power, noiseLevel) {
        super(selfName, power);
        this.noiseLevel = noiseLevel ? noiseLevel : '50';
    }
}
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

const perforator = new ConstructionAppliances('perforator', 2000);
perforator.makeSwitching('on');

const screwdriver = new ConstructionAppliances(
    'screwdriver', 1000, 100
);
screwdriver.makeSwitching('on');

const toster = new KitchenAppliances('toster', 700);
console.log(toster.switch);

const sumPower = getSumPower(perforator, screwdriver, toster);

console.log(sumPower);
console.log(perforator, screwdriver, toster)
