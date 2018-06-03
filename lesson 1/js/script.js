var budget = prompt('Ваш бюджет на месяц?');
var nameShop = prompt('Название вашего магазина?');
var shopGoods1 = prompt('Какой тип товаров будем продавать?');
var shopGoods2 = prompt('Какой тип товаров будем продавать?');
var shopGoods3 = prompt('Какой тип товаров будем продавать?');
var mainList = {
	budget: budget ,
	nameShop: nameShop,
	shopGoods: [shopGoods1,shopGoods2,shopGoods3],
	employment: {},
	open: '',
};
alert('Ваш бюджет на 1 день: ' + budget / 30);