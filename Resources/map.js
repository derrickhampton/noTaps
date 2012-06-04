(function() {
	map = function(_lat,_long) {

		var win = Titanium.UI.createWindow({
			//backgroundImage: '/images/events.png',
			title : "Map",
			backgroundColor : 'silver',
			fullscreen : false,
			navBarHidden : true,
			orientationModes : [Titanium.UI.PORTRAIT, Titanium.UI.UPSIDE_PORTRAIT]
			//navBarHidden : true,
		});
		
		
		
		var mountainView = Titanium.Map.createAnnotation({
			latitude : _lat,
			longitude : _long,
			title : "Vehicle on the Map",
			//subtitle : 'Mountain View, CA',
			pincolor : Titanium.Map.ANNOTATION_RED,
			animate : true,
			leftButton : '../images/appcelerator_small.png',
			myid : 1 // Custom property to uniquely identify this annotation.
		});
		
		var mapview = Titanium.Map.createView({
			mapType : Titanium.Map.STANDARD_TYPE,
			region : {
				latitude : current_lat,
				longitude : current_long,
				latitudeDelta : 0.3,
				longitudeDelta : 0.3
			},
			animate : true,
			userLocation: true,
			regionFit : true,
			userLocation : true,
			annotations : [mountainView]
		});
		win.add(mapview)

		mapview.addEventListener('click', function(evt) {

			Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);

			// Check for all of the possible names that clicksouce
			// can report for the left button/view.
			if(evt.clicksource == 'leftButton' || evt.clicksource == 'leftPane' || evt.clicksource == 'leftView') {
				Ti.API.info("Annotation " + evt.title + ", left button clicked.");
			}
		});
		
		var backbutton = Titanium.UI.createButton({
			title : 'back',
			height : '40dp',
			width : '100%',
			color: 'black',
			bottom : '0dp',
			left : '0dp',
			borderRadius : 0,
			backgroundImage : '/images/button-9183.png'
		})
		win.add(backbutton)
		
		backbutton.addEventListener('click', function() {
			win.close()
		})
		
		return win

	}
})()