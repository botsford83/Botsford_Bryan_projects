// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');
//
///
//Main Window//
var mainWindow = Ti.UI.createWindow({
	backgroundImage: "940_448_Buckle_Logo_Store_Front_002_1585.jpg",
});
var border = Ti.UI.createView({
	backgroundColor: "#6a0000",
	height: 1,
	top: 20,
});
var titleView = Ti.UI.createView({
	backgroundColor: "#6a0000",
	borderRadius: 20,
	borderWidth: 1,
	height: 50,
	bottom: 10,
	width: "100%",
});
var openGalleryButton = Ti.UI.createLabel({
	text: "Enter Jeans Gallery",
	font: {fontSize: 18, fontFamily: "Arial Black", fontWeight: "bold"},
	top: titleView.height - titleView.top,
	width: "100%",
	textAlign: "center",
	top: "auto",
});


//JavaScript Files
var load = require("app2");
//openGalleryButton.addEventListener("click", galleryDisplay);
titleView.add(openGalleryButton);
mainWindow.add(titleView, border);
mainWindow.open();
