define('linkify-string', ['exports', 'module', './linkify'], function (exports, module, _linkify) {
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

		opts = _linkify.options.normalize(opts);

		var tokens = (0, _linkify.tokenize)(str),
		    result = [];

		for (var i = 0; i < tokens.length; i++) {
			var token = tokens[i];
			if (token.isLink) {

				var tagName = _linkify.options.resolve(opts.tagName, token.type),
				    linkClass = _linkify.options.resolve(opts.linkClass, token.type),
				    target = _linkify.options.resolve(opts.target, token.type),
				    formatted = _linkify.options.resolve(opts.format, token.toString(), token.type),
				    href = token.toHref(opts.defaultProtocol),
				    formattedHref = _linkify.options.resolve(opts.formatHref, href, token.type),
				    attributesHash = _linkify.options.resolve(opts.attributes, token.type);

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

	module.exports = linkifyStr;
});