let categories = [
	{
		title: 'Income',
		positive: true,
		entries: [
			{ title: 'Your take - home pay' },
			{ title: 'Your partner\'s take-home pay ' },
			{ title: 'Bonuses & overtime' },
			{ title: 'Income from savings & investments' },
			{ title: 'Centrelink benefits' },
			{ title: 'Family benefit payments' },
			{ title: 'Child support received' },
			{ title: 'Other' },
		],
	},

/*
	{
		title: 'Home & utilities',
		entries: [
			{ title: 'Mortgage & rent' },
			{ title: 'Body corporate fees' },
			{ title: 'Council rates' },
			{ title: 'Furniture & appliances' },
			{ title: 'Renovations & maintenance' },
			{ title: 'Electricity' },
			{ title: 'Gas' },
			{ title: 'Water' },
			{ title: 'Internet' },
			{ title: 'Pay TV' },
			{ title: 'Home phone' },
			{ title: 'Mobile' },
			{ title: 'Other' },
		],
	},
	{
		title: 'Insurance & financial',
		entries: [
			{ title: 'Car insurance' },
			{ title: 'Home & contents insurance' },
			{ title: 'Personal & life insurance' },
			{ title: 'Health insurance' },
			{ title: 'Car loan' },
			{ title: 'Credit card interest' },
			{ title: 'Other loans' },
			{ title: 'Paying off debt' },
			{ title: 'Savings' },
			{ title: 'Investments & super contributions' },
			{ title: 'Charity donations' },
			{ title: 'Other' },
		],
	},
	{
		title: 'Groceries',
		entries: [
			{ title: 'Supermarket' },
			{ title: 'Butcher' },
			{ title: 'Fruit & veg market' },
			{ title: 'Fish shop' },
			{ title: 'Deli & bakery' },
			{ title: 'Pet food' },
			{ title: 'Other' },
		],
	},
	{
		title: 'Personal & medical',
		entries: [
			{ title: 'Cosmetics & toiletries' },
			{ title: 'Hair & beauty' },
			{ title: 'Medicines & pharmacy' },
			{ title: 'Glasses & eye care' },
			{ title: 'Dental' },
			{ title: 'Doctors & medical' },
			{ title: 'Hobbies' },
			{ title: 'Clothing & shoes' },
			{ title: 'Jewellery & accessories' },
			{ title: 'Computers & gadgets' },
			{ title: 'Sports & gym' },
			{ title: 'Education' },
			{ title: 'Pet care & vet' },
			{ title: 'Other' },
		],
	},
	{
		title: 'Entertainment & eat - out',
		entries: [
			{ title: 'Coffee & tea' },
			{ title: 'Lunches - bought' },
			{ title: 'Take - away & snacks' },
			{ title: 'Cigarettes' },
			{ title: 'Drinks & alcohol' },
			{ title: 'Bars & clubs' },
			{ title: 'Restaurants' },
			{ title: 'Books' },
			{ title: 'Newspaper & magazines' },
			{ title: 'Movies & music' },
			{ title: 'Holidays' },
			{ title: 'Celebrations & gifts' },
			{ title: 'Other' },
		],
	},
	{
		title: 'Transport & auto',
		entries: [
			{ title: 'Bus & train & ferry' },
			{ title: 'Petrol' },
			{ title: 'Road tolls & parking' },
			{ title: 'Rego & licence' },
			{ title: 'Repairs & maintenance' },
			{ title: 'Fines' },
			{ title: 'Airfares' },
			{ title: 'Other' },
		],
	},
	{
		title: 'Children',
		entries: [
			{ title: 'Baby products' },
			{ title: 'Toys' },
			{ title: 'Babysitting' },
			{ title: 'Childcare' },
			{ title: 'Sports & activities' },
			{ title: 'School fees' },
			{ title: 'Excursions' },
			{ title: 'School uniforms' },
			{ title: 'Other school needs' },
			{ title: 'Child support payment' },
			{ title: 'Other' },
		],
	},

*/
];

// add a default amount to each item, at some point this will need to come from persistent storage
categories.forEach(category => {
	category.entries = category.entries.map(v => { return { ...v, amount: 1 }});
});

export default categories;
