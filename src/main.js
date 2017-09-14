import App from './App.html';
import io from 'socket.io-client';

/*
 * Retirement planning
 * Once the live blog is no longer used create a json file the exports the full
 * object. Import it here and pass it into the app startup.
 * You might want to remove the socket dependency after this
 */
const appData = {
	displayResults: '1',
	results: {
		blog: [
			{
				heading: 'Loading',
				meta: 'Right damn now',
				body: '<p>Loading</p>',
				published: '1',
				important: '',
			},
		],
		copy: [{
			title: 'default',
		}],
		council: [
			{ faction: 'surprise' }
		],
		honi: [
			{
			},
			{
			},
			{
			},
			{
			},
			{
			},
			{
			},
			{
			},
			{
			},
			{
				mint: '1',
				heat: '1',
			},
			{
				mint: '1',
				heat: '1',
			},
			{
				mint: '1',
				heat: '1',
			},
			{
				mint: '1234',
				heat: '2345',
			},
		],
		nus: [],
		pres: [
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{
				pytka: '1',
				pytkapercent: '0.5',
				grant: '1',
				grantpercent: '0.5',
				ma: '1',
				maapercent: '0.5',
				informal: '1',
				informalpercent: '0.5',
			},
		]
	},
};

window.app = new App({
	target: document.body,
	// Pass data from the static file in here when the app is retired
	data: appData,
});

// When any new data is received it's passed down the component chain
const socket = io('localhost:5000');

socket.on('data', function(data){
	console.log(data);
	window.app.set({'results': data});
});
