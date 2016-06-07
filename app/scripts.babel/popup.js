'use strict';

window.addEventListener('DOMContentLoaded', () => {

	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, (tabs) => {
		chrome.tabs.sendMessage(
			tabs[0].id,
			{from: 'popup', subject: 'XDebugErrors'},
			(info) => {
				console.log(info);
				document.querySelector('.content').innerHTML = info;
			}
		);
	}); 
});