import App from './App.html';
import io from 'socket.io-client';

/*
 * Retirement planning
 * Once the live blog is no longer used create a json file the exports the full
 * object. Import it here and pass it into the app startup.
 * You might want to remove the socket dependency after this
 */
const appData = {
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
		honi: [],
		nus: [],
		pres: []
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
