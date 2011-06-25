var	u = require('../lib/unshortener'),
	unshortener = new u(['youtu.be']);

unshortener.unshorten('http://goo.gl/FEkwU', function (err, body) {
	if (err) {
		throw err + ' on url \'' + url + '\'';
		return this;
	} else {
		console.log(body);
	}
});

unshortener.unshorten('http://youtu.be/INgXzChwipY', function (err, body) {
	if (err) {
		console.log(err + ' on url \'' + url + '\'');
	} else {
		console.log(body);
	}
});

unshortener.unshorten('http://dlvr.it/Xlrwz', function (err, body) {
	if (err) {
		console.log(err + ' on url \'' + url + '\'');
	} else {
		console.log(body);
	}
});

unshortener.unshorten('http://t.co/Yo18oVJ', function (err, body) {
	if (err) {
		console.log(err + ' on url \'' + url + '\'');
	} else {
		console.log(body);
	}
});

unshortener.unshorten('http://bit.ly/m43HOo', function (err, body) {
	if (err) {
		console.log(err + ' on url \'' + url + '\'');
	} else {
		console.log(body);
	}
});

var url = 'http://no.resolve/';
unshortener.unshorten(url, function (err, body) {
	if (err) {
		console.log(err + ' on url \'' + url + '\'');
	} else {
		console.log(body);
	}
});
