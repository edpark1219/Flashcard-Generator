var ClozeCard = function(text, cloze) {
	
	this.fullText = text;
	this.cloze = cloze;
	this.partial;

	//Test if valid input
	var validate;
	validate = this.fullText.includes(this.cloze);
	if (validate === false) {
		console.log("Invalid, please create another card.");
	}

	//If valid, set partial
	else {
		this.partial = this.fullText.replace(cloze, "...");
	}

};

module.exports = ClozeCard;