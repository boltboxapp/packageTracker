'use strict';

// populate dropdown menu with usernames
function getAllUsers(callback){
	console.log("inside getAllUsers function")
	$.get('/getUsers', function(){
		console.log("Inside controller get");
	})
	.this(function(){
		console.log(results);
    	callback(results);
	});
}

// get username from input box and create a user
function createUser(user_name, callback){
	$.ajax({
		url: '/addUser',
		method: 'POST',
		data: {user_name: user_name}
	})
    .then(function(results){
    	localStorage.setItem('currentUser', JSON.stringify(results));
    	callback(results);
    });
}

// get a user by the user_id
function geteUserById(user_id, callback){
	$.ajax({
		url: '/getUserByID',
		method: 'GET',
		data: {user_id: user_id}
	})
    .then(function(results){
    	console.log(results);
    	localStorage.setItem('currentUser', JSON.stringify(results));
    	callback(results);
    });
}
