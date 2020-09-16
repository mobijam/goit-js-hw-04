const account = {
  owner: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['order-1', 'order-2', 'order-3'],
  changeDiscount(value) {
    this.discount = value;
  },
  showOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost;
    this.orders.push(order);
  },
};
const copyAccount = Object.assign({}, account);
copyAccount.orders = [...account.orders];
// копируем для автотестов ссылочные типы

account.changeDiscount(0.15);
console.log(account.discount); // 0.15

console.log(account.showOrders());
// ['order-1', 'order-2', 'order-3']

account.addOrder(5000, 'order-4');
console.log(account.balance); // 19000

console.log(account.showOrders());
// ['order-1', 'order-2', 'order-3', 'order-4']

/*
Расставь отсутствующие this в методах объекта account.

В комментариях показаны операции с объектом и ожидаемые результаты.
*/
