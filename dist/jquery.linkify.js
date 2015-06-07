;console.warn('dist/jquery.linkify.js is deprecated. Use linkify.js and linkify-jquery.js instead.');
;(function () {
"use strict";
// Output from the Closure Compiler
var module$lib$linkify$core$state = {}, _inherits$$module$lib$linkify$core$state = function(b, a) {
  if ("function" !== typeof a && null !== a) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof a);
  }
  b.prototype = Object.create(a && a.prototype, {constructor:{value:b, enumerable:!1, writable:!0, configurable:!0}});
  a && (b.__proto__ = a);
}, _createClass$$module$lib$linkify$core$state = function() {
  function b(a, b) {
    for (var c in b) {
      var d = b[c];
      d.configurable = !0;
      d.value && (d.writable = !0);
    }
    Object.defineProperties(a, b);
  }
  return function(a, e, c) {
    e && b(a.prototype, e);
    c && b(a, c);
    return a;
  };
}(), _classCallCheck$$module$lib$linkify$core$state = function(b, a) {
  if (!(b instanceof a)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
Object.defineProperty(module$lib$linkify$core$state, "__esModule", {value:!0});
var BaseState$$module$lib$linkify$core$state = function() {
  function b(a) {
    _classCallCheck$$module$lib$linkify$core$state(this, b);
    this.j = [];
    this.T = a || null;
  }
  _createClass$$module$lib$linkify$core$state(b, {on:{value:function(a, b) {
    if (a instanceof Array) {
      for (var c = 0;c < a.length;c++) {
        this.j.push([a[c], b]);
      }
    } else {
      this.j.push([a, b]);
    }
  }}, next:{value:function(a) {
    for (var b = 0;b < this.j.length;b++) {
      var c = this.j[b], d = c[1];
      if (this.test(a, c[0])) {
        return d;
      }
    }
    return!1;
  }}, accepts:{value:function() {
    return!!this.T;
  }}, test:{value:function(a, b) {
    return a === b;
  }}, emit:{value:function() {
    return this.T;
  }}});
  return b;
}(), CharacterState$$module$lib$linkify$core$state = function(b) {
  function a() {
    _classCallCheck$$module$lib$linkify$core$state(this, a);
    null != b && b.apply(this, arguments);
  }
  _inherits$$module$lib$linkify$core$state(a, b);
  _createClass$$module$lib$linkify$core$state(a, {test:{value:function(a, b) {
    return a === b || b instanceof RegExp && b.test(a);
  }}});
  return a;
}(BaseState$$module$lib$linkify$core$state), TokenState$$module$lib$linkify$core$state = function(b) {
  function a() {
    _classCallCheck$$module$lib$linkify$core$state(this, a);
    null != b && b.apply(this, arguments);
  }
  _inherits$$module$lib$linkify$core$state(a, b);
  _createClass$$module$lib$linkify$core$state(a, {test:{value:function(a, b) {
    return b.test(a);
  }}});
  return a;
}(BaseState$$module$lib$linkify$core$state);
function stateify$$module$lib$linkify$core$state(b, a, e, c) {
  for (var d = 0, f = b.length, h = [], g = void 0;d < f && (g = a.next(b[d]));) {
    a = g, d++;
  }
  if (d >= f) {
    return[];
  }
  for (;d < f - 1;) {
    g = new CharacterState$$module$lib$linkify$core$state(c), h.push(g), a.on(b[d], g), a = g, d++;
  }
  g = new CharacterState$$module$lib$linkify$core$state(e);
  h.push(g);
  a.on(b[f - 1], g);
  return h;
}
module$lib$linkify$core$state.CharacterState = CharacterState$$module$lib$linkify$core$state;
module$lib$linkify$core$state.TokenState = TokenState$$module$lib$linkify$core$state;
module$lib$linkify$core$state.stateify = stateify$$module$lib$linkify$core$state;
var module$lib$linkify$core$tokens = {}, _get$$module$lib$linkify$core$tokens = function get(a, e, c) {
  var d = Object.getOwnPropertyDescriptor(a, e);
  if (void 0 === d) {
    return a = Object.getPrototypeOf(a), null === a ? void 0 : get(a, e, c);
  }
  if ("value" in d && d.writable) {
    return d.value;
  }
  e = d.get;
  return void 0 === e ? void 0 : e.call(c);
}, _inherits$$module$lib$linkify$core$tokens = function(b, a) {
  if ("function" !== typeof a && null !== a) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof a);
  }
  b.prototype = Object.create(a && a.prototype, {constructor:{value:b, enumerable:!1, writable:!0, configurable:!0}});
  a && (b.__proto__ = a);
}, _createClass$$module$lib$linkify$core$tokens = function() {
  function b(a, b) {
    for (var c in b) {
      var d = b[c];
      d.configurable = !0;
      d.value && (d.writable = !0);
    }
    Object.defineProperties(a, b);
  }
  return function(a, e, c) {
    e && b(a.prototype, e);
    c && b(a, c);
    return a;
  };
}(), _classCallCheck$$module$lib$linkify$core$tokens = function(b, a) {
  if (!(b instanceof a)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
Object.defineProperty(module$lib$linkify$core$tokens, "__esModule", {value:!0});
var TextToken$$module$lib$linkify$core$tokens = function() {
  function b(a) {
    _classCallCheck$$module$lib$linkify$core$tokens(this, b);
    this.v = a;
  }
  _createClass$$module$lib$linkify$core$tokens(b, {toString:{value:function() {
    return this.v + "";
  }}}, {test:{value:function(a) {
    return a instanceof this;
  }}});
  return b;
}(), DOMAIN$$module$lib$linkify$core$tokens = function(b) {
  function a() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, a);
    null != b && b.apply(this, arguments);
  }
  _inherits$$module$lib$linkify$core$tokens(a, b);
  return a;
}(TextToken$$module$lib$linkify$core$tokens), AT$$module$lib$linkify$core$tokens = function(b) {
  function a() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, a);
    _get$$module$lib$linkify$core$tokens(Object.getPrototypeOf(a.prototype), "constructor", this).call(this, "@");
  }
  _inherits$$module$lib$linkify$core$tokens(a, b);
  return a;
}(TextToken$$module$lib$linkify$core$tokens), COLON$$module$lib$linkify$core$tokens = function(b) {
  function a() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, a);
    _get$$module$lib$linkify$core$tokens(Object.getPrototypeOf(a.prototype), "constructor", this).call(this, ":");
  }
  _inherits$$module$lib$linkify$core$tokens(a, b);
  return a;
}(TextToken$$module$lib$linkify$core$tokens), DOT$$module$lib$linkify$core$tokens = function(b) {
  function a() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, a);
    _get$$module$lib$linkify$core$tokens(Object.getPrototypeOf(a.prototype), "constructor", this).call(this, ".");
  }
  _inherits$$module$lib$linkify$core$tokens(a, b);
  return a;
}(TextToken$$module$lib$linkify$core$tokens), LOCALHOST$$module$lib$linkify$core$tokens = function(b) {
  function a() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, a);
    null != b && b.apply(this, arguments);
  }
  _inherits$$module$lib$linkify$core$tokens(a, b);
  return a;
}(TextToken$$module$lib$linkify$core$tokens), TNL$$module$lib$linkify$core$tokens = function(b) {
  function a() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, a);
    _get$$module$lib$linkify$core$tokens(Object.getPrototypeOf(a.prototype), "constructor", this).call(this, "\n");
  }
  _inherits$$module$lib$linkify$core$tokens(a, b);
  return a;
}(TextToken$$module$lib$linkify$core$tokens), NUM$$module$lib$linkify$core$tokens = function(b) {
  function a() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, a);
    null != b && b.apply(this, arguments);
  }
  _inherits$$module$lib$linkify$core$tokens(a, b);
  return a;
}(TextToken$$module$lib$linkify$core$tokens), PLUS$$module$lib$linkify$core$tokens = function(b) {
  function a() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, a);
    _get$$module$lib$linkify$core$tokens(Object.getPrototypeOf(a.prototype), "constructor", this).call(this, "+");
  }
  _inherits$$module$lib$linkify$core$tokens(a, b);
  return a;
}(TextToken$$module$lib$linkify$core$tokens), POUND$$module$lib$linkify$core$tokens = function(b) {
  function a() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, a);
    _get$$module$lib$linkify$core$tokens(Object.getPrototypeOf(a.prototype), "constructor", this).call(this, "#");
  }
  _inherits$$module$lib$linkify$core$tokens(a, b);
  return a;
}(TextToken$$module$lib$linkify$core$tokens), PROTOCOL$$module$lib$linkify$core$tokens = function(b) {
  function a() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, a);
    null != b && b.apply(this, arguments);
  }
  _inherits$$module$lib$linkify$core$tokens(a, b);
  return a;
}(TextToken$$module$lib$linkify$core$tokens), QUERY$$module$lib$linkify$core$tokens = function(b) {
  function a() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, a);
    _get$$module$lib$linkify$core$tokens(Object.getPrototypeOf(a.prototype), "constructor", this).call(this, "?");
  }
  _inherits$$module$lib$linkify$core$tokens(a, b);
  return a;
}(TextToken$$module$lib$linkify$core$tokens), SLASH$$module$lib$linkify$core$tokens = function(b) {
  function a() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, a);
    _get$$module$lib$linkify$core$tokens(Object.getPrototypeOf(a.prototype), "constructor", this).call(this, "/");
  }
  _inherits$$module$lib$linkify$core$tokens(a, b);
  return a;
}(TextToken$$module$lib$linkify$core$tokens), SYM$$module$lib$linkify$core$tokens = function(b) {
  function a() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, a);
    null != b && b.apply(this, arguments);
  }
  _inherits$$module$lib$linkify$core$tokens(a, b);
  return a;
}(TextToken$$module$lib$linkify$core$tokens), TLD$$module$lib$linkify$core$tokens = function(b) {
  function a() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, a);
    null != b && b.apply(this, arguments);
  }
  _inherits$$module$lib$linkify$core$tokens(a, b);
  return a;
}(TextToken$$module$lib$linkify$core$tokens), WS$$module$lib$linkify$core$tokens = function(b) {
  function a() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, a);
    null != b && b.apply(this, arguments);
  }
  _inherits$$module$lib$linkify$core$tokens(a, b);
  return a;
}(TextToken$$module$lib$linkify$core$tokens), text$$module$lib$linkify$core$tokens = {Base:TextToken$$module$lib$linkify$core$tokens, DOMAIN:DOMAIN$$module$lib$linkify$core$tokens, AT:AT$$module$lib$linkify$core$tokens, COLON:COLON$$module$lib$linkify$core$tokens, DOT:DOT$$module$lib$linkify$core$tokens, LOCALHOST:LOCALHOST$$module$lib$linkify$core$tokens, NL:TNL$$module$lib$linkify$core$tokens, NUM:NUM$$module$lib$linkify$core$tokens, PLUS:PLUS$$module$lib$linkify$core$tokens, POUND:POUND$$module$lib$linkify$core$tokens, 
QUERY:QUERY$$module$lib$linkify$core$tokens, PROTOCOL:PROTOCOL$$module$lib$linkify$core$tokens, SLASH:SLASH$$module$lib$linkify$core$tokens, SYM:SYM$$module$lib$linkify$core$tokens, TLD:TLD$$module$lib$linkify$core$tokens, WS:WS$$module$lib$linkify$core$tokens};
function isDomainToken$$module$lib$linkify$core$tokens(b) {
  return DOMAIN$$module$lib$linkify$core$tokens.test(b) || TLD$$module$lib$linkify$core$tokens.test(b);
}
var MultiToken$$module$lib$linkify$core$tokens = function() {
  function b(a) {
    _classCallCheck$$module$lib$linkify$core$tokens(this, b);
    this.v = a;
    this.type = "token";
    this.isLink = !1;
  }
  _createClass$$module$lib$linkify$core$tokens(b, {toString:{value:function() {
    for (var a = [], b = 0;b < this.v.length;b++) {
      a.push(this.v[b].toString());
    }
    return a.join("");
  }}, toHref:{value:function() {
    return this.toString();
  }}, toObject:{value:function(a) {
    return{type:this.type, value:this.toString(), href:this.toHref(void 0 === a ? "http" : a)};
  }}}, {test:{value:function(a) {
    return a instanceof this;
  }}});
  return b;
}(), EMAIL$$module$lib$linkify$core$tokens = function(b) {
  function a(b) {
    _classCallCheck$$module$lib$linkify$core$tokens(this, a);
    _get$$module$lib$linkify$core$tokens(Object.getPrototypeOf(a.prototype), "constructor", this).call(this, b);
    this.type = "email";
    this.isLink = !0;
  }
  _inherits$$module$lib$linkify$core$tokens(a, b);
  _createClass$$module$lib$linkify$core$tokens(a, {toHref:{value:function() {
    return "mailto:" + this.toString();
  }}});
  return a;
}(MultiToken$$module$lib$linkify$core$tokens), TEXT$$module$lib$linkify$core$tokens = function(b) {
  function a(b) {
    _classCallCheck$$module$lib$linkify$core$tokens(this, a);
    _get$$module$lib$linkify$core$tokens(Object.getPrototypeOf(a.prototype), "constructor", this).call(this, b);
    this.type = "text";
  }
  _inherits$$module$lib$linkify$core$tokens(a, b);
  return a;
}(MultiToken$$module$lib$linkify$core$tokens), MNL$$module$lib$linkify$core$tokens = function(b) {
  function a(b) {
    _classCallCheck$$module$lib$linkify$core$tokens(this, a);
    _get$$module$lib$linkify$core$tokens(Object.getPrototypeOf(a.prototype), "constructor", this).call(this, b);
    this.type = "nl";
  }
  _inherits$$module$lib$linkify$core$tokens(a, b);
  return a;
}(MultiToken$$module$lib$linkify$core$tokens), URL$$module$lib$linkify$core$tokens = function(b) {
  function a(b) {
    _classCallCheck$$module$lib$linkify$core$tokens(this, a);
    _get$$module$lib$linkify$core$tokens(Object.getPrototypeOf(a.prototype), "constructor", this).call(this, b);
    this.type = "url";
    this.isLink = !0;
  }
  _inherits$$module$lib$linkify$core$tokens(a, b);
  _createClass$$module$lib$linkify$core$tokens(a, {toHref:{value:function(a) {
    a = void 0 === a ? "http" : a;
    for (var b = !1, d = !1, f = this.v, h = [], g = 0;PROTOCOL$$module$lib$linkify$core$tokens.test(f[g]);) {
      b = !0, h.push(f[g].toString().toLowerCase()), g++;
    }
    for (;SLASH$$module$lib$linkify$core$tokens.test(f[g]);) {
      d = !0, h.push(f[g].toString()), g++;
    }
    for (;isDomainToken$$module$lib$linkify$core$tokens(f[g]);) {
      h.push(f[g].toString().toLowerCase()), g++;
    }
    for (;g < f.length;g++) {
      h.push(f[g].toString());
    }
    h = h.join("");
    b || d || (h = a + "://" + h);
    return h;
  }}, hasProtocol:{value:function() {
    return this.v[0] instanceof PROTOCOL$$module$lib$linkify$core$tokens;
  }}});
  return a;
}(MultiToken$$module$lib$linkify$core$tokens), multi$$module$lib$linkify$core$tokens = {Base:MultiToken$$module$lib$linkify$core$tokens, EMAIL:EMAIL$$module$lib$linkify$core$tokens, NL:MNL$$module$lib$linkify$core$tokens, TEXT:TEXT$$module$lib$linkify$core$tokens, URL:URL$$module$lib$linkify$core$tokens};
module$lib$linkify$core$tokens.text = text$$module$lib$linkify$core$tokens;
module$lib$linkify$core$tokens.multi = multi$$module$lib$linkify$core$tokens;
var module$lib$linkify$core$parser = {};
Object.defineProperty(module$lib$linkify$core$parser, "__esModule", {value:!0});
var _tokens$$module$lib$linkify$core$parser = module$lib$linkify$core$tokens, TEXT_TOKENS$$module$lib$linkify$core$parser = _tokens$$module$lib$linkify$core$parser.text, MULTI_TOKENS$$module$lib$linkify$core$parser = _tokens$$module$lib$linkify$core$parser.multi, State$$module$lib$linkify$core$parser = module$lib$linkify$core$state.TokenState, makeState$$module$lib$linkify$core$parser = function(b) {
  return new State$$module$lib$linkify$core$parser(b);
}, TT_DOMAIN$$module$lib$linkify$core$parser = TEXT_TOKENS$$module$lib$linkify$core$parser.DOMAIN, TT_AT$$module$lib$linkify$core$parser = TEXT_TOKENS$$module$lib$linkify$core$parser.AT, TT_COLON$$module$lib$linkify$core$parser = TEXT_TOKENS$$module$lib$linkify$core$parser.COLON, TT_DOT$$module$lib$linkify$core$parser = TEXT_TOKENS$$module$lib$linkify$core$parser.DOT, TT_LOCALHOST$$module$lib$linkify$core$parser = TEXT_TOKENS$$module$lib$linkify$core$parser.LOCALHOST, TT_NL$$module$lib$linkify$core$parser = 
TEXT_TOKENS$$module$lib$linkify$core$parser.NL, TT_NUM$$module$lib$linkify$core$parser = TEXT_TOKENS$$module$lib$linkify$core$parser.NUM, TT_PLUS$$module$lib$linkify$core$parser = TEXT_TOKENS$$module$lib$linkify$core$parser.PLUS, TT_POUND$$module$lib$linkify$core$parser = TEXT_TOKENS$$module$lib$linkify$core$parser.POUND, TT_PROTOCOL$$module$lib$linkify$core$parser = TEXT_TOKENS$$module$lib$linkify$core$parser.PROTOCOL, TT_QUERY$$module$lib$linkify$core$parser = TEXT_TOKENS$$module$lib$linkify$core$parser.QUERY, 
TT_SLASH$$module$lib$linkify$core$parser = TEXT_TOKENS$$module$lib$linkify$core$parser.SLASH, TT_SYM$$module$lib$linkify$core$parser = TEXT_TOKENS$$module$lib$linkify$core$parser.SYM, TT_TLD$$module$lib$linkify$core$parser = TEXT_TOKENS$$module$lib$linkify$core$parser.TLD, T_EMAIL$$module$lib$linkify$core$parser = MULTI_TOKENS$$module$lib$linkify$core$parser.EMAIL, T_NL$$module$lib$linkify$core$parser = MULTI_TOKENS$$module$lib$linkify$core$parser.NL, T_TEXT$$module$lib$linkify$core$parser = MULTI_TOKENS$$module$lib$linkify$core$parser.TEXT, 
T_URL$$module$lib$linkify$core$parser = MULTI_TOKENS$$module$lib$linkify$core$parser.URL, S_START$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_PROTOCOL$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_PROTOCOL_SLASH$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_PROTOCOL_SLASH_SLASH$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_DOMAIN$$module$lib$linkify$core$parser = 
makeState$$module$lib$linkify$core$parser(), S_DOMAIN_DOT$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_TLD$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(T_URL$$module$lib$linkify$core$parser), S_TLD_COLON$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_TLD_PORT$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(T_URL$$module$lib$linkify$core$parser), S_PSS_DOMAIN$$module$lib$linkify$core$parser = 
makeState$$module$lib$linkify$core$parser(), S_PSS_DOMAIN_DOT$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_PSS_TLD$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(T_URL$$module$lib$linkify$core$parser), S_PSS_TLD_COLON$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_PSS_TLD_PORT$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(T_URL$$module$lib$linkify$core$parser), S_URL$$module$lib$linkify$core$parser = 
makeState$$module$lib$linkify$core$parser(T_URL$$module$lib$linkify$core$parser), S_URL_SYMS$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_EMAIL_DOMAIN$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_EMAIL_DOMAIN_DOT$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_EMAIL$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(T_EMAIL$$module$lib$linkify$core$parser), S_EMAIL_COLON$$module$lib$linkify$core$parser = 
makeState$$module$lib$linkify$core$parser(), S_EMAIL_PORT$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(T_EMAIL$$module$lib$linkify$core$parser), S_LOCALPART$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_LOCALPART_AT$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_LOCALPART_DOT$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_NL$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(T_NL$$module$lib$linkify$core$parser);
S_START$$module$lib$linkify$core$parser.on(TT_NL$$module$lib$linkify$core$parser, S_NL$$module$lib$linkify$core$parser);
S_START$$module$lib$linkify$core$parser.on(TT_PROTOCOL$$module$lib$linkify$core$parser, S_PROTOCOL$$module$lib$linkify$core$parser);
S_START$$module$lib$linkify$core$parser.on(TT_SLASH$$module$lib$linkify$core$parser, S_PROTOCOL_SLASH$$module$lib$linkify$core$parser);
S_PROTOCOL$$module$lib$linkify$core$parser.on(TT_SLASH$$module$lib$linkify$core$parser, S_PROTOCOL_SLASH$$module$lib$linkify$core$parser);
S_PROTOCOL_SLASH$$module$lib$linkify$core$parser.on(TT_SLASH$$module$lib$linkify$core$parser, S_PROTOCOL_SLASH_SLASH$$module$lib$linkify$core$parser);
S_START$$module$lib$linkify$core$parser.on(TT_TLD$$module$lib$linkify$core$parser, S_DOMAIN$$module$lib$linkify$core$parser);
S_START$$module$lib$linkify$core$parser.on(TT_DOMAIN$$module$lib$linkify$core$parser, S_DOMAIN$$module$lib$linkify$core$parser);
S_START$$module$lib$linkify$core$parser.on(TT_LOCALHOST$$module$lib$linkify$core$parser, S_TLD$$module$lib$linkify$core$parser);
S_START$$module$lib$linkify$core$parser.on(TT_NUM$$module$lib$linkify$core$parser, S_LOCALPART$$module$lib$linkify$core$parser);
S_PROTOCOL_SLASH_SLASH$$module$lib$linkify$core$parser.on(TT_TLD$$module$lib$linkify$core$parser, S_PSS_DOMAIN$$module$lib$linkify$core$parser);
S_PROTOCOL_SLASH_SLASH$$module$lib$linkify$core$parser.on(TT_DOMAIN$$module$lib$linkify$core$parser, S_PSS_DOMAIN$$module$lib$linkify$core$parser);
S_PROTOCOL_SLASH_SLASH$$module$lib$linkify$core$parser.on(TT_LOCALHOST$$module$lib$linkify$core$parser, S_PSS_TLD$$module$lib$linkify$core$parser);
S_DOMAIN$$module$lib$linkify$core$parser.on(TT_DOT$$module$lib$linkify$core$parser, S_DOMAIN_DOT$$module$lib$linkify$core$parser);
S_PSS_DOMAIN$$module$lib$linkify$core$parser.on(TT_DOT$$module$lib$linkify$core$parser, S_PSS_DOMAIN_DOT$$module$lib$linkify$core$parser);
S_EMAIL_DOMAIN$$module$lib$linkify$core$parser.on(TT_DOT$$module$lib$linkify$core$parser, S_EMAIL_DOMAIN_DOT$$module$lib$linkify$core$parser);
S_DOMAIN_DOT$$module$lib$linkify$core$parser.on(TT_TLD$$module$lib$linkify$core$parser, S_TLD$$module$lib$linkify$core$parser);
S_DOMAIN_DOT$$module$lib$linkify$core$parser.on(TT_DOMAIN$$module$lib$linkify$core$parser, S_DOMAIN$$module$lib$linkify$core$parser);
S_DOMAIN_DOT$$module$lib$linkify$core$parser.on(TT_LOCALHOST$$module$lib$linkify$core$parser, S_DOMAIN$$module$lib$linkify$core$parser);
S_PSS_DOMAIN_DOT$$module$lib$linkify$core$parser.on(TT_TLD$$module$lib$linkify$core$parser, S_PSS_TLD$$module$lib$linkify$core$parser);
S_PSS_DOMAIN_DOT$$module$lib$linkify$core$parser.on(TT_DOMAIN$$module$lib$linkify$core$parser, S_PSS_DOMAIN$$module$lib$linkify$core$parser);
S_PSS_DOMAIN_DOT$$module$lib$linkify$core$parser.on(TT_LOCALHOST$$module$lib$linkify$core$parser, S_PSS_DOMAIN$$module$lib$linkify$core$parser);
S_EMAIL_DOMAIN_DOT$$module$lib$linkify$core$parser.on(TT_TLD$$module$lib$linkify$core$parser, S_EMAIL$$module$lib$linkify$core$parser);
S_EMAIL_DOMAIN_DOT$$module$lib$linkify$core$parser.on(TT_DOMAIN$$module$lib$linkify$core$parser, S_EMAIL_DOMAIN$$module$lib$linkify$core$parser);
S_EMAIL_DOMAIN_DOT$$module$lib$linkify$core$parser.on(TT_LOCALHOST$$module$lib$linkify$core$parser, S_EMAIL_DOMAIN$$module$lib$linkify$core$parser);
S_TLD$$module$lib$linkify$core$parser.on(TT_DOT$$module$lib$linkify$core$parser, S_DOMAIN_DOT$$module$lib$linkify$core$parser);
S_PSS_TLD$$module$lib$linkify$core$parser.on(TT_DOT$$module$lib$linkify$core$parser, S_PSS_DOMAIN_DOT$$module$lib$linkify$core$parser);
S_EMAIL$$module$lib$linkify$core$parser.on(TT_DOT$$module$lib$linkify$core$parser, S_EMAIL_DOMAIN_DOT$$module$lib$linkify$core$parser);
S_TLD$$module$lib$linkify$core$parser.on(TT_COLON$$module$lib$linkify$core$parser, S_TLD_COLON$$module$lib$linkify$core$parser);
S_TLD$$module$lib$linkify$core$parser.on(TT_SLASH$$module$lib$linkify$core$parser, S_URL$$module$lib$linkify$core$parser);
S_TLD_COLON$$module$lib$linkify$core$parser.on(TT_NUM$$module$lib$linkify$core$parser, S_TLD_PORT$$module$lib$linkify$core$parser);
S_TLD_PORT$$module$lib$linkify$core$parser.on(TT_SLASH$$module$lib$linkify$core$parser, S_URL$$module$lib$linkify$core$parser);
S_PSS_TLD$$module$lib$linkify$core$parser.on(TT_COLON$$module$lib$linkify$core$parser, S_PSS_TLD_COLON$$module$lib$linkify$core$parser);
S_PSS_TLD$$module$lib$linkify$core$parser.on(TT_SLASH$$module$lib$linkify$core$parser, S_URL$$module$lib$linkify$core$parser);
S_PSS_TLD_COLON$$module$lib$linkify$core$parser.on(TT_NUM$$module$lib$linkify$core$parser, S_PSS_TLD_PORT$$module$lib$linkify$core$parser);
S_PSS_TLD_PORT$$module$lib$linkify$core$parser.on(TT_SLASH$$module$lib$linkify$core$parser, S_URL$$module$lib$linkify$core$parser);
S_EMAIL$$module$lib$linkify$core$parser.on(TT_COLON$$module$lib$linkify$core$parser, S_EMAIL_COLON$$module$lib$linkify$core$parser);
S_EMAIL_COLON$$module$lib$linkify$core$parser.on(TT_NUM$$module$lib$linkify$core$parser, S_EMAIL_PORT$$module$lib$linkify$core$parser);
var qsAccepting$$module$lib$linkify$core$parser = [TT_DOMAIN$$module$lib$linkify$core$parser, TT_AT$$module$lib$linkify$core$parser, TT_LOCALHOST$$module$lib$linkify$core$parser, TT_NUM$$module$lib$linkify$core$parser, TT_PLUS$$module$lib$linkify$core$parser, TT_POUND$$module$lib$linkify$core$parser, TT_PROTOCOL$$module$lib$linkify$core$parser, TT_SLASH$$module$lib$linkify$core$parser, TT_TLD$$module$lib$linkify$core$parser], qsNonAccepting$$module$lib$linkify$core$parser = [TT_COLON$$module$lib$linkify$core$parser, 
TT_DOT$$module$lib$linkify$core$parser, TT_QUERY$$module$lib$linkify$core$parser, TT_SYM$$module$lib$linkify$core$parser];
S_URL$$module$lib$linkify$core$parser.on(qsAccepting$$module$lib$linkify$core$parser, S_URL$$module$lib$linkify$core$parser);
S_URL_SYMS$$module$lib$linkify$core$parser.on(qsAccepting$$module$lib$linkify$core$parser, S_URL$$module$lib$linkify$core$parser);
S_URL$$module$lib$linkify$core$parser.on(qsNonAccepting$$module$lib$linkify$core$parser, S_URL_SYMS$$module$lib$linkify$core$parser);
S_URL_SYMS$$module$lib$linkify$core$parser.on(qsNonAccepting$$module$lib$linkify$core$parser, S_URL_SYMS$$module$lib$linkify$core$parser);
var localpartAccepting$$module$lib$linkify$core$parser = [TT_DOMAIN$$module$lib$linkify$core$parser, TT_COLON$$module$lib$linkify$core$parser, TT_NUM$$module$lib$linkify$core$parser, TT_PLUS$$module$lib$linkify$core$parser, TT_POUND$$module$lib$linkify$core$parser, TT_QUERY$$module$lib$linkify$core$parser, TT_SYM$$module$lib$linkify$core$parser, TT_TLD$$module$lib$linkify$core$parser];
S_DOMAIN$$module$lib$linkify$core$parser.on(localpartAccepting$$module$lib$linkify$core$parser, S_LOCALPART$$module$lib$linkify$core$parser);
S_DOMAIN$$module$lib$linkify$core$parser.on(TT_AT$$module$lib$linkify$core$parser, S_LOCALPART_AT$$module$lib$linkify$core$parser);
S_DOMAIN_DOT$$module$lib$linkify$core$parser.on(localpartAccepting$$module$lib$linkify$core$parser, S_LOCALPART$$module$lib$linkify$core$parser);
S_TLD$$module$lib$linkify$core$parser.on(localpartAccepting$$module$lib$linkify$core$parser, S_LOCALPART$$module$lib$linkify$core$parser);
S_TLD$$module$lib$linkify$core$parser.on(TT_AT$$module$lib$linkify$core$parser, S_LOCALPART_AT$$module$lib$linkify$core$parser);
S_TLD_COLON$$module$lib$linkify$core$parser.on(localpartAccepting$$module$lib$linkify$core$parser, S_LOCALPART$$module$lib$linkify$core$parser);
S_TLD_COLON$$module$lib$linkify$core$parser.on(TT_DOT$$module$lib$linkify$core$parser, S_LOCALPART$$module$lib$linkify$core$parser);
S_TLD_COLON$$module$lib$linkify$core$parser.on(TT_AT$$module$lib$linkify$core$parser, S_LOCALPART_AT$$module$lib$linkify$core$parser);
S_TLD_PORT$$module$lib$linkify$core$parser.on(localpartAccepting$$module$lib$linkify$core$parser, S_LOCALPART$$module$lib$linkify$core$parser);
S_TLD_PORT$$module$lib$linkify$core$parser.on(TT_DOT$$module$lib$linkify$core$parser, S_LOCALPART_DOT$$module$lib$linkify$core$parser);
S_TLD_PORT$$module$lib$linkify$core$parser.on(TT_AT$$module$lib$linkify$core$parser, S_LOCALPART_AT$$module$lib$linkify$core$parser);
S_LOCALPART$$module$lib$linkify$core$parser.on(localpartAccepting$$module$lib$linkify$core$parser, S_LOCALPART$$module$lib$linkify$core$parser);
S_LOCALPART$$module$lib$linkify$core$parser.on(TT_AT$$module$lib$linkify$core$parser, S_LOCALPART_AT$$module$lib$linkify$core$parser);
S_LOCALPART$$module$lib$linkify$core$parser.on(TT_DOT$$module$lib$linkify$core$parser, S_LOCALPART_DOT$$module$lib$linkify$core$parser);
S_LOCALPART_DOT$$module$lib$linkify$core$parser.on(localpartAccepting$$module$lib$linkify$core$parser, S_LOCALPART$$module$lib$linkify$core$parser);
S_LOCALPART_AT$$module$lib$linkify$core$parser.on(TT_TLD$$module$lib$linkify$core$parser, S_EMAIL_DOMAIN$$module$lib$linkify$core$parser);
S_LOCALPART_AT$$module$lib$linkify$core$parser.on(TT_DOMAIN$$module$lib$linkify$core$parser, S_EMAIL_DOMAIN$$module$lib$linkify$core$parser);
S_LOCALPART_AT$$module$lib$linkify$core$parser.on(TT_LOCALHOST$$module$lib$linkify$core$parser, S_EMAIL$$module$lib$linkify$core$parser);
var run$$module$lib$linkify$core$parser = function(b) {
  for (var a = b.length, e = 0, c = [], d = [];e < a;) {
    for (var f = S_START$$module$lib$linkify$core$parser, h = null, g = null, k = 0, l = null, m = -1;e < a && !(h = f.next(b[e]));) {
      d.push(b[e++]);
    }
    for (;e < a && (g = h || f.next(b[e]));) {
      h = null, f = g, f.accepts() ? (m = 0, l = f) : 0 <= m && m++, e++, k++;
    }
    if (0 > m) {
      for (k = e - k;k < e;k++) {
        d.push(b[k]);
      }
    } else {
      0 < d.length && (c.push(new T_TEXT$$module$lib$linkify$core$parser(d)), d = []), e -= m, k -= m, f = l.emit(), c.push(new f(b.slice(e - k, e)));
    }
  }
  0 < d.length && c.push(new T_TEXT$$module$lib$linkify$core$parser(d));
  return c;
}, TOKENS$$module$lib$linkify$core$parser = MULTI_TOKENS$$module$lib$linkify$core$parser, start$$module$lib$linkify$core$parser = S_START$$module$lib$linkify$core$parser;
module$lib$linkify$core$parser.State = State$$module$lib$linkify$core$parser;
module$lib$linkify$core$parser.TOKENS = TOKENS$$module$lib$linkify$core$parser;
module$lib$linkify$core$parser.run = run$$module$lib$linkify$core$parser;
module$lib$linkify$core$parser.start = start$$module$lib$linkify$core$parser;
var module$lib$linkify$core$scanner = {};
Object.defineProperty(module$lib$linkify$core$scanner, "__esModule", {value:!0});
var TOKENS$$module$lib$linkify$core$scanner = module$lib$linkify$core$tokens.text, _state$$module$lib$linkify$core$scanner = module$lib$linkify$core$state, State$$module$lib$linkify$core$scanner = _state$$module$lib$linkify$core$scanner.CharacterState, stateify$$module$lib$linkify$core$scanner = _state$$module$lib$linkify$core$scanner.stateify, tlds$$module$lib$linkify$core$scanner = "abogado ac academy accountants active actor ad adult ae aero af ag agency ai airforce al allfinanz alsace am an android ao aq aquarelle ar archi army arpa as asia associates at attorney au auction audio autos aw ax axa az ba band bar bargains bayern bb bd be beer berlin best bf bg bh bi bid bike bio biz bj black blackfriday bloomberg blue bm bmw bn bnpparibas bo boo boutique br brussels bs bt budapest build builders business buzz bv bw by bz bzh ca cab cal camera camp cancerresearch capetown capital caravan cards care career careers casa cash cat catering cc cd center ceo cern cf cg ch channel cheap christmas chrome church ci citic city ck cl claims cleaning click clinic clothing club cm cn co coach codes coffee college cologne com community company computer condos construction consulting contractors cooking cool coop country cr credit creditcard cricket crs cruises cu cuisinella cv cw cx cy cymru cz dad dance dating day de deals degree delivery democrat dental dentist desi diamonds diet digital direct directory discount dj dk dm dnp do domains durban dvag dz eat ec edu education ee eg email emerck energy engineer engineering enterprises equipment er es esq estate et eu eurovision eus events everbank exchange expert exposed fail farm fashion feedback fi finance financial firmdale fish fishing fitness fj fk flights florist flsmidth fly fm fo foo forsale foundation fr frl frogans fund furniture futbol ga gal gallery gb gbiz gd ge gent gf gg gh gi gift gifts gives gl glass gle global globo gm gmail gmo gmx gn google gop gov gp gq gr graphics gratis green gripe gs gt gu guide guitars guru gw gy hamburg haus healthcare help here hiphop hiv hk hm hn holdings holiday homes horse host hosting house how hr ht hu ibm id ie il im immo immobilien in industries info ing ink institute insure int international investments io iq ir irish is it je jetzt jm jo jobs joburg jp juegos kaufen ke kg kh ki kim kitchen kiwi km kn koeln kp kr krd kred kw ky kz la lacaixa land latrobe lawyer lb lc lds lease legal lgbt li life lighting limited limo link lk loans london lotto lr ls lt ltda lu luxe luxury lv ly ma madrid maison management mango market marketing mc md me media meet melbourne meme memorial menu mg mh miami mil mini mk ml mm mn mo mobi moda moe monash money mormon mortgage moscow motorcycles mov mp mq mr ms mt mu museum mv mw mx my mz na nagoya name navy nc ne net network neustar new nexus nf ng ngo nhk ni ninja nl no np nr nra nrw nu nyc nz okinawa om ong onl ooo org organic otsuka ovh pa paris partners parts party pe pf pg ph pharmacy photo photography photos physio pics pictures pink pizza pk pl place plumbing pm pn pohl poker porn post pr praxi press pro prod productions prof properties property ps pt pub pw py qa qpon quebec re realtor recipes red rehab reise reisen reit ren rentals repair report republican rest restaurant reviews rich rio rip ro rocks rodeo rs rsvp ru ruhr rw ryukyu sa saarland sarl sb sc sca scb schmidt schule science scot sd se services sexy sg sh shiksha shoes si singles sj sk sl sm sn so social software sohu solar solutions soy space spiegel sr st su supplies supply support surf surgery suzuki sv sx sy sydney systems sz taipei tatar tattoo tax tc td technology tel tf tg th tienda tips tirol tj tk tl tm tn to today tokyo tools top town toys tp tr trade training travel trust tt tui tv tw tz ua ug uk university uno uol us uy uz va vacations vc ve vegas ventures versicherung vet vg vi viajes villas vision vlaanderen vn vodka vote voting voto voyage vu wales wang watch webcam website wed wedding wf whoswho wien wiki williamhill wme work works world ws wtc wtf xxx xyz yachts yandex ye yoga yokohama youtube yt za zip zm zone zw".split(" "), 
REGEXP_NUM$$module$lib$linkify$core$scanner = /[0-9]/, REGEXP_ALPHANUM$$module$lib$linkify$core$scanner = /[a-z0-9]/, COLON$$module$lib$linkify$core$scanner = ":", domainStates$$module$lib$linkify$core$scanner = [], makeState$$module$lib$linkify$core$scanner = function(b) {
  return new State$$module$lib$linkify$core$scanner(b);
}, T_DOMAIN$$module$lib$linkify$core$scanner = TOKENS$$module$lib$linkify$core$scanner.DOMAIN, T_LOCALHOST$$module$lib$linkify$core$scanner = TOKENS$$module$lib$linkify$core$scanner.LOCALHOST, T_NUM$$module$lib$linkify$core$scanner = TOKENS$$module$lib$linkify$core$scanner.NUM, T_PROTOCOL$$module$lib$linkify$core$scanner = TOKENS$$module$lib$linkify$core$scanner.PROTOCOL, T_TLD$$module$lib$linkify$core$scanner = TOKENS$$module$lib$linkify$core$scanner.TLD, T_WS$$module$lib$linkify$core$scanner = 
TOKENS$$module$lib$linkify$core$scanner.WS, S_START$$module$lib$linkify$core$scanner = makeState$$module$lib$linkify$core$scanner(), S_NUM$$module$lib$linkify$core$scanner = makeState$$module$lib$linkify$core$scanner(T_NUM$$module$lib$linkify$core$scanner), S_DOMAIN$$module$lib$linkify$core$scanner = makeState$$module$lib$linkify$core$scanner(T_DOMAIN$$module$lib$linkify$core$scanner), S_DOMAIN_HYPHEN$$module$lib$linkify$core$scanner = makeState$$module$lib$linkify$core$scanner(), S_WS$$module$lib$linkify$core$scanner = 
makeState$$module$lib$linkify$core$scanner(T_WS$$module$lib$linkify$core$scanner);
S_START$$module$lib$linkify$core$scanner.on("@", makeState$$module$lib$linkify$core$scanner(TOKENS$$module$lib$linkify$core$scanner.AT));
S_START$$module$lib$linkify$core$scanner.on(".", makeState$$module$lib$linkify$core$scanner(TOKENS$$module$lib$linkify$core$scanner.DOT));
S_START$$module$lib$linkify$core$scanner.on("+", makeState$$module$lib$linkify$core$scanner(TOKENS$$module$lib$linkify$core$scanner.PLUS));
S_START$$module$lib$linkify$core$scanner.on("#", makeState$$module$lib$linkify$core$scanner(TOKENS$$module$lib$linkify$core$scanner.POUND));
S_START$$module$lib$linkify$core$scanner.on("?", makeState$$module$lib$linkify$core$scanner(TOKENS$$module$lib$linkify$core$scanner.QUERY));
S_START$$module$lib$linkify$core$scanner.on("/", makeState$$module$lib$linkify$core$scanner(TOKENS$$module$lib$linkify$core$scanner.SLASH));
S_START$$module$lib$linkify$core$scanner.on(COLON$$module$lib$linkify$core$scanner, makeState$$module$lib$linkify$core$scanner(TOKENS$$module$lib$linkify$core$scanner.COLON));
S_START$$module$lib$linkify$core$scanner.on(/\n/, makeState$$module$lib$linkify$core$scanner(TOKENS$$module$lib$linkify$core$scanner.NL));
S_START$$module$lib$linkify$core$scanner.on(/\s/, S_WS$$module$lib$linkify$core$scanner);
S_WS$$module$lib$linkify$core$scanner.on(/[^\S\n]/, S_WS$$module$lib$linkify$core$scanner);
for (var i$$module$lib$linkify$core$scanner = 0;i$$module$lib$linkify$core$scanner < tlds$$module$lib$linkify$core$scanner.length;i$$module$lib$linkify$core$scanner++) {
  var newStates$$module$lib$linkify$core$scanner = stateify$$module$lib$linkify$core$scanner(tlds$$module$lib$linkify$core$scanner[i$$module$lib$linkify$core$scanner], S_START$$module$lib$linkify$core$scanner, T_TLD$$module$lib$linkify$core$scanner, T_DOMAIN$$module$lib$linkify$core$scanner);
  domainStates$$module$lib$linkify$core$scanner.push.apply(domainStates$$module$lib$linkify$core$scanner, newStates$$module$lib$linkify$core$scanner);
}
var partialProtocolFileStates$$module$lib$linkify$core$scanner = stateify$$module$lib$linkify$core$scanner("file", S_START$$module$lib$linkify$core$scanner, T_DOMAIN$$module$lib$linkify$core$scanner, T_DOMAIN$$module$lib$linkify$core$scanner), partialProtocolFtpStates$$module$lib$linkify$core$scanner = stateify$$module$lib$linkify$core$scanner("ftp", S_START$$module$lib$linkify$core$scanner, T_DOMAIN$$module$lib$linkify$core$scanner, T_DOMAIN$$module$lib$linkify$core$scanner), partialProtocolHttpStates$$module$lib$linkify$core$scanner = 
stateify$$module$lib$linkify$core$scanner("http", S_START$$module$lib$linkify$core$scanner, T_DOMAIN$$module$lib$linkify$core$scanner, T_DOMAIN$$module$lib$linkify$core$scanner);
domainStates$$module$lib$linkify$core$scanner.push.apply(domainStates$$module$lib$linkify$core$scanner, partialProtocolFileStates$$module$lib$linkify$core$scanner);
domainStates$$module$lib$linkify$core$scanner.push.apply(domainStates$$module$lib$linkify$core$scanner, partialProtocolFtpStates$$module$lib$linkify$core$scanner);
domainStates$$module$lib$linkify$core$scanner.push.apply(domainStates$$module$lib$linkify$core$scanner, partialProtocolHttpStates$$module$lib$linkify$core$scanner);
var S_PROTOCOL_FILE$$module$lib$linkify$core$scanner = partialProtocolFileStates$$module$lib$linkify$core$scanner.pop(), S_PROTOCOL_FTP$$module$lib$linkify$core$scanner = partialProtocolFtpStates$$module$lib$linkify$core$scanner.pop(), S_PROTOCOL_HTTP$$module$lib$linkify$core$scanner = partialProtocolHttpStates$$module$lib$linkify$core$scanner.pop(), S_PROTOCOL_SECURE$$module$lib$linkify$core$scanner = makeState$$module$lib$linkify$core$scanner(T_DOMAIN$$module$lib$linkify$core$scanner), S_FULL_PROTOCOL$$module$lib$linkify$core$scanner = 
makeState$$module$lib$linkify$core$scanner(T_PROTOCOL$$module$lib$linkify$core$scanner);
S_PROTOCOL_FTP$$module$lib$linkify$core$scanner.on("s", S_PROTOCOL_SECURE$$module$lib$linkify$core$scanner);
S_PROTOCOL_HTTP$$module$lib$linkify$core$scanner.on("s", S_PROTOCOL_SECURE$$module$lib$linkify$core$scanner);
domainStates$$module$lib$linkify$core$scanner.push(S_PROTOCOL_SECURE$$module$lib$linkify$core$scanner);
S_PROTOCOL_FILE$$module$lib$linkify$core$scanner.on(COLON$$module$lib$linkify$core$scanner, S_FULL_PROTOCOL$$module$lib$linkify$core$scanner);
S_PROTOCOL_FTP$$module$lib$linkify$core$scanner.on(COLON$$module$lib$linkify$core$scanner, S_FULL_PROTOCOL$$module$lib$linkify$core$scanner);
S_PROTOCOL_HTTP$$module$lib$linkify$core$scanner.on(COLON$$module$lib$linkify$core$scanner, S_FULL_PROTOCOL$$module$lib$linkify$core$scanner);
S_PROTOCOL_SECURE$$module$lib$linkify$core$scanner.on(COLON$$module$lib$linkify$core$scanner, S_FULL_PROTOCOL$$module$lib$linkify$core$scanner);
var partialLocalhostStates$$module$lib$linkify$core$scanner = stateify$$module$lib$linkify$core$scanner("localhost", S_START$$module$lib$linkify$core$scanner, T_LOCALHOST$$module$lib$linkify$core$scanner, T_DOMAIN$$module$lib$linkify$core$scanner);
domainStates$$module$lib$linkify$core$scanner.push.apply(domainStates$$module$lib$linkify$core$scanner, partialLocalhostStates$$module$lib$linkify$core$scanner);
S_START$$module$lib$linkify$core$scanner.on(REGEXP_NUM$$module$lib$linkify$core$scanner, S_NUM$$module$lib$linkify$core$scanner);
S_NUM$$module$lib$linkify$core$scanner.on("-", S_DOMAIN_HYPHEN$$module$lib$linkify$core$scanner);
S_NUM$$module$lib$linkify$core$scanner.on(REGEXP_NUM$$module$lib$linkify$core$scanner, S_NUM$$module$lib$linkify$core$scanner);
S_NUM$$module$lib$linkify$core$scanner.on(REGEXP_ALPHANUM$$module$lib$linkify$core$scanner, S_DOMAIN$$module$lib$linkify$core$scanner);
S_DOMAIN$$module$lib$linkify$core$scanner.on("-", S_DOMAIN_HYPHEN$$module$lib$linkify$core$scanner);
S_DOMAIN$$module$lib$linkify$core$scanner.on(REGEXP_ALPHANUM$$module$lib$linkify$core$scanner, S_DOMAIN$$module$lib$linkify$core$scanner);
for (i$$module$lib$linkify$core$scanner = 0;i$$module$lib$linkify$core$scanner < domainStates$$module$lib$linkify$core$scanner.length;i$$module$lib$linkify$core$scanner++) {
  domainStates$$module$lib$linkify$core$scanner[i$$module$lib$linkify$core$scanner].on("-", S_DOMAIN_HYPHEN$$module$lib$linkify$core$scanner), domainStates$$module$lib$linkify$core$scanner[i$$module$lib$linkify$core$scanner].on(REGEXP_ALPHANUM$$module$lib$linkify$core$scanner, S_DOMAIN$$module$lib$linkify$core$scanner);
}
S_DOMAIN_HYPHEN$$module$lib$linkify$core$scanner.on("-", S_DOMAIN_HYPHEN$$module$lib$linkify$core$scanner);
S_DOMAIN_HYPHEN$$module$lib$linkify$core$scanner.on(REGEXP_NUM$$module$lib$linkify$core$scanner, S_DOMAIN$$module$lib$linkify$core$scanner);
S_DOMAIN_HYPHEN$$module$lib$linkify$core$scanner.on(REGEXP_ALPHANUM$$module$lib$linkify$core$scanner, S_DOMAIN$$module$lib$linkify$core$scanner);
S_START$$module$lib$linkify$core$scanner.on(/./, makeState$$module$lib$linkify$core$scanner(TOKENS$$module$lib$linkify$core$scanner.SYM));
var run$$module$lib$linkify$core$scanner = function(b) {
  for (var a = b.toLowerCase(), e = b.length, c = 0, d = [];c < e;) {
    for (var f = S_START$$module$lib$linkify$core$scanner, h = null, g = 0, k = null, l = -1;c < e && (h = f.next(a[c]));) {
      f = h, f.accepts() ? (l = 0, k = f) : 0 <= l && l++, g++, c++;
    }
    0 > l || (c -= l, g -= l, f = k.emit(), d.push(new f(b.substr(c - g, g))));
  }
  return d;
}, start$$module$lib$linkify$core$scanner = S_START$$module$lib$linkify$core$scanner;
module$lib$linkify$core$scanner.State = State$$module$lib$linkify$core$scanner;
module$lib$linkify$core$scanner.TOKENS = TOKENS$$module$lib$linkify$core$scanner;
module$lib$linkify$core$scanner.run = run$$module$lib$linkify$core$scanner;
module$lib$linkify$core$scanner.start = start$$module$lib$linkify$core$scanner;
var module$lib$linkify$utils$options = {};
Object.defineProperty(module$lib$linkify$utils$options, "__esModule", {value:!0});
function noop$$module$lib$linkify$utils$options(b) {
  return b;
}
function typeToTarget$$module$lib$linkify$utils$options(b) {
  return "url" === b ? "_blank" : null;
}
function normalize$$module$lib$linkify$utils$options(b) {
  b = b || {};
  return{attributes:b.linkAttributes || null, defaultProtocol:b.defaultProtocol || "http", events:b.events || null, format:b.format || noop$$module$lib$linkify$utils$options, formatHref:b.formatHref || noop$$module$lib$linkify$utils$options, newLine:b.newLine || !1, nl2br:!!b.newLine || b.nl2br || !1, tagName:b.tagName || "a", target:b.target || typeToTarget$$module$lib$linkify$utils$options, linkClass:b.linkClass || "linkified"};
}
function resolve$$module$lib$linkify$utils$options(b) {
  for (var a = arguments.length, e = Array(1 < a ? a - 1 : 0), c = 1;c < a;c++) {
    e[c - 1] = arguments[c];
  }
  return "function" === typeof b ? b.apply(void 0, e) : b;
}
module$lib$linkify$utils$options.normalize = normalize$$module$lib$linkify$utils$options;
module$lib$linkify$utils$options.resolve = resolve$$module$lib$linkify$utils$options;
var module$lib$linkify = {}, _interopRequireWildcard$$module$lib$linkify = function(b) {
  return b && b.__esModule ? b : {"default":b};
};
Object.defineProperty(module$lib$linkify, "__esModule", {value:!0});
var options$$module$lib$linkify = _interopRequireWildcard$$module$lib$linkify(module$lib$linkify$utils$options), scanner$$module$lib$linkify = _interopRequireWildcard$$module$lib$linkify(module$lib$linkify$core$scanner), parser$$module$lib$linkify = _interopRequireWildcard$$module$lib$linkify(module$lib$linkify$core$parser), tokenize$$module$lib$linkify = function(b) {
  return parser$$module$lib$linkify.run(scanner$$module$lib$linkify.run(b));
}, find$$module$lib$linkify = function(b, a) {
  for (var e = void 0 === a ? null : a, c = tokenize$$module$lib$linkify(b), d = [], f = 0;f < c.length;f++) {
    !c[f].isLink || e && c[f].type !== e || d.push(c[f].toObject());
  }
  return d;
}, test$$module$lib$linkify = function(b, a) {
  var e = void 0 === a ? null : a, c = tokenize$$module$lib$linkify(b);
  return 1 === c.length && c[0].isLink && (!e || c[0].type === e);
};
module$lib$linkify.find = find$$module$lib$linkify;
module$lib$linkify.options = options$$module$lib$linkify;
module$lib$linkify.parser = parser$$module$lib$linkify;
module$lib$linkify.scanner = scanner$$module$lib$linkify;
module$lib$linkify.test = test$$module$lib$linkify;
module$lib$linkify.tokenize = tokenize$$module$lib$linkify;


