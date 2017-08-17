'use strict';

// Set current user on the packageView
function setDisplayName(){
	// get user_name from location storage
	var user_object = JSON.parse(localStorage.getItem('currentUser'));
	var user_name = user_object[0].user_name;

	//set #nameDisplay text to that username
	$('#nameDisplay').text(user_name);
}

// Get user input for a new package
function getNewPackageData(){
	var tracking_num = $('#newTrackingNum').val();
	var carrier_id = $('#addNewPackage select').val();
	console.log({tracking_num: tracking_num, carrier_id: parseInt(carrier_id)});
	return {tracking_num: tracking_num, carrier_id: parseInt(carrier_id)};

}

function displayPackagesForUser(obj_array){
	obj_array.forEach(function(element){
		// handlebars template
	})
}
