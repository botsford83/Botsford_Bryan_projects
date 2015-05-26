// Image Variables 
var imageFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageFiles = imageFolder.getDirectoryListing();
var imageArray = 0;
////
// Function to create the second page.
galleryButton.addEventListener("click", function(){
	navWindow.openWindow(galleryWindow, {animated: true});
	var newImageView = Ti.UI.createView({
		backgroundColor: "white",
		height: 400,
		top: 20,
		width: "100%",
	});
	var newImage = Ti.UI.createImageView({
		image: "/images/Affliction_Black_Premium_Blake_Jean.jpg",
		width: 300,
		height: 300,
	});
	newImageView.add(newImage);
	var newImageButton = Ti.UI.createLabel({
		text: "Next Image",
		font: {fontSize: 20, fontFamily: "Arial Black", fontWeight: "bold"},
		textAlign: "center",
		top: newImageView.top + newImageView.height + 20
	});
	for(var i = 1; i < imageFiles.length; i++){
		var newImageFunction = function(){
			if(imageArray == 6){
				imageArray = 0;
			}
				else{
					imageArray++;
				}
				newImage.image = "images/" + imageFiles[imageArray];
		};
	};
	// Event Listener to cycle through images
	newImageButton.addEventListener("click", newImageFunction);
	////
	// Add and open Window
	galleryWindow.add(newImageButton, newImageView);
});
