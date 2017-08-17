'use strict';

// Click handler for #newTrackingSubmit
$('#newTrackingSubmit').on('click', function(){
	// get current user data
	var user_id = JSON.parse(localStorage.getItem('currentUser'))[0].user_id;

	// Get values from input via Package function (getNewPackageData())
	// Then pass the value to model function to add to database
	createTrackingNum(user_id, getNewPackageData(), function(){
		//Refresh display list.
	});

})