window.linkify = module$lib$linkify;
})();
;(function (jQuery, linkify) {
"use strict";
var tokenize = linkify.tokenize, options = linkify.options;
"use strict";

var _toConsumableArray = function (arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } };

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

			var tagName = options.resolve(opts.tagName, token.type),
			    linkClass = options.resolve(opts.linkClass, token.type),
			    target = options.resolve(opts.target, token.type),
			    formatted = options.resolve(opts.format, token.toString(), token.type),
			    href = token.toHref(opts.defaultProtocol),
			    formattedHref = options.resolve(opts.formatHref, href, token.type),
			    attributesHash = options.resolve(opts.attributes, token.type),
			    events = options.resolve(opts.events, token.type);

			// Build the link
			var link = doc.createElement(tagName);
			link.setAttribute("href", formattedHref);
			link.setAttribute("class", linkClass);
			if (target) {
				link.setAttribute("target", target);
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
						link.attachEvent("on" + _event, events[_event]);
					}
				}
			}

			link.appendChild(doc.createTextNode(formatted));
			result.push(link);
		} else if (token.type === "nl" && opts.nl2br) {
			result.push(doc.createElement("br"));
		} else {
			result.push(doc.createTextNode(token.toString()));
		}
	}

	return result;
}

// Requires document.createElement
function linkifyElementHelper(element, opts, doc) {

	// Can the element be linkified?
	if (!element || typeof element !== "object" || element.nodeType !== HTML_NODE) {
		throw new Error("Cannot linkify " + element + " - Invalid DOM Node type");
	}

	// Is this element already a link?
	if (element.tagName.toLowerCase() === "a" /*|| element.hasClass('linkified')*/) {
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
				    tokens = tokenize(str);
				children.push.apply(children, _toConsumableArray(tokensToNodes(tokens, opts, doc)));

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
		throw new Error("Cannot find document implementation. " + "If you are in a non-browser environment like Node.js, " + "pass the document implementation as the third argument to linkifyElement.");
	}

	opts = options.normalize(opts);
	return linkifyElementHelper(element, opts, doc);
}

