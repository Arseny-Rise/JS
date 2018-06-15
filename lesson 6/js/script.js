clsBtn = document.getElementById('open-btn');
clsName = document.getElementsByClassName('name-value')[0];
clsBudget = document.getElementsByClassName('budget-value')[0];
clsGoods = document.getElementsByClassName('goods-value')[0];
clsItems = document.getElementsByClassName('items-value')[0];
clsEmployers = document.getElementsByClassName('employers-value')[0];
clsDiscount = document.getElementsByClassName('discount-value')[0];
clsIsOpen = document.getElementsByClassName('isopen-value')[0];
clsGoodsItem = document.getElementsByClassName('goods-item');
clsGoodsItem1 = document.getElementsByClassName('goods-item')[0];
clsGoodsItem2 = document.getElementsByClassName('goods-item')[1];
clsGoodsItem3 = document.getElementsByClassName('goods-item')[2];
clsGoodsItem4 = document.getElementsByClassName('goods-item')[3];
btns = document.getElementsByTagName('button');
btnGoods = document.getElementsByTagName('button')[1];
btnBudget = document.getElementsByTagName('button')[2];
btnEmployers = document.getElementsByTagName('button')[3];
inputChoose = document.querySelector('.choose-item');
inputTime = document.querySelector('.time-value');
inputCountBudget = document.querySelector('.count-budget-value');
inputCountBudget.disabled = true;
hireEmployers = document.querySelectorAll('.hire-employers-item');
let budget,
		itemCount,
		price;
let i = 0;

clsBtn.addEventListener('click', () => {
	budget = prompt('Ваш бюджет на месяц?', '');

	while(isNaN(budget) || budget == '' || budget == null) {
		budget = prompt('Ваш бюджет на месяц?', '');
	}
	clsBudget.textContent = budget;
	clsName.textContent = prompt('Название вашего магазина?', '').toUpperCase();
	mainList.discount = confirm('У вас есть дисконтная карта?', '');
	if (mainList.discount == true) {
		price*0.8;
		clsDiscount.style.backgroundColor = 'green';
	}
});

btnGoods.addEventListener('click', () => {
	for (i; i < clsGoodsItem.length; i++) {
		item = clsGoodsItem[i].value;

		if( (typeof(item)) === 'string' && (typeof(item)) !== null && item.length < 50 ) {
			console.log('Все верно');
			mainList.shopGoods[i] = item;
			clsGoods.textContent = mainList.shopGoods;
		} else {
			--i;
		}
	}
});

inputChoose.addEventListener('change', () => {
	let items = inputChoose.value;

	if (isNaN(items) && items != '') {
		mainList.shopItems = items.split(',');
		mainList.shopItems.sort();
		clsItems.textContent = mainList.shopItems;
	}
});

inputTime.addEventListener('change', () => {
	let time = inputTime.value;
	if (time < 0) {
		mainList.open = false;
		console.log('');
	} else if (time > 8 && time < 20) {
			mainList.open = true;
			console.log('Время работать');
		} else if (time < 24) {
			mainList.open = false;
			console.log('Поздно');
			}	else {
					console.log ('В сутках 24 часа');
					mainList.open = false;
				}

	if (mainList.open == true) {
		clsIsOpen.style.backgroundColor = 'green';
	} else {
		clsIsOpen.style.backgroundColor = 'red';
	}
	if (mainList.open == false) {
		btnGoods.disabled = true;
		btnBudget.disabled = true;
		btnEmployers.disabled = true;
	} else {
		btnGoods.disabled = false;
		btnBudget.disabled = false;
		btnEmployers.disabled = false;
	}
});

btnBudget.addEventListener('click', () => {
	inputCountBudget.value = budget / 30;
});

btnEmployers.addEventListener('click', () => {
	for (let j = 0; j < hireEmployers.length; j++) {
		var name = hireEmployers[j].value;
		mainList.employment[j] = name;
		clsEmployers.textContent += mainList.employment[j] + ', ';
	}
});

let mainList = {
	budget: budget ,
	nameShop: clsName,
	shopGoods: [],
	employment: {},
	open: false,
	discount: false,
	shopItems: [],
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
};

console.log(mainList);
