;(function (linkify) {
"use strict";
var tokenize = linkify.tokenize, options = linkify.options;
/**
	Convert strings of text into linkable HTML text
*/

'use strict';

function cleanText(text) {
	return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function cleanAttr(href) {
	return href.replace(/"/g, '&quot;');
}

function attributesToString(attributes) {

	if (!attributes) return '';
	var result = [];

	for (var attr in attributes) {
		var val = (attributes[attr] + '').replace(/"/g, '&quot;');
		result.push('' + attr + '="' + cleanAttr(val) + '"');
	}
	return result.join(' ');
}

function linkifyStr(str) {
	var opts = arguments[1] === undefined ? {} : arguments[1];

	opts = options.normalize(opts);

	var tokens = tokenize(str),
	    result = [];

	for (var i = 0; i < tokens.length; i++) {
		var token = tokens[i];
		if (token.isLink) {

			var tagName = options.resolve(opts.tagName, token.type),
			    linkClass = options.resolve(opts.linkClass, token.type),
			    target = options.resolve(opts.target, token.type),
			    formatted = options.resolve(opts.format, token.toString(), token.type),
			    href = token.toHref(opts.defaultProtocol),
			    formattedHref = options.resolve(opts.formatHref, href, token.type),
			    attributesHash = options.resolve(opts.attributes, token.type);

			var link = '<' + tagName + ' href="' + cleanAttr(formattedHref) + '" class="' + linkClass + '"';
			if (target) {
				link += ' target="' + target + '"';
			}

			if (attributesHash) {
				link += ' ' + attributesToString(attributesHash);
			}

			link += '>' + cleanText(formatted) + '</' + tagName + '>';
			result.push(link);
		} else if (token.type === 'nl' && opts.nl2br) {
			if (opts.newLine) {
				result.push(opts.newLine);
			} else {
				result.push('<br>\n');
			}
		} else {
			result.push(cleanText(token.toString()));
		}
	}

	return result.join('');
}

if (!String.prototype.linkify) {
	String.prototype.linkify = function (options) {
		return linkifyStr(this, options);
	};
}
window.linkifyStr = linkifyStr;
})(window.linkify);