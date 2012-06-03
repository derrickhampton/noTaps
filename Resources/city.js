(function() {
	city = function() {
		var win = Titanium.UI.createWindow({
			//title : 'Tab 1',
			backgroundColor : 'white'
		})
	var search = Titanium.UI.createSearchBar({
		showCancel : true
	});
	// create table view
	var tableview = Titanium.UI.createTableView({
		data : citylist,
		search : search,
		filterAttribute : 'title'
	});
	
	
	tableview.addEventListener('click', function(e){
		Ti.API.info(JSON.stringify(e))
		current_city_code = e.row.id
		current_city = e.row.title
		
		win.close()
	})
	
	win.add(tableview)
	return win
	}
})()