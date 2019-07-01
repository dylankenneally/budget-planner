const higTheme = {
	overrides: {
		MuiAppBar: {
			colorDefault: {
				backgroundColor: '#fafafa',
				borderBottom: '1px rgba(0,0,0,0.2) solid',
			}
		},

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

		MuiExpansionPanelDetails: {
			root: {
				display: 'unset',
			}
		},
	},
};

export default higTheme;
