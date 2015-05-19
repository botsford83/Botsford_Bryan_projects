var imageFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageFiles = imageFolder.getDirectoryListing();
console.log(imageFiles);

////
//
////
//Functions
var galleryDisplay = function(){
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var itemCount = 30;
var rowCount = 4;
var margin = 10;
var trueCanvasWidth = pWidth - margin - margin - itemCount;
console.log(trueCanvasWidth);
var size = trueCanvasWidth / rowCount;
console.log(size);
	var secondWindow = Ti.UI.createWindow({
		backgroundColor: "white",
		layout: "horizontal",
	});
	var border = Ti.UI.createView ({
		backgroundColor: "#2550f1",
		height: 1,
		width: pWidth,
		top: 20,
	});
	var viewContainer = Ti.UI.createScrollView({
		top: 0, //because of the horizontal layout.
		width: pWidth,
		backgroundColor: "#dedede",
		height: pHeight - border.top - border.height,
		layout: "horizontal",
		contentWidth: pWidth,
		showVerticalScrollIndicator: true,
	});
	var closeButton = Ti.UI.createLabel({
		text: "Close Window",
		backgroundColor: "blue",
		color: "#fff",
		height: 20,
		font: {fontSize: 12, fontFamily: "Arial", fontWeight: "bold"},
		width: "100%",
		textAlign: "center",
		bottom: 0
	});
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
			});
				console.log(imageFiles[i]);
				view.add(newImage);
				viewContainer.add(view);
		};
	var closeWindow = function(){
		secondWindow.close();
	};		
	
//EventListeners
closeButton.addEventListener("click", closeWindow);
//Opening
secondWindow.add(border, viewContainer, closeButton);
secondWindow.open();
};
openGalleryButton.addEventListener("click", galleryDisplay);