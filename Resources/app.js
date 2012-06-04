var current_lat = ""
var current_long = ""


var current_year = ""
var current_search = ""
var current_city = ""
var current_city_code = ""

var tablearray = []

Titanium.include("dashboard.js", "resultsview.js", "library.js","city.js","detail.js","map.js")


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
		
		Ti.API.info("I\'m at: " + current_lat + "," + current_long)
		
		Titanium.Geolocation.reverseGeocoder(current_lat,current_long,function(evt) { 
			Ti.API.info("reverse geolocation result = "+JSON.stringify(evt)); 
			//Titanium.include("library.js")
			
			for(var i=0; i<citylist.length; i++){
				
				if(evt.places[0].city==citylist[i].title){
				current_city = citylist[i].title
				current_city_code = citylist[i].id
				Ti.App.fireEvent('changecity', {name: current_city});
				
				}
			}
			
			
			
			
		});
		
	});
}
getlocation()


var caryears = []

for(var i=2012; i>1979; i--){
	caryears.push(i)
}
/*
for(var ii=0; i<41121221; i++){
	i = i + i - i
}
*/

var dashboard_window = dashboard_pabel()
dashboard_window.open()



