# Budget Planner app
[![Build Status](https://travis-ci.org/dylankenneally/budget-planner.svg?branch=master)](https://travis-ci.org/dylankenneally/budget-planner)

- A budget planner app, loosely based on [ASIC's Budget Planner](https://www.moneysmart.gov.au/tools-and-resources/calculators-and-apps/budget-planner).
- Built for fun to give me a chance to experiment with a few bits of tech I might not get to explore in my day job too thoroughly.

## Prerequisites
- [Node.js](https://nodejs.org/en/), version 10 or above is required.

## To build and run
```bash
git clone https://github.com/dylankenneally/budget-planner.git
cd budget-planner
npm install

# to run in the dev env.
npm start # will auto open your browser with the app in it

# to perform a production build
npm run build # build will be produced in './build' directory, serve via any HTTP server
```

## Tech stack in use/played with:
- React.js for the render engine
- Material UI for the UI framework/widget ste
- i18next for internationalisation and localisation
- chart.js for summary data display
- gh-pages for deployment
- travis CI for automated builds
- custom eslint setup to aid development
