var budget = prompt('Ваш бюджет на месяц?');
var nameShop = prompt('Название вашего магазина?');
var itemCount = prompt('Кол-во товаров ?');
let i = 0;
let time = 25;
let mainList = {
	budget: budget ,
	nameShop: nameShop,
	shopGoods: [],
	employment: {},
	open: false
};

for (i; i < itemCount; i++) {
	item = prompt('Какой тип товаров будем продавать?');
	console.log(i < itemCount,i,itemCount);
	if( (typeof(item)) === 'string' && (typeof(item)) !== null && item != '' && item.length < 50 ) {
		mainList.shopGoods[i] = item;
		console.log('Все верно !');
	} else {
		--i;
	}
	 if (time < 0) console.log(''); 
	 	else if (time > 8 && time < 20) console.log('Время работать')
	 		else if (time < 24) console.log('Позно')
	 			else console.log('В сутках 24 часа')
}

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