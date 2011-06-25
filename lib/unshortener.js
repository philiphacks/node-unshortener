/**
*	Node.js link unshortener
*
*	Author: Philip De Smedt
*	Date: 25/06/2011
*	Version: 0.1
*
*/

var urllib = require('url'),
	http = require('http');
var VERSION = 0.1;

function Unshortener(options) {
	if (!(this instanceof Unshortener)) return new Unshorten();

	this.options = ['goo.gl', 'dlvr.it', 't.co', 'bit.ly', 'qr.ae'];
	if (options instanceof Object) {
		for (var i in options) {
			this.options.push(options[i]);
		}		
	}
}

Unshortener.VERSION = VERSION;
module.exports = Unshortener;

Unshortener.prototype.unshorten = function(url, callback) {
	if (typeof callback !== 'function') {
		throw "[Error] Invalid callback function specified."
		return this;
	}

	var urlinfo = urllib.parse(url, true);

	for (var i in this.options) {
		if (this.options[i] === (urlinfo.host)) {
			expand(urlinfo, callback);
			return;
		}
	}
	callback('unexpected error', null);
}

var expand = function(info, callback) {
	var options = {
		host: info.host,
		port: 80,
		path: info.pathname,
		method: 'HEAD'	
	};

	var req = http.request(options, function(res) {
		if (res.statusCode === 404) {
			callback('404', null);
		} else if (res.statusCode === 200 || res.statusCode === 301 || res.statusCode === 302) {
			callback(null, res.headers.location);
		}
	});
	req.end();
}
