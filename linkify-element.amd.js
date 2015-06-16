define('linkify-element', ['exports', 'module', './linkify'], function (exports, module, _linkify) {
	/**
 	Linkify a HTML DOM node
 */

	'use strict';

	var HTML_NODE = 1,
	    TXT_NODE = 3;

	/**
 	Given an array of MultiTokens, return an array of Nodes that are either
 	(a) Plain Text nodes (node type 3)
 	(b) Anchor tag nodes (usually, unless tag name is overriden in the options)
 
 	Takes the same options as linkifyElement and an optional doc element (this should be passed in by linkifyElement)
 */
	function tokensToNodes(tokens, opts, doc) {
		var result = [];

		for (var i = 0; i < tokens.length; i++) {
			var token = tokens[i];

			if (token.isLink) {

				var tagName = _linkify.options.resolve(opts.tagName, token.type),
				    linkClass = _linkify.options.resolve(opts.linkClass, token.type),
				    target = _linkify.options.resolve(opts.target, token.type),
				    formatted = _linkify.options.resolve(opts.format, token.toString(), token.type),
				    href = token.toHref(opts.defaultProtocol),
				    formattedHref = _linkify.options.resolve(opts.formatHref, href, token.type),
				    attributesHash = _linkify.options.resolve(opts.attributes, token.type),
				    events = _linkify.options.resolve(opts.events, token.type);

				// Build the link
				var link = doc.createElement(tagName);
				link.setAttribute('href', formattedHref);
				link.setAttribute('class', linkClass);
				if (target) {
					link.setAttribute('target', target);
				}

				// Build up additional attributes
				if (attributesHash) {
					for (var attr in attributesHash) {
						link.setAttribute(attr, attributesHash[attr]);
					}
				}

				if (events) {
					for (var _event in events) {
						if (link.addEventListener) {
							link.addEventListener(_event, events[_event]);
						} else if (link.attachEvent) {
							link.attachEvent('on' + _event, events[_event]);
						}
					}
				}

				link.appendChild(doc.createTextNode(formatted));
				result.push(link);
			} else if (token.type === 'nl' && opts.nl2br) {
				result.push(doc.createElement('br'));
			} else {
				result.push(doc.createTextNode(token.toString()));
			}
		}

		return result;
	}

	// Requires document.createElement
	function linkifyElementHelper(element, opts, doc) {

		// Can the element be linkified?
		if (!element || typeof element !== 'object' || element.nodeType !== HTML_NODE) {
			throw new Error('Cannot linkify ' + element + ' - Invalid DOM Node type');
		}

		// Is this element already a link?
		if (element.tagName.toLowerCase() === 'a' /*|| element.hasClass('linkified')*/) {
			// No need to linkify
			return element;
		}

		var children = [],
		    childElement = element.firstChild;

		while (childElement) {

			switch (childElement.nodeType) {
				case HTML_NODE:
					children.push(linkifyElementHelper(childElement, opts, doc));
					break;
				case TXT_NODE:

					var str = childElement.nodeValue,
					    tokens = (0, _linkify.tokenize)(str);
					children.push.apply(children, tokensToNodes(tokens, opts, doc));

					break;

				default:
					children.push(childElement);break;
			}

			childElement = childElement.nextSibling;
		}

		// Clear out the element
		while (element.firstChild) {
			element.removeChild(element.firstChild);
		}

		// Replace with all the new nodes
		for (var i = 0; i < children.length; i++) {
			element.appendChild(children[i]);
		}

		return element;
	}

	function linkifyElement(element, opts) {
		var doc = arguments[2] === undefined ? null : arguments[2];

		try {
			doc = doc || window && window.document || global && global.document;
		} catch (e) {}

		if (!doc) {
			throw new Error('Cannot find document implementation. ' + 'If you are in a non-browser environment like Node.js, ' + 'pass the document implementation as the third argument to linkifyElement.');
		}

		opts = _linkify.options.normalize(opts);
		return linkifyElementHelper(element, opts, doc);
	}

	// Maintain reference to the recursive helper to save some option-normalization
	// cycles
	linkifyElement.helper = linkifyElementHelper;
	linkifyElement.normalize = _linkify.options.normalize;

	module.exports = linkifyElement;
});
/* do nothing for now */