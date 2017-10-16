import App from './App.html';
import pym from 'pym.js';

// Retirement: we import a .json file of the final data and pass it as data
// so I can turn the streaming server off
import retirementData from './frozen-data.json';

// Set up the responsive iframe
const pymChild = new pym.Child({ renderCallback: () => { console.log('pym!');}, polling: 500 });
pymChild.sendHeight();

/*
 * Retirement: Now we are no longer live, static data is passed to the app
 */
const appData = {
	newData: false,
	hasConnection: true,
	colors: {
	  "Grassroots": "#81c784",
	  "Independent": "#fff176",
	  "Labor": "#e57373",
	  "Liberals": "#42a5f5",
	  "Mod Libs": "#4fc3f7",
	  "NLS": "#a1887f",
	  "SLS": "#ffb74d",
	  "Socialist Alternative": "#9575cd",
	  "Solidarity": "#f06292",
	  "Unity": "#7986cb",
	  "Mint": "#71d39d",
	  "Heat": "#ff4c3f",
	  "Blank": "#eeeeee"
	},
	results: retirementData,
};

window.app = new App({
	target: document.body,
	// Pass data from the static file in here when the app is retired
	data: appData,
});

window.app.on('sendTheHeight', event => {
	pymChild.sendHeight();
});
