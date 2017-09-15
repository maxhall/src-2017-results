import App from './App.html';
import io from 'socket.io-client';
import pym from 'pym.js';

const pymChild = new pym.Child();
/*
 * Retirement planning
 * Once the live blog is no longer used create a json file the exports the full
 * object. Import it here and pass it into the app startup.
 * You might want to remove the socket dependency after this
 */
const appData = {
	sendTheHeight: true,
	colors: {
		'NLS': '#753da6',
		'Grassroots': '#008938',
		'SLS': '#235b70',
		'Mod Libs': '#969696',
		'Liberals': '#0873a9',
		'Unity': '#de2b33',
		'Independent': '#fff000',
		'Socialist Alternative': '#d98a01',
		'Solidarity': '#ff00f0',
		'Blank': '#eeeeee',
	},
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
			displayresults: '1',
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

window.app.on('sendTheHeight', event => {
	console.log('Height sent');
	pymChild.sendHeight();
});

// When any new data is received it's passed down the component chain
const socket = io('localhost:5000');

socket.on('data', function(data){
	console.log(data);
	window.app.set({'results': data});
});
