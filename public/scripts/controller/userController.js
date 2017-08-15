'use strict';
// Event Handler for #newUserField
$('#newUserSubmit').on('click', function(){
	console.log("inside click handler")
	// createUser(getNewUserValue());
	getAllUsers();
	// pass value to model function to add to database
})