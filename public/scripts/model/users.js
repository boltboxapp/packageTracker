'use strict';

// populate dropdown menu with usernames
function getAllUsers(){
	console.log("inside getAllUsers function")
	$.get('/getUsers', function(){
		console.log("Inside controller get");
	});
}

// get username from input box and create a user
function createUser(user_name){
	$.ajax({
		url: '/addUser',
		method: 'POST',
		data: {user_name: user_name}
	})
    .then(console.log);
}

// get a user by the user_id
function geteUserById(user_name){
	$.ajax({
		url: '/getUserByID',
		method: 'GET',
		data: {user_name: user_name}
	})
    .then(console.log);
}