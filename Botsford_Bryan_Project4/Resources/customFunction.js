var imageFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageFiles = imageFolder.getDirectoryListing();
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var itemCount = 30;
var rowCount = 4;
var margin = 10;
var trueCanvasWidth = pWidth - margin - margin - itemCount;
var size = trueCanvasWidth / rowCount;


var win = Ti.UI.createWindow({
	backgroundColor: "#fff",
	layout: 'vertical',
});
var win2 = Ti.UI.createWindow({
	backgroundColor: "#fff",
	layout: 'vertical',
});
var win3 = Ti.UI.createWindow({
	backgroundColor: "#fff",
});


// Image Variables 
////
// View Height Variable
var vHeight = 115;
////
// Custom Function window to Navigate
var shopWindow = Ti.UI.createWindow({
	backgroundColor: "#fff",
	title: "Order Summary"
});
////
//Array
var shopArray = ["Name","Length", "Waist"];
////
// Event Listener to navigate to customWindow
customButton.addEventListener("click", function(){
	navWindow.openWindow(customWindow, {animated: true});
	// Name Field
	var nameView = Ti.UI.createView({
		backgroundColor: "#fff",
		height: vHeight,
		top: 0,
	});
	var nameLabel = Ti.UI.createLabel({
		text: "Please Select Your Jean",
		font: {fontSize: 10, fontFamily: "Arial", fontWeight: "bold"},
		left: 5,
		top: 0
	});
	var pictureLabel = Ti.UI.createLabel({
		text: "Select",
		font: {fontSize: 16, fontFamily: "Arial", fontWeight: "bold"},
		backgroundColor: "#dbdbdb",
		color: "#6a0000",
		borderColor: "#fff",
		right: 5,
		left: 5,
		top: 10,
		height: 80,
		textAlign: "center"
	});
	pictureLabel.addEventListener("click", function(){
		var picWindow = Ti.UI.createWindow({
			backgroundColor: "#fff",
			title: "Jean Images",
			layout: "horizontal",
		});
		var border = Ti.UI.createView ({
			backgroundColor: "#6a0000",
			height: 1,
			width: pWidth,
			top: 20,
		});
		var viewContainer = Ti.UI.createScrollView({
			top: 0, //because of the horizontal layout.
			width: pWidth,
			backgroundColor: "#dedede",
			height: pHeight - border.top - border.height - margin - margin - margin,
			layout: "horizontal",
			contentWidth: pWidth,
			showVerticalScrollIndicator: true,
		});
			// Loop
			for(var i = 0; i < imageFiles.length; i++){
				var view = Ti.UI.createView({
					top: margin,
					left: margin,
					width: size,
					height: size,
				});
				var newImage = Ti.UI.createImageView({
					image: "images/" + imageFiles[i],
					width: size,
					height: size,
					text: imageFiles[i]
				});
				view.add(newImage);
				viewContainer.add(view);
				newImage.addEventListener("click", function(){
					picWindow.close();
					pictureLabel.text = this.text.replace(/(\.[^/.]+)+$/, "");;
				});
			};
	picWindow.add(border, viewContainer);
	picWindow.open();
	});
	nameView.add(nameLabel, pictureLabel);
	////
	// Length Field
	var lengthView = Ti.UI.createView({
		backgroundColor: "#fff",
		height: vHeight,
		top: nameView.top + nameView.height,
	});
	var lengthLabel = Ti.UI.createLabel({
		text: "Select your Length",
		font: {fontSize: 10, fontFamily: "Arial", fontWeight: "bold"},
		left: 5,
		top: 0,
	});
	var lengthInput = Ti.UI.createLabel({
		text: "Select",
		font: {fontSize: 16, fontFamily: "Arial", fontWeight: "bold"},
		backgroundColor: "#dbdbdb",
		color: "#6a0000",
		borderColor: "#fff",
		right: 5,
		left: 5,
		top: 10,
		height: 80,
		textAlign: "center"
	});
	// Length Label Function
		lengthInput.addEventListener("click", function(){
			navWindow.openWindow(win, {animated: true});
				var picker = Ti.UI.createPicker({
				    top: 0,
				    height: 200
				});
				var closeButton = Ti.UI.createButton({
					title: "Accept",
					font: {fontSize: 12, fontFamily: "Arial", fontWeight: "bold"},
					color: "#6a0000",
					top: picker.top + picker.height + 10,
					height: 100,
					backgroundColor: "#dbdbdb",
					borderColor: "#fff",
					width: "100%"
				});
				 
				var data = [];
				data.push(Titanium.UI.createPickerRow({
				    title : "30"
				}));
				data.push(Titanium.UI.createPickerRow({
				    title : "32"
				}));
				data.push(Titanium.UI.createPickerRow({
				    title : "34"
				}));
				 
				picker.addEventListener('change', function(e) {
				    if (e.row.title == "30") {
				     lengthInput.text = e.row.title;
				    } else if (e.row.title == "32") {
				    lengthInput.text = e.row.title;
				    } else {
				    lengthInput.text = e.row.title;
				    } 
				});
				picker.add(data);
				win.add(picker, closeButton);
				closeButton.addEventListener("click", function(){
					win.close();
				});
		});
		lengthView.add(lengthLabel, lengthInput);
	////
	// Waist Field
	var waistView = Ti.UI.createView({
		backgroundColor: "#fff",
		height: vHeight,
		top: lengthView.top + lengthView.height,
	});
	var waistLabel = Ti.UI.createLabel({
		text: "Select your Waist",
		font: {fontSize: 10, fontFamily: "Arial", fontWeight: "bold"},
		left: 5,
		top: 0,
	});
	var waistInput = Ti.UI.createLabel({
		text: "Select",
		font: {fontSize: 16, fontFamily: "Arial", fontWeight: "bold"},
		backgroundColor: "#dbdbdb",
		color: "#6a0000",
		borderColor: "#fff",
		right: 5,
		left: 5,
		top: 10,
		height: 80,
		textAlign: "center"
	});
	// Waist Input Function
		waistInput.addEventListener("click", function(){
			navWindow.openWindow(win2, {animated: true});
				var picker = Ti.UI.createPicker({
					top: 0,
				    height: 200
				});
				var closeButton = Ti.UI.createButton({
					title: "Accept",
					font: {fontSize: 12, fontFamily: "Arial", fontWeight: "bold"},
					color: "#6a0000",
					top: picker.top + picker.height + 10,
					height: 100,
					backgroundColor: "#dbdbdb",
					borderColor: "#fff",
					width: "100%"
				});
				// Array 
				var data = [];
				data.push(Titanium.UI.createPickerRow({
				    title : "28"
				}));
				data.push(Titanium.UI.createPickerRow({
				    title : "29"
				}));
				data.push(Titanium.UI.createPickerRow({
				    title : "30"
				}));
				data.push(Titanium.UI.createPickerRow({
				    title : "31"
				}));
				data.push(Titanium.UI.createPickerRow({
				    title : "32"
				}));
				data.push(Titanium.UI.createPickerRow({
				    title : "33"
				}));
				data.push(Titanium.UI.createPickerRow({
				    title : "34"
				}));
				// Picker Event Listener to set waistInput Label
				picker.addEventListener('change', function(e) {
				    if (e.row.title == "28") {
				     waistInput.text = e.row.title;
				    } else if (e.row.title == "29") {
				    waistInput.text = e.row.title;
				    } else if (e.row.title == "30") {
				    waistInput.text = e.row.title;
				    } else if (e.row.title == "31") {
				    waistInput.text = e.row.title;
				    }else if (e.row.title == "32") {
				    waistInput.text = e.row.title;
				    }else if (e.row.title == "33") {
				    waistInput.text = e.row.title;
				    }else{
				    waistInput.text = e.row.title;
				    }
				});
				picker.add(data);
				win2.add(picker, closeButton);
				closeButton.addEventListener("click", function(){
					win2.close();
				});
		});
	waistView.add(waistLabel, waistInput);
	/////	
	// Accept Button
	var acceptButton = Ti.UI.createButton({
		title: "Accept",
		font: {fontSize: 12, fontFamily: "Arial", fontWeight: "bold"},
		color: "#6a0000",
		height: 31,
		bottom: 0,
		backgroundColor: "#dbdbdb",
		borderColor: "#fff",
		width: "100%"
	});
		// Event Listner For Accept Button
		acceptButton.addEventListener("click", function(){
			navWindow.openWindow(shopWindow, {animated: true});
			var shopView = Ti.UI.createView({
				backgroundColor: "#fff",
				height: 200,
				top: 0,
			});
			var submitButton = Ti.UI.createButton({
				title: "Submit",
				font: {fontSize: 12, fontFamily: "Arial", fontWeight: "bold"},
				color: "#6a0000",
				height: 31,
				bottom: 0,
				backgroundColor: "#dbdbdb",
				borderColor: "#fff",
				width: "100%"
			});
			var purchaseOrder = Ti.UI.createLabel({
				text: "Summary",
				font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
				top: 0,
			});
			var jeanOrder = Ti.UI.createLabel({
				text: "Name" + " : " + pictureLabel.text,
				font: {fontSize: 12, fontFamily: "Arial", fontWeight: "bold"},
				top: 60,
			});
			var lengthOrder = Ti.UI.createLabel({
				text: "Length" + " : " + lengthInput.text,
				font: {fontSize: 12, fontFamily: "Arial", fontWeight: "bold"},
				top: 120,
			});
			var waistOrder = Ti.UI.createLabel({
				text: "Waist" + " : " + waistInput.text,
				font: {fontSize: 12, fontFamily: "Arial", fontWeight: "bold"},
				top: 180
			});
			
			shopView.add(purchaseOrder, jeanOrder, lengthOrder, waistOrder);
			shopWindow.add(shopView, submitButton);
				submitButton.addEventListener("click", function(){
				navWindow.openWindow(win3, {animated: true});
					var thankView = Ti.UI.createView({
						backgroundColor: "#fff",
						top: 0
					});
					var thankLabel = Ti.UI.createLabel({
						text: "Thank you for your Order",
						font: {fontSize: 40, fontFamily: "Arial", fontWeight: "bold"},
						textAlign: "center"
					});
					thankView.add(thankLabel);
					win3.add(thankView);
				});
					
		});
customWindow.add(nameView, lengthView, waistView, acceptButton);
});