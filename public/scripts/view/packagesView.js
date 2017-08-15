'use strict';

// Set current user on the packageView
function setDisplayName(){
	// get user_name from location storage
	console.log('setDisplayName running...');
	var user_name = JSON.parse(localStorage.getItem('currentUser')).user_name;
	console.log(user_name);
	//set #nameDisplay text to that username
	$('#nameDisplay').text(user_name);
}

setDisplayName();