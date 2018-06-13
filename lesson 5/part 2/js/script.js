clsBtn = document.getElementById('open-btn');
clsName = document.getElementsByClassName('name-value')[0];
clsBudget = document.getElementsByClassName('budget-value')[0];
clsGoods = document.getElementsByClassName('goods-value')[0];
clsItems = document.getElementsByClassName('items-value')[0];
clsEmployers = document.getElementsByClassName('employers-value')[0];
clsDiscount = document.getElementsByClassName('discount-value')[0];
clsIsOpen = document.getElementsByClassName('isopen-value')[0];
clsGoodsItem1 = document.getElementsByClassName('goods-item')[0];
clsGoodsItem2 = document.getElementsByClassName('goods-item')[1];
clsGoodsItem3 = document.getElementsByClassName('goods-item')[2];
clsGoodsItem4 = document.getElementsByClassName('goods-item')[3];
BtnGoods = document.getElementsByTagName('button')[0];
BtnBudget = document.getElementsByTagName('button')[1];
BtnEmployers = document.getElementsByTagName('button')[2];
inputChoose = document.querySelector('.choose-item');
inputTime = document.querySelector('.time-value');
inputCountBudget = document.querySelector('.count-budget-value');
hireEmployers = document.querySelectorAll('.hire-employers-item');
console.log(hireEmployers);
let budget,
		nameShop,
		time,
		itemCount,
		price;
let i = 0;

function start() {
	budget = prompt('Ваш бюджет на месяц?', '');

	while(isNaN(budget) || budget == '' || budget == null) {
		budget = prompt('Ваш бюджет на месяц?', '');
	}

	nameShop = prompt('Название вашего магазина?', '').toUpperCase();
	itemCount = prompt('Кол-во товаров ?', '');
	time = 25;
}
// start();

let mainList = {
	budget: budget ,
	nameShop: nameShop,
	shopGoods: ['234','',234],
	employment: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods() {
		for (i; i < itemCount; i++) {
			item = prompt('Какой тип товаров будем продавать?');
			console.log(i < itemCount,i,itemCount);
			if( (typeof(item)) === 'string' && (typeof(item)) !== null && item != '' && item.length < 50 ) {
				mainList.shopGoods[i] = item;
				console.log('Все верно !');
			} else {
				--i;
			}
		}
	},
	workTime: function workTime(time) {
		if (time < 0) console.log('');
		 	else if (time > 8 && time < 20) {
		 		console.log('Время работать')
		 		mainList.open = true;
		 	}
		 		else if (time < 24) console.log('Позно')
		 			else console.log ('В сутках 24 часа')
	},
	chooseShopItems: function chooseShopItems() {
		let items = prompt('Перечислите товары', '');
		mainList.shopItems = items.split(',');
		mainList.shopItems.push(prompt('Подождите', ''));
		mainList.shopItems.sort();
	},
	alertShopItems: function alertShopItems() {
		mainList.shopItems.forEach( function(item, index, arr) {
			alert('У нас вы можете купить: '  + item);
		});
	},
	mainListItems: function mainListItems(obj = 'empty',name = 'mainList' , after = "Наш магазин включает в себя: " , lMargin = '') {
		if (obj == 'empty') obj = mainList;
		var iterCount = 0;
		for (var prop in obj) {
			if (iterCount == 0) console.log(lMargin + name);
			if (typeof(obj[prop]) == 'string' || typeof(obj[prop]) == 'number') {
				console.log(lMargin + after + prop + " = " + obj[prop]);
			} else if (typeof(obj[prop]) == 'object') {
				this.mainListItems(obj[prop], prop, '', lMargin + ' ');
			}
			++iterCount;
		}
	},
	funDiscount: function discount() {
		if (mainList.discount == true) price*0.8;
	},
	employers: function employers() {
		for (let j = 0; j < 4; j++) {
			var name = prompt('Имя сотрудника №'+ j +': ', '');
			var lastName = prompt('Фамилия сотрудника №'+ j +': ', '');
			mainList.employment[j] = {
				name: name,
				lastName: lastName
			};
		}
	},
	budgetInDay: function budgetInDay() {
		alert('Ваш бюджет на 1 день: ' + budget / 30);
	}
};

console.log(mainList);
