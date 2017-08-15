'use strict';

// Click handler for #newTrackingSubmit
$('#newTrackingSubmit').on('click', function(){
	// get current user data
	var user_id = JSON.parse(localStorage.getItem('currentUser')).user_id;

	// Get values from input via Package function (getNewTrackingNum())
	// Then pass the value to model function to add to database
	createTrackingNum(user_id, getNewTrackingNum(), function(){
		//Refresh display list.
	}

})