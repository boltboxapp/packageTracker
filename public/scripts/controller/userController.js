'use strict';

// Event Handler for #newUserField
$('#newUserSubmit').on('click', function(){
	// Get value from input via View function (getNewUserValue())
	// Then pass the value to model function to add to database
	createUser(getNewUserValue(), function(results){
		// now that we have the user information, and it has already been set to the current user in local storage:
		// This is the point in the flow where we would want to hide the select user section and show the track packages section
		setDisplayName();
	});

})

// Event Handler for #selectUserField
$('#selectUserSubmit').on('click', function(){
	// Get value from dropdown via View function (getSelectUserValue())
	// Then pass the value to model function to grab that user's info from the database
	geteUserById(getSelectUserValue(), function(results){
		// now that we have the user information, and it has already been set to the current user in local storage:
		// This is the point in the flow where we would want to hide the select user section and show the track packages section
		setDisplayName();
	});
})
