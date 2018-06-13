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
start();

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

// while (i < itemCount) {
//  item = prompt('Какой тип товаров будем продавать?');
// 	console.log(i < itemCount,i,itemCount);
// if( (typeof(item)) === 'string' && (typeof(item)) !== null && item != '' && item.length < 50 ) {
// 		mainList.shopGoods[i] = item;
// 		++i;
// 		console.log('Все верно !');
// 	} else {
// 		i;
// 	}
// 	 if (time < 0) console.log('');
// 	 	else if (time > 8 && time < 20) console.log('Время работать')
// 	 		else if (time < 24) console.log('Позно')
// 	 			else console.log('В сутках 24 часа')
// }

// do {
// 	item = prompt('Какой тип товаров будем продавать?');
// 	console.log(i < itemCount,i,itemCount);
// 	if( (typeof(item)) === 'string' && (typeof(item)) !== null && item != '' && item.length < 50 ) {
// 			mainList.shopGoods[i] = item;
// 			++i;
// 			console.log('Все верно !');
// 		} else {
// 			i;
// 		}
// 	if (time < 0) console.log('');
// 		else if (time > 8 && time < 20) console.log('Время работать')
// 			else if (time < 24) console.log('Позно')
// 				else console.log('В сутках 24 часа')
// }
// while (i < itemCount)
