(function() {
	dashboard_pabel = function() {
		var win = Titanium.UI.createWindow({
			//title : 'Tab 1',
			//backgroundColor : 'white'
			backgroundImage : '/images/background.png'
		})

		var vview = Titanium.UI.createView({
			height : '100%',
			width : '100%',
			layout : 'vertical'
		})
		win.add(vview)

		var inputfield = Titanium.UI.createTextField({
			hintText : 'Car name',
			paddingLeft : 10,
			backgroundImage : '/images/field.png',
			top : '120dp',
			text : 'test',
			height : '50dp',
			width : '80%',
			//backgroundColor : 'silver',
			borderRadius : 5
		})
		vview.add(inputfield)

		inputfield.addEventListener('change', function(e) {
			current_search = e.value
			Ti.API.info(current_search)
		})
		var yearinput = Titanium.UI.createLabel({
			text : '  Select year',
			height : '50dp',
			width : '80%',
			paddingLeft : 10,
			top : '5dp',
			backgroundImage : '/images/field.png',
		})
		vview.add(yearinput)

		var dialog = Titanium.UI.createOptionDialog({
			title : 'Make or model',
			options : caryears,
			//cancel : 13
		});
		dialog.addEventListener('click', function(e) {
			Ti.API.info(e)
			//if(caryears[JSON.stringify(e.index)] != "Cancel") {
				current_year = caryears[JSON.stringify(e.index)]
				//alert(e.index)
				//alert(current_year)
				
				yearinput.setText("  " + current_year)
			//}

		})

		yearinput.addEventListener('click', function() {
			dialog.show();
		})

		win.addEventListener('focus', function() {

		})
		var cityinput = Titanium.UI.createLabel({
			text : '  Select city',
			height : '50dp',
			width : '80%',
			paddingLeft : 10,
			top : '5dp',
			backgroundImage : '/images/field.png',
		})
		vview.add(cityinput)

		cityinput.addEventListener('click', function() {
			var city_window = city()
			city_window.open()

			city_window.addEventListener('close', function() {
				cityinput.setText("  " + current_city)
			})
		})
		var search_button = Titanium.UI.createButton({
			title : 'Search',
			top : '5dp',
			width : '80%',
			height : '50dp',
			color : 'black',
			paddingLeft : 10,
			backgroundImage : '/images/field.png',
		})
		vview.add(search_button)

		search_button.addEventListener('click', function(e) {

			var url = "http://api.3taps.com/search?source=CRAIG&heading=" + current_year + "+AND+" + current_search + "&category=&rpp=3&VAUT&location=" + current_city_code + "&authID=fvgycnhm77ws3keyh7e4w82u";
			//var url = "http://api.3taps.com/search?source=CRAIG&heading=GMC+AND+2011&category=VAUT&location=&authID=fvgycnhm77ws3keyh7e4w82u"
			//var url = "http://api.3taps.com/search?source=CRAIG&heading=Porsche&category=VAUT&rpp=2&location=sac&authID=fvgycnhm77ws3keyh7e4w82u"
			//var url = "http://localhost"
			Ti.API.info(url)
			var client = Ti.Network.createHTTPClient({
				onload : function(e) {

					Ti.API.info("Received text: ");
					var tableview_window = tableviewwin(this.responseText)
					tableview_window.open()

				},
				onerror : function(e) {
					Ti.API.debug(e.error);
					alert('error');
				},
				timeout : 50000
			});
			client.open("GET", url);
			client.send();

		})
		return win
	}
})()