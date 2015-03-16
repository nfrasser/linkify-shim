;(function (linkify) {
"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
	Quick Hashtag parser plugin for linkify
*/
function hashtag(linkify) {
	var TT = linkify.scanner.TOKENS,
	    // Text tokens
	MT = linkify.parser.TOKENS,
	    // Multi tokens
	MultiToken = MT.Base,
	    S_START = linkify.parser.start,
	    S_HASH = undefined,
	    S_HASHTAG = undefined;

	var HASHTAG = (function (MultiToken) {
		function HASHTAG(value) {
			_classCallCheck(this, HASHTAG);

			_get(Object.getPrototypeOf(HASHTAG.prototype), "constructor", this).call(this, value);
			this.type = "hashtag";
			this.isLink = true;
		}

		_inherits(HASHTAG, MultiToken);

		return HASHTAG;
	})(MultiToken);

	S_HASH = new linkify.parser.State();
	S_HASHTAG = new linkify.parser.State(HASHTAG);

	S_START.on(TT.POUND, S_HASH);
	S_HASH.on(TT.DOMAIN, S_HASHTAG);
	S_HASH.on(TT.TLD, S_HASHTAG);
}
hashtag(linkify);
})(window.linkify);