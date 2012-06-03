// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');


var current_lat = ""
var current_long = ""


var current_year = ""
var current_search = ""
var current_city = ""
var current_city_code = ""

var tablearray = []

Titanium.include("dashboard.js", "resultsview.js", "library.js","city.js","detail.js")


getlocation = function() {

	var geotest = Titanium.Geolocation.getCurrentPosition(function(e) {
		if(e.error) {
			Titanium.API.info("error: " + JSON.stringify(e.error));
			return;
		}
		current_lat = e.coords.latitude
		current_long = e.coords.longitude

		var longitude = e.coords.longitude;
		var latitude = e.coords.latitude;
		var altitude = e.coords.altitude;
		var heading = e.coords.heading;
		var accuracy = e.coords.accuracy;
		var speed = e.coords.speed;
		var timestamp = e.coords.timestamp;
		var altitudeAccuracy = e.coords.altitudeAccuracy;

	});
}
getlocation()


var win1 = Titanium.UI.createWindow({
	//title:'Tab 1',
	backgroundColor : 'yellow'
});

var caryears = []

for(var i=2012; i>1979; i--){
	caryears.push(i)
}

win1.open()

var dashboard_window = dashboard_pabel()
dashboard_window.open()



