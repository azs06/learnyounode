function strTruncate(str, strLength, strSuffix) {
	return strSuffix ? str.slice(0, strLength).slice(0, strLength - strSuffix.length) + strSuffix : str.slice(0, strLength);
}

console.log(strTruncate('CatDogDuck', 9, 'Rat'));
