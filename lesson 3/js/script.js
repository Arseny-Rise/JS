let budget,
		nameShop,
		time,
		itemCount,
		price;
let i = 0;

function start() {
	budget = prompt('Ваш бюджет на месяц?');

	while(isNaN(budget) || budget == '' || budget == null) {
		budget = prompt('Ваш бюджет на месяц?');
	}

	nameShop = prompt('Название вашего магазина?').toUpperCase();
	itemCount = prompt('Кол-во товаров ?');
	time = 25;
}
start();

let mainList = {
	budget: budget ,
	nameShop: nameShop,
	shopGoods: [],
	employment: {},
	open: false,
	discount: false
};

function discount() {
	if (mainList.discount == true) price*0.8;
}

function employers() {
	for (let j = 0; j < 4; j++) {
		mainList.employment[j] = prompt('Имя сотрудника: ');
	}
}

employers();

function chooseGoods() {
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
}
chooseGoods();

function workTime(time) {
	if (time < 0) console.log(''); 
		 	else if (time > 8 && time < 20) console.log('Время работать')
		 		else if (time < 24) console.log('Позно')
		 			else console.log('В сутках 24 часа')
}
workTime(4);

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

alert('Ваш бюджет на 1 день: ' + budget / 30);
console.log(mainList);