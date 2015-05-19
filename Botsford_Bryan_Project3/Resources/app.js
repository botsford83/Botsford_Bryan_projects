// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');
//
///
//Main Window//
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#4c4c4c"
	//backGroundImage: ""
});
var titleView = Ti.UI.createView({
	backgroundColor: "white",
	borderColor: "#2550f1",
	borderRadius: 20,
	borderWidth: 1,
	height: 100,
	top: mainWindow.top / 2,
	left: 20,
	right: 20,
});
var border = Ti.UI.createView({
	backgroundColor: "#6a0000",
	height: 1,
	top: 20,
});
var openGalleryButton = Ti.UI.createLabel({
	text: "Jeans",
	font: {fontSize: 30, fontFamily: "Arial Black", fontWeight: "bold"},
	top: titleView.height - titleView.top,
	width: "100%",
	textAlign: "center"
});


//JavaScript Files
var load = require("galleryDisplay");
//openGalleryButton.addEventListener("click", galleryDisplay);
titleView.add(openGalleryButton);
mainWindow.add(titleView, border);
mainWindow.open();