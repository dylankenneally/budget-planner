const higTheme = {
	overrides: {
		MuiInput: {
			underline: {
				'&:before': {
					borderBottom: 'none',
				},
				'&:after': {
					borderBottom: 'none',
				},
			},
		},

		MuiMenuItem: {
			root: {
				minHeight: '24px',
			},
		},
	},
};

export default higTheme;
