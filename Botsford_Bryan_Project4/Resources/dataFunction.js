// Array 
var buckleDenim = [
					{title: "Affliction Black Premium Blake Jean", price: "$99.99", image: "/images/Affliction_Black_Premium_Blake_Jean.jpg",}, 
					{title: "Big Star Vintage Pioneer Jean", price: "$109.99", image: "/images/Big_Star_Vintage_Pioneer_Jean.png"}, 
					{title: "Big Star Vintage Union Jean", price: "$79.99", image: "/images/Big_Star_Vintage_Union_Jean.jpg"},
					{title: "BKE Aaron Jean", price: "$89.99", image: "/images/BKE_Aaron_Jean.jpg"},
					{title: "BKE Aiden Jean", price: "$129.99", image: "/images/BKE_Aiden_Jean.jpg"},
					{title: "BKE Carter Jean", price: "$69.99", image: "/images/BKE_Carter_Jean.jpg"},
];
/////
// Detail Window to be open once a row is selected
var detailWindow = Ti.UI.createWindow({
	backgroundColor: "#fff",
	title: "Buckle Denim",
});
// Event lisntener to open up the dataWindow
dataButton.addEventListener("click", function(){
	navWindow.openWindow(dataWindow, {animated: true});
	// Custom Header View and Label
	var jeanHeader = Ti.UI.createView({
		height: 30,
		backgroundColor: "#878787"
	});
	var jeanText = Ti.UI.createLabel({
		text: "Buckle Denim",
		font: {fontSize: 22, fontWeight: "bold"},
		color: "#fff",
	});
	jeanHeader.add(jeanText);
	/////
	// Table View Section
	var jeanSection = Ti.UI.createTableViewSection({
		headerView: jeanHeader
	});
	/////
	// Table View
	var jeans = Ti.UI.createTableView({
		top: 0
	});
	//////
	// Loop to add rows
	for(var i = 0, j = buckleDenim.length; i < j; i++){
		//	Variable for a Row
		var jeanRow = Ti.UI.createTableViewRow({
			title: buckleDenim[i].title,
			desc: buckleDenim[i].price,
			image: buckleDenim[i].image,
			hasChild: true
		});
		////
			// Checks if the platform is running iphone OS
			if(Ti.Platform.name === "iPhone OS"){
				jeanRow.hasChild = false;
				jeanRow.hasDetail = true;
			}
			////
				// Adds the row to the section
				jeanSection.add(jeanRow);
				////
				// Event Listener to run once a row is selected
				jeanRow.addEventListener("click", function(){
					navWindow.openWindow(detailWindow, {animated: true});
					console.log(this.title);
					// Title View and Title Label
					var detailTitleView = Ti.UI.createView({
						height: 50,
						backgroundColor: "#fff",
						top: 0
					});
					var detailTitleLabel = Ti.UI.createLabel({
						text: this.title,
						font: {fontSize: 16, fontFamily: "Arial", fontWeight: "bold"},
						top: 0,
						width: "100%",
						textAlign: "center"
					});	
					detailTitleView.add(detailTitleLabel);
					/////
					var detailBorder = Ti.UI.createView({
						backgroundColor: "#dbdbdb",
						height: 1,
						top: detailTitleView.height + detailTitleView.top
					});
					// Description View and Description Label
					var detailLabelView = Ti.UI.createView({
						height: 100,
						backgroundColor: "#fff",
						top: detailTitleView.height + detailTitleView.top,
					});
					var detailText = Ti.UI.createLabel({
						text: this.desc,
						font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
						top: detailBorder.height + 40,	
						width: "100%",
						textAlign: "center",
						top: "center"
					});	
					detailLabelView.add(detailText);
					/////
					var detailImage = Ti.UI.createImageView({
						image: this.image,
						width: 300,
						height: 300,
						bottom: 0
					});
						// Adds items to the detailWindow
						detailWindow.add(detailTitleView, detailBorder, detailLabelView, detailImage);
						// Opens up the navWindow
						navWindow.open();
				});
		};
		/////
		// Adds section into an array
		var buckleSection = [jeanSection];
		/////
		// Sets the data to the array
		jeans.setData(buckleSection);
		////
		// Adds the array into the window
		dataWindow.add(jeans);
});