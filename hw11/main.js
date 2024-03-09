function getName() {
    while (true) {
        var name = prompt("Будь ласка, введіть ваше ім'я:");
        if (name) {
            return name;
        } else {
            alert("Ви не ввели ім'я. Спробуйте ще раз.");
        }
    }
}

function getAge() {
    while (true) {
        var ageStr = prompt("Будь ласка, введіть ваш вік:");
        var age = parseInt(ageStr);
        if (!isNaN(age) && age >= 0) {
            return age;
        } else {
            alert("Ви ввели некоректний вік. Спробуйте ще раз.");
        }
    }
}

function getSmokingStatus() {
    while (true) {
        var smoking = prompt("Чи курите ви? (так/ні):").toLowerCase();
        if (smoking === 'так' || smoking === 'ні') {
            return smoking;
        } else {
            alert("Будь ласка, введіть 'так' або 'ні'.");
        }
    }
}

function main() {
    var name = getName();
    var age = getAge();
    var smoking = getSmokingStatus();

    if (age < 18) {
        if (smoking === 'ні') {
            alert(`Молодець ${name}! Гарний приклад для своїх однолітків.`);
        } else {
            alert(`${name}, а твої батьки знають про це?`);
        }
    } else {
        if (smoking === 'ні') {
            alert(`Супер ${name}! Мабуть ще й спортом займаєшся!`);
        } else {
            alert(`Що ж ${name}, це твій вибір. Але я не радив би курити.`);
        }
    }
}

main();
