(function(){


detail = function(_title,_body,_image,_price){

	var win = Titanium.UI.createWindow({  
		//backgroundImage: 'images/events.png'
		//
		title: "Detail",
		fullscreen : false,
		navBarHidden : true,
		//backgroundColor: 'black',
		orientationModes : [Titanium.UI.PORTRAIT, Titanium.UI.UPSIDE_PORTRAIT]
		//navBarHidden : true,
	});

	var mainview = Titanium.UI.createView({
		backgroundColor: 'black',
		height: '100%',
		width: '100%',
		layout: 'vertical',
		//backgroundColor: 'black'
	})
	win.add(mainview)

	var backbutton = Titanium.UI.createButton({
		title: 'back',
		height: '35dp',
		width: '95dp',
		top: '5dp',
		bottom: '5dps',
		left: '5dp',
	})
	mainview.add(backbutton)

	backbutton.addEventListener('click', function(){
		win.close()
	})


	var mainscrollview = Titanium.UI.createScrollView({
		contentHeight: 'auto',
		height: '100%',
		width: '100%',
		backgroundColor: 'white'
	})
	mainview.add(mainscrollview)

	var image = Titanium.UI.createImageView({
		top: '35dp',
		left: '5dp',
		image: _image,
		height: '100dp',
		width: '100dp'
	})
	mainscrollview.add(image)
	var titlelabel = Titanium.UI.createLabel({
		text: _title,
		color: 'black',
		top: '5dp',
		left: '10dp',
		height: 'auto',
		width: '310dp'
	})
	mainscrollview.add(titlelabel)

	var bodylabel = Titanium.UI.createLabel({
		text: _body,
		color: 'black',
		top: '135dp',
		left: '10dp',
		height: 'auto',
		width: '310dp'
	})
	mainscrollview.add(bodylabel)

	return win
	}
	
})()