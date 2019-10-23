// Skapat av Mattias Hedman, 2016
// Fritt att avända för alla om dessa rader står kvar.
// Ska du använda det i en kommersiell produkt vill jag att du frågar mig först.
// Det gör du enklast på github-sidan: https://github.com/macmattias/personnummer
// Eventuella förändringar och tillägg görs som pull requests.

var fixedPersonnummer, len

function addDash(personnummer){
	pos = (personnummer.length)-4;
	returnWithDash = insert(personnummer,pos,'-');

	return returnWithDash;
}

function removeDash(personnummer){
	returnWithoutDash = personnummer.replace('-','');

	return returnWithoutDash;
}

function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}

function addCentuary(personnummer){
	if(personnummer.length < 11) {
		pernumCentuary = personnummer.substring(0,2);
	}
	if(personnummer.length > 11){
		pernumCentuary = personnummer.substring(2,4);
	}
	
	var currentCentuary = new Date().getFullYear().toString().substring(0,2);

	var comparePernum = "20"+pernumCentuary;
	var compareCurrent = "20"+compareCurrent;

	if(parseInt(comparePernum) > parseInt(compareCurrent)){
		addedCentuaryString = "19"+personnummer;
	} else {
		addedCentuaryString = "20"+personnummer;
	}

	return addedCentuaryString;	
}

function removeCentuary(personnummer){
	removedCentuary = personnummer.substring(2,personnummer.length);

	return removedCentuary;
}

function fixPersonnummer(personnummer, svarsLangd){

	var len = personnummer.length;

	if(len===13 && parseInt(svarsLangd)===10){
		removeStreck = removeDash(personnummer);
		fixedPersonnummer = removeCentuary(removeStreck);
	}
	if(len===13 && parseInt(svarsLangd)===11){
		fixedPersonnummer = removeCentuary(personnummer);
	}
	if(len===13 && parseInt(svarsLangd)===12){
		fixedPersonnummer = removeDash(personnummer);
	}
	if(len===11 && parseInt(svarsLangd)===10){
		fixedPersonnummer = removeDash(personnummer);
	}
	if(len===10 && parseInt(svarsLangd)===11){
		fixedPersonnummer = addDash(personnummer);
	}
	if(len===10 && parseInt(svarsLangd)===12){
		fixedPersonnummer = addCentuary(personnummer);
	}
	if(len===11 && parseInt(svarsLangd)===12){
		addStreck = removeDash(personnummer);
		fixedPersonnummer = addCentuary(addStreck);
	}
	if(len===11 && parseInt(svarsLangd)===13){
		fixedPersonnummer = addCentuary(personnummer);
	}
	if(len===10 && parseInt(svarsLangd)===13){
		addYear = addCentuary(personnummer);
		fixedPersonnummer = addDash(addYear);
	}
	if(len===12 && parseInt(svarsLangd)===10){
		fixedPersonnummer = removeCentuary(personnummer);
	}
	if(len===12 && parseInt(svarsLangd)===13){
		fixedPersonnummer = addDash(personnummer);
	}
	
	return fixedPersonnummer;
}