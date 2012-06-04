(function() {
	tableviewwin = function(_array) {

		var win = Titanium.UI.createWindow({
			backgroundColor : 'white'
		})

		_array = JSON.parse(_array)
		Ti.API.info(_array.success)
		
		var backbutton = Titanium.UI.createButton({
			title : 'back',
			color: 'back',
			height : '40dp',
			width : '100%',
			bottom : '0dp',
			borderRadius: 0,
			backgroundImage: '/images/button-9183.png'
		})
		win.add(backbutton)

		backbutton.addEventListener('click', function() {
			win.close()
		})
		var data = [];
		var yyyarray = []
		var countarray = _array.results.length
		
		for(var i = 0; i < countarray; i++) {
		
		item = _array.results[i]
		if(item.accountName!=""){
			Ti.API.info('Waaooo')
			// 
			var sendid = [item.heading, item.body, item.images, item.price,item.accountName,item.latitudeEstimated,item.longitudeEstimated]
			//alert(item.accountName)
			var row = Ti.UI.createTableViewRow({
				data : sendid
			});
			row.addEventListener('click', function(e) {
				var item = e.rowData.data
				Ti.API.info(item)
				var detail_window = detail(item[0],item[1],item[2],item[3],item[4],item[5],item[6])
				detail_window.open()
				
			})

			row.height = 'auto';
			row.hasChild = false;
			//row.backgroundColor = 'blue';
			row.selectedBackgroundColor = '#999';
			row.filter = '12312312321',
			row.placeTitle = 'asd', 
			row.placeBody = 'asd',
			row.price = 'asdsa'
			//row.image =  'http://my.appmatrixinc.com/app/webroot/attachments/coupons/thumb/' + value.results[c].Coupon.coupon_file_path;
			//alert(row.placeLatitude);
			//alert(value.results[c].Coupon.coupon_file_path);
			
			if(item.images!=null){
				var myImg = item.images[0]
			}else{
				var myImg = null
			}
			
			//var myImg = null
			
			
			var imgView = Titanium.UI.createImageView({

				//image : 'images/table/square_icon.png',
				image : myImg,
				left : '5dp',
				top: '30dp',
				height : '60dp',
				width : '60dp',
				//defaultImage: 'images/loader/default_image.jpg',
			})
			row.add(imgView);

			// TITLE LABEL

			var label = Ti.UI.createLabel({
				text : item.heading,
				font : {
					fontSize : '16dp',
					fontWeight : 'bold',
					fontFamily : 'Helvetica Neue'
				},
				color : 'blue',
				top : '0dp',
				left : '5dp',
				width : '310dp',
				height : '30dp',
			});
			row.add(label);
			// body
			
			
			var bodycut = item.body.substring(0,200) + '...'
			
			var label2 = Ti.UI.createLabel({
				text : bodycut,
				font : {
					fontSize : '13dp',
					fontWeight : 'bold',
					fontFamily : 'Helvetica Neue'
				},
				color : '#999',
				top : '20dp',
				height : 'auto',
				width : '235',
				left : '75dp',
			});
			row.add(label2);

			var label3 = Ti.UI.createLabel({
				text : 'Distanc14.2 m',
				font : {
					fontSize : '13dp',
					fontWeight : 'bold',
					fontFamily : 'Helvetica Neue'
				},
				color : '#999',
				top : '60dp',
				height : 'auto',
				width : '235dp',
				left : '210dp',
			});
			//row.add(label3);

			var label4 = Ti.UI.createLabel({
				text : 'Status: Open',
				font : {
					fontSize : '13dp',
					fontWeight : 'bold',
					fontFamily : 'Helvetica Neue'
				},
				color : '#999',
				top : '60dp',
				height : 'auto',
				width : '235',
				left : '75dp',
			});
			//row.add(label4);

			data[i] = row;
			}
		}

		var tableviewCoupons = Titanium.UI.createTableView({
			data : data,
			backgroundColor : 'transparent',
			bottom : '40dp',
			height : 'auto',
			width : '100%',
		});

		win.add(tableviewCoupons)

		return win
	}
})()