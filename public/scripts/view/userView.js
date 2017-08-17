'use strict';

// Function to get value from new user input box
function getNewUserValue() {
	var user_name = $('#newUserField').val();
	$('#newUserField').val('');
	return user_name;
}

// Function to get value from select user drop down
function getSelectUserValue(){
	return $('#signIn select').val();
}
