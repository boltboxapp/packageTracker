'use strict';

// populate list of packages based on the current user_id

// get package info from input box and create a package

// Add package to database
function createTrackingNum(user_id, tracking_obj, callback){
	$.ajax({
		url: '/addPackageByUser',
		method: 'POST',
		data: {user_id: user_id, tracking_num: tracking_obj.tracking_num, carrier_id: tracking_obj.carrier_id}
	})
    .then(function(results){
    	console.log(results);
    	callback(results);
    });
}