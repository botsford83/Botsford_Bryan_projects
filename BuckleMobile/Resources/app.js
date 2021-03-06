// Variables to get information from the image folder
var imageFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageFiles = imageFolder.getDirectoryListing();
////
// Variables to set limits for sizes
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var itemCount = 19;
var rowCount = 4;
var margin = 10;
var trueCanvasWidth = pWidth - margin - margin - itemCount;
var size = trueCanvasWidth / rowCount;
////
// Creates the initial Window
var iPadWindow = Ti.UI.createWindow({
	backgroundColor: "white",
	layout: "horizontal",
});
// iPad Window border
var border = Ti.UI.createView ({
	backgroundColor: "#6a0000",
	height: 1,
	width: pWidth,
	top: 20,
});
// View in which the images will be held w/scrollable view
var viewContainer = Ti.UI.createScrollView({
	top: 0, 
	width: pWidth,
	backgroundColor: "#dedede",
	height: pHeight - border.top - border.height - margin - margin - margin,
	layout: "horizontal",
	contentWidth: pWidth,
	showVerticalScrollIndicator: true,
});
// Close button label 
var closeButton = Ti.UI.createLabel({
	text: "Close Window",
	backgroundColor: "#6a0000",
	color: "#fff",
	height: 30,
	font: {fontSize: 12, fontFamily: "Arial", fontWeight: "bold"},
	width: "100%",
	textAlign: "center",
	bottom: pHeight - viewContainer.height,
});
	// For Statement to add the images into the container
	for(var i = 0; i < imageFiles.length; i++){
		var view = Ti.UI.createView({
			top: margin,
			left: margin,
			width: size,
			height: size,
		});
		// Creates an Image view for every image located in the array of imageFiles
		var newImage = Ti.UI.createImageView({
			image: "images/" + imageFiles[i],
			width: size,
			height: size,
			text: imageFiles[i]
		});
		// Creates a Label for the image name
		var newLabel = Ti.UI.createLabel({
			top: view.top + view.height + 2,
			left: margin,
			color: "black",
			height: 20,
			text: imageFiles[i],
			font: {fontSize: 6, fontFamily: "Arial", fontWeight: "bold"},
			textAlign: "center
		});
		// Function to open up once a image is selected
		var maxxWindow = function(){
			var maxViewWindow = Ti.UI.createWindow({
				backgroundColor: "red",
			});
			// Creates an enlarged view of the image selected
			var maxImage = Ti.UI.createImageView({
				image: this.image,
				width: 300,
				height: 300,
				top: 40
			});
			// Creates text of the image file name
			var maxLabel = Ti.UI.createLabel({
				text: this.text,
				height: 20,
				width: "100%",
				top: maxImage.top + maxImage.height + margin,
				font: {fontSize: 12, fontFamily: "Arial", fontWeight: "bold"},
				textAlign: "center"
			});
			// Close button Label
			var closeButton = Ti.UI.createLabel({
				text: "Close Window",
				backgroundColor: "#6a0000",
				color: "#fff",
				height: 30,
				font: {fontSize: 12, fontFamily: "Arial", fontWeight: "bold"},
				width: "100%",
				textAlign: "center",
				bottom: 0 
			});
// Function to close out of the Max Window
				var closeWindow = function(){
					maxViewWindow.close();
				};
// Event Listener for close button "max window"
					closeButton.addEventListener("click", closeWindow);
// Adds objects into the window	
					maxViewWindow.add(maxLabel, maxImage, closeButton);
// Opens Max Window	
					maxViewWindow.open();
		};
//  Adds the image to the view
					view.add(newImage);
//  Adds the View to the Container
					viewContainer.add(view, newLabel);
//  Event Listener to open the max window once an image is selected		
					newImage.addEventListener("click", maxxWindow);
};
// Adding objects into the second window
iPadWindow.add(border, viewContainer, closeButton);
// Opens the Second Window
iPadWindow.open();
