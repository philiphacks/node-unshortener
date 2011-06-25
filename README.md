Unshortener module for Node.js
==============================

[node-unshortener](https://github.com/philipdesmedt/node-unshortener) provides a link unshortener module for Node.js.

## Requirements

You can install node-unshortener from the github package. Dependencies:

- [node](http://nodejs.org/)

## Getting started

The unshortener can be used on almost any link shortener service. 'goo.gl', 'dlvr.it', 't.co', 'bit.ly' and 'qr.ae' are supported by default. Read the examples to see its usage.

### Setup unshortener

	var	u = require('../lib/unshortener'),
		unshortener = new u(['youtu.be']);

The above snippet creates a new unshortener object and specifies youtu.be as an extra shortener service. The (optional) parameter can be a list of arbitrary length containing shortener services.

### Unshorten URL

The following snippet shows an example of the unshortener for the goo.gl shortener service.

	unshortener.unshorten('http://goo.gl/FEkwU', function (err, body) {
		if (err) {
			throw err + ' on url \'' + url + '\'';
			return this;
		} else {
			console.log(body);
		}
	});

### Tests

The test directory contains tests for various URLs.

## Contributors

- [Philip De Smedt](http://github.com/philipdesmedt) (author)
