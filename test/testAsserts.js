var	assert = require('assert'),
	u = require('../lib/unshortener'),
	unshortener = new u(['youtu.be']);

unshortener.unshorten('http://goo.gl/FEkwU', function (err, url) {
	assert.deepEqual(url, 'http://nodejs.org/docs/v0.4.7/api/https.html');
});

unshortener.unshorten('http://youtu.be/INgXzChwipY', function (err, url) {
	assert.deepEqual(url, 'http://www.youtube.com/watch?v=INgXzChwipY&feature=youtu.be');
});

unshortener.unshorten('http://dlvr.it/Xlrwz', function (err, url) {
	assert.deepEqual(url, 'http://www.sporza.be/permalink/1.1052200');
});

unshortener.unshorten('http://t.co/Yo18oVJ', function (err, url) {
	assert.deepEqual(url, 'https://github.com/socketstream/socketstream');
});

unshortener.unshorten('http://bit.ly/m43HOo', function (err, url) {
	assert.deepEqual(url, 'http://us1.campaign-archive2.com/?u=faa8eb4ef3a111cef92c4f3d4&id=25f15ee7ee');
});

unshortener.unshorten('http://qr.ae/7RSQ3', function (err, url) {
	assert.deepEqual(url, 'http://www.quora.com/Does-Quora-have-a-URL-shortener?srid=vgS');
});
