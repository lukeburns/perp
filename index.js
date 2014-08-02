var pipeware = require('pipeware');

module.exports = perp;

function perp () {
	if (!(this instanceof perp)) {
		return new perp;
	}
}

perp.prototype.define = function (name) {
	var mw = pipeware();
	this[name] = function () {
		return mw.run.apply(mw, arguments)
	}
	this[name].use = mw.use.bind(mw);
	return this[name];
}