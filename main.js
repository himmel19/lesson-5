let user = {} 


for(let i = 1; i <= 10; i++) {
    let name = prompt('Введите имя')
    let age = +prompt('Введите возраст')
    user[i] = {
        name: name,
        age: age
    }
}




for(let key in user) {
    console.log(`Пользователь ${key}`);
    console.log(`Ваше имя ${user[key].name}`);
    console.log(`Ваш возраст ${user[key].age}`);
}


console.log(user);



let cart = receipt()

let text = 'Вы заказали'
let delivery = 9000

for(let key in cart) {
    text = `${text} ${key} ${cart[key].info},`
    delivery = delivery + cart[key]['price']
}



console.log(`${text} | Общая стоимость ${delivery}сумм с доставкой (9000)`);