// Maintain reference to the recursive helper to save some option-normalization
// cycles
linkifyElement.helper = linkifyElementHelper;
linkifyElement.normalize = options.normalize;

/**
	Linkify a HTML DOM node
*/

/* do nothing for now */
"use strict";

var doc = undefined;

try {
	doc = document;
} catch (e) {
	doc = null;
}

// Applies the plugin to jQuery
function apply($) {
	var doc = arguments[1] === undefined ? null : arguments[1];

	$.fn = $.fn || {};

	try {
		doc = doc || window && window.document || global && global.document;
	} catch (e) {}

	if (!doc) {
		throw new Error("Cannot find document implementation. " + "If you are in a non-browser environment like Node.js, " + "pass the document implementation as the third argument to linkifyElement.");
	}

	if (typeof $.fn.linkify === "function") {
		// Already applied
		return;
	}

	function jqLinkify(opts) {
		opts = linkifyElement.normalize(opts);
		return this.each(function () {
			linkifyElement.helper(this, opts, doc);
		});
	}

	$.fn.linkify = jqLinkify;

	$(doc).ready(function () {
		$("[data-linkify]").each(function () {

			var $this = $(this),
			    data = $this.data(),
			    target = data.linkify,
			    nl2br = data.linkifyNlbr,
			    options = {
				linkAttributes: data.linkifyAttributes,
				defaultProtocol: data.linkifyDefaultProtocol,
				events: data.linkifyEvents,
				format: data.linkifyFormat,
				formatHref: data.linkifyFormatHref,
				newLine: data.linkifyNewline, // deprecated
				nl2br: !!nl2br && nl2br !== 0 && nl2br !== "false",
				tagName: data.linkifyTagname,
				target: data.linkifyTarget,
				linkClass: data.linkifyLinkclass };
			var $target = target === "this" ? $this : $this.find(target);
			$target.linkify(options);
		});
	});
}

// Apply it right away if possible
if (typeof jQuery !== "undefined" && doc) {
	apply(jQuery, doc);
}

/* do nothing for now */
window.linkifyElement = linkifyElement;
})(window.jQuery, window.linkify);