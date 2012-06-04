(function() {
	detail = function(_title, _body, _image, _price,_email,_lat,_long) {

		var win = Titanium.UI.createWindow({
			//backgroundImage: 'images/events.png'
			//
			title : "Detail",
			
			fullscreen : false,
			navBarHidden : true,
			backgroundColor: 'white',
			orientationModes : [Titanium.UI.PORTRAIT, Titanium.UI.UPSIDE_PORTRAIT]
			//navBarHidden : true,
		});

		var mainview = Titanium.UI.createView({
			backgroundColor : 'white',
			height : '100%',
			width : '100%',
			//layout : 'vertical',
		})
		win.add(mainview)

		var backbutton = Titanium.UI.createButton({
			title : 'back',
			height : '40dp',
			width : '72%',
			color: 'black',
			bottom : '0dp',
			left : '0dp',
			borderRadius : 0,
			backgroundImage :'/images/button-9183.png'
		})
		win.add(backbutton)

		var emailbutton = Titanium.UI.createButton({
			//title : 'contact',
			height : '40dp',
			width : '40dp',
			bottom : '1dp',
			right : '47dp',
			borderRadius : 0,
			backgroundImage: '/images/contact.png'
		})
		win.add(emailbutton)

		emailbutton.addEventListener('click', function() {
			var emailDialog = Titanium.UI.createEmailDialog();
			emailDialog.subject = "Message from KrazyGuyz";
			emailDialog.toRecipients = [_email];
			emailDialog.messageBody = 'App testing: ';
			emailDialog.open();
		})
		
		
		var mapbutton = Titanium.UI.createButton({
			//title : 'contact',
			height : '40dp',
			width : '40dp',
			bottom : '1dp',
			right : '3dp',
			borderRadius : 0,
			backgroundImage: '/images/map.png'
		})
		win.add(mapbutton)
		
		mapbutton.addEventListener('click', function(){
			var map_window = map(_lat,_long) 
			map_window.open()
		})
		
		

		backbutton.addEventListener('click', function() {
			win.close()
		})
		var mainscrollview = Titanium.UI.createScrollView({
			contentHeight : 'auto',
			top : '0dp',
			height : '418dp',
			width : '100%',
			layout : 'vertical',
			backgroundColor : 'white'
		})
		mainview.add(mainscrollview)

		var titlelabel = Titanium.UI.createLabel({
			text : "$" +_price + " " + _title,
			color : 'black',
			top : '5dp',
			left : '10dp',
			height : 'auto',
			width : '310dp'
		})
		mainscrollview.add(titlelabel)

		var bodylabel = Titanium.UI.createLabel({
			text : _body,
			color : 'black',
			top : '5dp',
			left : '10dp',
			height : 'auto',
			width : '310dp'
		})
		mainscrollview.add(bodylabel)
		
		if(_image != null) {
			for(var i = 0; i < _image.length; i++) {
				var image = Titanium.UI.createImageView({
					top : '5dp',
					image : _image[i],
					height : '200dp',
					width : 'auto'
				})
				mainscrollview.add(image)
			}
		}
		return win
	}
})()