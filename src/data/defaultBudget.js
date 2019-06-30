import i18next from 'i18next';

let categories = [
	{
		id: 'Income',
		positive: true,
		entries: [
			{ id: 'Your take - home pay' },
			{ id: 'Your partner\'s take-home pay ' },
			{ id: 'Bonuses & overtime' },
			{ id: 'Income from savings & investments' },
			{ id: 'Centrelink benefits' },
			{ id: 'Family benefit payments' },
			{ id: 'Child support received' },
			{ id: 'Other' },
		],
	},
	{
		id: 'Home & utilities',
		entries: [
			{ id: 'Mortgage & rent' },
			{ id: 'Body corporate fees' },
			{ id: 'Council rates' },
			{ id: 'Furniture & appliances' },
			{ id: 'Renovations & maintenance' },
			{ id: 'Electricity' },
			{ id: 'Gas' },
			{ id: 'Water' },
			{ id: 'Internet' },
			{ id: 'Pay TV' },
			{ id: 'Home phone' },
			{ id: 'Mobile' },
			{ id: 'Other' },
		],
	},
	{
		id: 'Insurance & financial',
		entries: [
			{ id: 'Car insurance' },
			{ id: 'Home & contents insurance' },
			{ id: 'Personal & life insurance' },
			{ id: 'Health insurance' },
			{ id: 'Car loan' },
			{ id: 'Credit card interest' },
			{ id: 'Other loans' },
			{ id: 'Paying off debt' },
			{ id: 'Savings' },
			{ id: 'Investments & super contributions' },
			{ id: 'Charity donations' },
			{ id: 'Other' },
		],
	},
	{
		id: 'Groceries',
		entries: [
			{ id: 'Supermarket' },
			{ id: 'Butcher' },
			{ id: 'Fruit & veg market' },
			{ id: 'Fish shop' },
			{ id: 'Deli & bakery' },
			{ id: 'Pet food' },
			{ id: 'Other' },
		],
	},
	{
		id: 'Personal & medical',
		entries: [
			{ id: 'Cosmetics & toiletries' },
			{ id: 'Hair & beauty' },
			{ id: 'Medicines & pharmacy' },
			{ id: 'Glasses & eye care' },
			{ id: 'Dental' },
			{ id: 'Doctors & medical' },
			{ id: 'Hobbies' },
			{ id: 'Clothing & shoes' },
			{ id: 'Jewellery & accessories' },
			{ id: 'Computers & gadgets' },
			{ id: 'Sports & gym' },
			{ id: 'Education' },
			{ id: 'Pet care & vet' },
			{ id: 'Other' },
		],
	},
	{
		id: 'Entertainment & eat - out',
		entries: [
			{ id: 'Coffee & tea' },
			{ id: 'Lunches - bought' },
			{ id: 'Take - away & snacks' },
			{ id: 'Cigarettes' },
			{ id: 'Drinks & alcohol' },
			{ id: 'Bars & clubs' },
			{ id: 'Restaurants' },
			{ id: 'Books' },
			{ id: 'Newspaper & magazines' },
			{ id: 'Movies & music' },
			{ id: 'Holidays' },
			{ id: 'Celebrations & gifts' },
			{ id: 'Other' },
		],
	},
	{
		id: 'Transport & auto',
		entries: [
			{ id: 'Bus & train & ferry' },
			{ id: 'Petrol' },
			{ id: 'Road tolls & parking' },
			{ id: 'Rego & licence' },
			{ id: 'Repairs & maintenance' },
			{ id: 'Fines' },
			{ id: 'Airfares' },
			{ id: 'Other' },
		],
	},
	{
		id: 'Children',
		entries: [
			{ id: 'Baby products' },
			{ id: 'Toys' },
			{ id: 'Babysitting' },
			{ id: 'Childcare' },
			{ id: 'Sports & activities' },
			{ id: 'School fees' },
			{ id: 'Excursions' },
			{ id: 'School uniforms' },
			{ id: 'Other school needs' },
			{ id: 'Child support payment' },
			{ id: 'Other' },
		],
	},
];

// add a default amount to each item
categories.forEach(category => {
	category.entries = category.entries.map(v => {
		return { ...v, amount: 0 };
	});
});

// when i18next is available, apply the localised string title
i18next.on('initialized', () => {
	categories.forEach(category => {
		category.title = i18next.t(category.id);
		category.entries = category.entries.map(v => {
			return { ...v, title: i18next.t(v.id) };
		});
	});
});

export default categories;
