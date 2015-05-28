var imageFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageFiles = imageFolder.getDirectoryListing();
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var itemCount = 30;
var rowCount = 4;
var margin = 10;
var trueCanvasWidth = pWidth - margin - margin - itemCount;
var size = trueCanvasWidth / rowCount;

pictureLabel.addEventListener("click", function(){
	var picWindow = Ti.UI.createWindow({
		backgroundColor: "#fff",
		title: "Jean Images"
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
		};
picWindow.add(border, viewContainer, closeButton);
picWindow.open();
});