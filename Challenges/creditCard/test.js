var Processor = {};
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

Processor.verify = function(cardNumber) {
	var account = cardNumber;
	var len = account.length;
	
	for (var i = 1; i < len; i += 2) {
		var num = account[i] * 2;
		if (num > 9) {
			num = 1 + (num - 10);
		}
		//account[i] = num; 
		account = account.replaceAt(i, num.toString());
		//account[i] = account[i].substr()
		console.log(num);
		console.log("account number is " + account);
	};
};

Processor.verify('79927398711');
Processor.verify('79927398713');