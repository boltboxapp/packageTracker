'use strict';

// Event Handler for #newUserField
$('#newUserSubmit').on('click', function(){
	console.log("inside #newUserField click handler");
	// Get value from input via View function (getNewUserValue())
	// Then pass the value to model function to add to database
	createUser(getNewUserValue());
	
})

// Event Handler for #selectUserField
$('#selectUserSubmit').on('click', function(){
	// Get value from dropdown via View function (getSelectUserValue())
	// Then pass the value to model function to grab that user's info from the database
	getUser(getSelectUserValue());
})