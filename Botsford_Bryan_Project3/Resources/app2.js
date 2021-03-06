var imageFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageFiles = imageFolder.getDirectoryListing();
console.log(imageFiles);
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var itemCount = 30;
var rowCount = 4;
var margin = 10;
var trueCanvasWidth = pWidth - margin - margin - itemCount;
var size = trueCanvasWidth / rowCount;
////
//Functions
var galleryDisplay = function(){
	var secondWindow = Ti.UI.createWindow({
		backgroundColor: "white",
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
					
					var maxxWindow = function(){
						var maxViewWindow = Ti.UI.createWindow({
							backgroundColor: "white",
						});
						var maxImage = Ti.UI.createImageView({
							image: this.image,
							width: 300,
							height: 300,
							top: 40
						});
						var maxLabel = Ti.UI.createLabel({
							text: this.text,
							height: 20,
							width: "100%",
							top: maxImage.top + maxImage.height + margin,
							font: {fontSize: 12, fontFamily: "Arial", fontWeight: "bold"},
							textAlign: "center"
						});
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
							var closeWindow = function(){
								maxViewWindow.close();
							};
						closeButton.addEventListener("click", closeWindow);
						maxViewWindow.add(maxLabel, maxImage, closeButton);
						maxViewWindow.open();
					};		
					view.add(newImage);
					viewContainer.add(view);
					newImage.addEventListener("click", maxxWindow);
				};

						var closeWindow = function(){
							secondWindow.close();
						};		
//EventListeners

//Opening
					secondWindow.add(border, viewContainer, closeButton);
					secondWindow.open();
					closeButton.addEventListener("click", closeWindow);
};






openGalleryButton.addEventListener("click", galleryDisplay);