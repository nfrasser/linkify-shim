define('linkify/core/tokens', ['exports'], function (exports) {
    'use strict';
    var _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ('value' in desc && desc.writable) {
            return desc.value;
        } else {
            var getter = desc.get;
            if (getter === undefined) {
                return undefined;
            }
            return getter.call(receiver);
        }
    };
    var _inherits = function (subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass)
            subClass.__proto__ = superClass;
    };
    var _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps)
            Object.defineProperties(child, staticProps);
        if (instanceProps)
            Object.defineProperties(child.prototype, instanceProps);
    };
    var TextToken = function () {
        function TextToken(value) {
            this.v = value;
        }
        _prototypeProperties(TextToken, {
            test: {
                value: function (value) {
                    return value instanceof this;
                },
                writable: true,
                enumerable: true,
                configurable: true
            }
        }, {
            toString: {
                value: function () {
                    return this.v + '';
                },
                writable: true,
                enumerable: true,
                configurable: true
            }
        });
        return TextToken;
    }();
    var DOMAIN = function (TextToken) {
        function DOMAIN() {
            if (Object.getPrototypeOf(DOMAIN) !== null) {
                Object.getPrototypeOf(DOMAIN).apply(this, arguments);
            }
        }
        _inherits(DOMAIN, TextToken);
        return DOMAIN;
    }(TextToken);
    var AT = function (TextToken) {
        function AT() {
            _get(Object.getPrototypeOf(AT.prototype), 'constructor', this).call(this, '@');
        }
        _inherits(AT, TextToken);
        return AT;
    }(TextToken);
    var COLON = function (TextToken) {
        function COLON() {
            _get(Object.getPrototypeOf(COLON.prototype), 'constructor', this).call(this, ':');
        }
        _inherits(COLON, TextToken);
        return COLON;
    }(TextToken);
    var DOT = function (TextToken) {
        function DOT() {
            _get(Object.getPrototypeOf(DOT.prototype), 'constructor', this).call(this, '.');
        }
        _inherits(DOT, TextToken);
        return DOT;
    }(TextToken);
    var LOCALHOST = function (TextToken) {
        function LOCALHOST() {
            if (Object.getPrototypeOf(LOCALHOST) !== null) {
                Object.getPrototypeOf(LOCALHOST).apply(this, arguments);
            }
        }
        _inherits(LOCALHOST, TextToken);
        return LOCALHOST;
    }(TextToken);
    var NL = function (TextToken) {
        function NL() {
            _get(Object.getPrototypeOf(NL.prototype), 'constructor', this).call(this, '\n');
        }
        _inherits(NL, TextToken);
        return NL;
    }(TextToken);
    var NUM = function (TextToken) {
        function NUM() {
            if (Object.getPrototypeOf(NUM) !== null) {
                Object.getPrototypeOf(NUM).apply(this, arguments);
            }
        }
        _inherits(NUM, TextToken);
        return NUM;
    }(TextToken);
    var PLUS = function (TextToken) {
        function PLUS() {
            _get(Object.getPrototypeOf(PLUS.prototype), 'constructor', this).call(this, '+');
        }
        _inherits(PLUS, TextToken);
        return PLUS;
    }(TextToken);
    var POUND = function (TextToken) {
        function POUND() {
            _get(Object.getPrototypeOf(POUND.prototype), 'constructor', this).call(this, '#');
        }
        _inherits(POUND, TextToken);
        return POUND;
    }(TextToken);
    var PROTOCOL = function (TextToken) {
        function PROTOCOL() {
            if (Object.getPrototypeOf(PROTOCOL) !== null) {
                Object.getPrototypeOf(PROTOCOL).apply(this, arguments);
            }
        }
        _inherits(PROTOCOL, TextToken);
        return PROTOCOL;
    }(TextToken);
    var QUERY = function (TextToken) {
        function QUERY() {
            _get(Object.getPrototypeOf(QUERY.prototype), 'constructor', this).call(this, '?');
        }
        _inherits(QUERY, TextToken);
        return QUERY;
    }(TextToken);
    var SLASH = function (TextToken) {
        function SLASH() {
            _get(Object.getPrototypeOf(SLASH.prototype), 'constructor', this).call(this, '/');
        }
        _inherits(SLASH, TextToken);
        return SLASH;
    }(TextToken);
    var SYM = function (TextToken) {
        function SYM() {
            if (Object.getPrototypeOf(SYM) !== null) {
                Object.getPrototypeOf(SYM).apply(this, arguments);
            }
        }
        _inherits(SYM, TextToken);
        return SYM;
    }(TextToken);
    var TLD = function (TextToken) {
        function TLD() {
            if (Object.getPrototypeOf(TLD) !== null) {
                Object.getPrototypeOf(TLD).apply(this, arguments);
            }
        }
        _inherits(TLD, TextToken);
        return TLD;
    }(TextToken);
    var WS = function (TextToken) {
        function WS() {
            if (Object.getPrototypeOf(WS) !== null) {
                Object.getPrototypeOf(WS).apply(this, arguments);
            }
        }
        _inherits(WS, TextToken);
        return WS;
    }(TextToken);
    var text = {
        Base: TextToken,
        DOMAIN: DOMAIN,
        AT: AT,
        COLON: COLON,
        DOT: DOT,
        LOCALHOST: LOCALHOST,
        NL: NL,
        NUM: NUM,
        PLUS: PLUS,
        POUND: POUND,
        QUERY: QUERY,
        PROTOCOL: PROTOCOL,
        SLASH: SLASH,
        SYM: SYM,
        TLD: TLD,
        WS: WS
    };
    function isDomainToken(token) {
        return DOMAIN.test(token) || TLD.test(token);
    }
    var MultiToken = function () {
        function MultiToken(value) {
            this.v = value;
            this.type = 'token';
            this.isLink = false;
        }
        _prototypeProperties(MultiToken, {
            test: {
                value: function (token) {
                    return token instanceof this;
                },
                writable: true,
                enumerable: true,
                configurable: true
            }
        }, {
            toString: {
                value: function () {
                    var result = [];
                    for (var i = 0; i < this.v.length; i++) {
                        result.push(this.v[i].toString());
                    }
                    return result.join('');
                },
                writable: true,
                enumerable: true,
                configurable: true
            },
            toHref: {
                value: function () {
                    return this.toString();
                },
                writable: true,
                enumerable: true,
                configurable: true
            },
            toObject: {
                value: function () {
                    var protocol = arguments[0] === undefined ? 'http' : arguments[0];
                    return {
                        type: this.type,
                        value: this.toString(),
                        href: this.toHref(protocol)
                    };
                },
                writable: true,
                enumerable: true,
                configurable: true
            }
        });
        return MultiToken;
    }();
    var EMAIL = function (MultiToken) {
        function EMAIL(value) {
            _get(Object.getPrototypeOf(EMAIL.prototype), 'constructor', this).call(this, value);
            this.type = 'email';
            this.isLink = true;
        }
        _inherits(EMAIL, MultiToken);
        _prototypeProperties(EMAIL, null, {
            toHref: {
                value: function () {
                    return 'mailto:' + this.toString();
                },
                writable: true,
                enumerable: true,
                configurable: true
            }
        });
        return EMAIL;
    }(MultiToken);
    var TEXT = function (MultiToken) {
        function TEXT(value) {
            _get(Object.getPrototypeOf(TEXT.prototype), 'constructor', this).call(this, value);
            this.type = 'text';
        }
        _inherits(TEXT, MultiToken);
        return TEXT;
    }(MultiToken);
    var NL = function (MultiToken) {
        function NL(value) {
            _get(Object.getPrototypeOf(NL.prototype), 'constructor', this).call(this, value);
            this.type = 'nl';
        }
        _inherits(NL, MultiToken);
        return NL;
    }(MultiToken);
    var URL = function (MultiToken) {
        function URL(value) {
            _get(Object.getPrototypeOf(URL.prototype), 'constructor', this).call(this, value);
            this.type = 'url';
            this.isLink = true;
        }
        _inherits(URL, MultiToken);
        _prototypeProperties(URL, null, {
            toHref: {
                value: function () {
                    var protocol = arguments[0] === undefined ? 'http' : arguments[0];
                    var _hasProtocol = false, hasSlashSlash = false, tokens = this.v, result = [], i = 0;
                    while (PROTOCOL.test(tokens[i])) {
                        _hasProtocol = true;
                        result.push(tokens[i].toString().toLowerCase());
                        i++;
                    }
                    while (SLASH.test(tokens[i])) {
                        hasSlashSlash = true;
                        result.push(tokens[i].toString());
                        i++;
                    }
                    while (isDomainToken(tokens[i])) {
                        result.push(tokens[i].toString().toLowerCase());
                        i++;
                    }
                    for (; i < tokens.length; i++) {
                        result.push(tokens[i].toString());
                    }
                    result = result.join('');
                    if (!(_hasProtocol || hasSlashSlash)) {
                        result = protocol + '://' + result;
                    }
                    return result;
                },
                writable: true,
                enumerable: true,
                configurable: true
            },
            hasProtocol: {
                value: function () {
                    return this.v[0] instanceof PROTOCOL;
                },
                writable: true,
                enumerable: true,
                configurable: true
            }
        });
        return URL;
    }(MultiToken);
    var multi = {
        Base: MultiToken,
        EMAIL: EMAIL,
        NL: NL,
        TEXT: TEXT,
        URL: URL
    };
    exports.text = text;
    exports.multi = multi;
});
define('linkify/core/state', ['exports'], function (exports) {
    'use strict';
    var _inherits = function (subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass)
            subClass.__proto__ = superClass;
    };
    var _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps)
            Object.defineProperties(child, staticProps);
        if (instanceProps)
            Object.defineProperties(child.prototype, instanceProps);
    };
    var BaseState = function () {
        function BaseState(tClass) {
            this.j = [];
            this.T = tClass || null;
        }
        _prototypeProperties(BaseState, null, {
            on: {
                value: function (symbol, state) {
                    if (symbol instanceof Array) {
                        for (var i = 0; i < symbol.length; i++) {
                            this.j.push([
                                symbol[i],
                                state
                            ]);
                        }
                        return;
                    }
                    this.j.push([
                        symbol,
                        state
                    ]);
                },
                writable: true,
                enumerable: true,
                configurable: true
            },
            next: {
                value: function (item) {
                    for (var i = 0; i < this.j.length; i++) {
                        var jump = this.j[i], symbol = jump[0], state = jump[1];
                        if (this.test(item, symbol))
                            return state;
                    }
                    return false;
                },
                writable: true,
                enumerable: true,
                configurable: true
            },
            accepts: {
                value: function () {
                    return !!this.T;
                },
                writable: true,
                enumerable: true,
                configurable: true
            },
            test: {
                value: function (item, symbol) {
                    return item === symbol;
                },
                writable: true,
                enumerable: true,
                configurable: true
            },
            emit: {
                value: function () {
                    return this.T;
                },
                writable: true,
                enumerable: true,
                configurable: true
            }
        });
        return BaseState;
    }();
    var CharacterState = function (BaseState) {
        function CharacterState() {
            if (Object.getPrototypeOf(CharacterState) !== null) {
                Object.getPrototypeOf(CharacterState).apply(this, arguments);
            }
        }
        _inherits(CharacterState, BaseState);
        _prototypeProperties(CharacterState, null, {
            test: {
                value: function (character, charOrRegExp) {
                    return character === charOrRegExp || charOrRegExp instanceof RegExp && charOrRegExp.test(character);
                },
                writable: true,
                enumerable: true,
                configurable: true
            }
        });
        return CharacterState;
    }(BaseState);
    var TokenState = function (BaseState) {
        function TokenState() {
            if (Object.getPrototypeOf(TokenState) !== null) {
                Object.getPrototypeOf(TokenState).apply(this, arguments);
            }
        }
        _inherits(TokenState, BaseState);
        _prototypeProperties(TokenState, null, {
            test: {
                value: function (token, tokenClass) {
                    return tokenClass.test(token);
                },
                writable: true,
                enumerable: true,
                configurable: true
            }
        });
        return TokenState;
    }(BaseState);
    function stateify(str, start, endToken, defaultToken) {
        var i = 0, len = str.length, state = start, newStates = [], nextState = undefined;
        while (i < len && (nextState = state.next(str[i]))) {
            state = nextState;
            i++;
        }
        if (i >= len)
            return [];
        while (i < len - 1) {
            nextState = new CharacterState(defaultToken);
            newStates.push(nextState);
            state.on(str[i], nextState);
            state = nextState;
            i++;
        }
        nextState = new CharacterState(endToken);
        newStates.push(nextState);
        state.on(str[len - 1], nextState);
        return newStates;
    }
    exports.CharacterState = CharacterState;
    exports.TokenState = TokenState;
    exports.stateify = stateify;
});
define('linkify/core/tlds', [
    'exports',
    'module'
], function (exports, module) {
    'use strict';
    module.exports = 'abogado|ac|academy|accountants|active|actor|ad|adult|ae|aero|af|ag|agency|ai|airforce|al|allfinanz|alsace|am|an|android|ao|aq|aquarelle|ar|archi|army|arpa|as|asia|associates|at|attorney|au|auction|audio|autos|aw|ax|axa|az|ba|band|bar|bargains|bayern|bb|bd|be|beer|berlin|best|bf|bg|bh|bi|bid|bike|bio|biz|bj|black|blackfriday|bloomberg|blue|bm|bmw|bn|bnpparibas|bo|boo|boutique|br|brussels|bs|bt|budapest|build|builders|business|buzz|bv|bw|by|bz|bzh|ca|cab|cal|camera|camp|cancerresearch|capetown|capital|caravan|cards|care|career|careers|casa|cash|cat|catering|cc|cd|center|ceo|cern|cf|cg|ch|channel|cheap|christmas|chrome|church|ci|citic|city|ck|cl|claims|cleaning|click|clinic|clothing|club|cm|cn|co|coach|codes|coffee|college|cologne|com|community|company|computer|condos|construction|consulting|contractors|cooking|cool|coop|country|cr|credit|creditcard|cricket|crs|cruises|cu|cuisinella|cv|cw|cx|cy|cymru|cz|dad|dance|dating|day|de|deals|degree|delivery|democrat|dental|dentist|desi|diamonds|diet|digital|direct|directory|discount|dj|dk|dm|dnp|do|domains|durban|dvag|dz|eat|ec|edu|education|ee|eg|email|emerck|energy|engineer|engineering|enterprises|equipment|er|es|esq|estate|et|eu|eurovision|eus|events|everbank|exchange|expert|exposed|fail|farm|fashion|feedback|fi|finance|financial|firmdale|fish|fishing|fitness|fj|fk|flights|florist|flsmidth|fly|fm|fo|foo|forsale|foundation|fr|frl|frogans|fund|furniture|futbol|ga|gal|gallery|gb|gbiz|gd|ge|gent|gf|gg|gh|gi|gift|gifts|gives|gl|glass|gle|global|globo|gm|gmail|gmo|gmx|gn|google|gop|gov|gp|gq|gr|graphics|gratis|green|gripe|gs|gt|gu|guide|guitars|guru|gw|gy|hamburg|haus|healthcare|help|here|hiphop|hiv|hk|hm|hn|holdings|holiday|homes|horse|host|hosting|house|how|hr|ht|hu|ibm|id|ie|il|im|immo|immobilien|in|industries|info|ing|ink|institute|insure|int|international|investments|io|iq|ir|irish|is|it|je|jetzt|jm|jo|jobs|joburg|jp|juegos|kaufen|ke|kg|kh|ki|kim|kitchen|kiwi|km|kn|koeln|kp|kr|krd|kred|kw|ky|kz|la|lacaixa|land|latrobe|lawyer|lb|lc|lds|lease|legal|lgbt|li|life|lighting|limited|limo|link|lk|loans|london|lotto|lr|ls|lt|ltda|lu|luxe|luxury|lv|ly|ma|madrid|maison|management|mango|market|marketing|mc|md|me|media|meet|melbourne|meme|memorial|menu|mg|mh|miami|mil|mini|mk|ml|mm|mn|mo|mobi|moda|moe|monash|money|mormon|mortgage|moscow|motorcycles|mov|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|nagoya|name|navy|nc|ne|net|network|neustar|new|nexus|nf|ng|ngo|nhk|ni|ninja|nl|no|np|nr|nra|nrw|nu|nyc|nz|okinawa|om|ong|onl|ooo|org|organic|otsuka|ovh|pa|paris|partners|parts|party|pe|pf|pg|ph|pharmacy|photo|photography|photos|physio|pics|pictures|pink|pizza|pk|pl|place|plumbing|pm|pn|pohl|poker|porn|post|pr|praxi|press|pro|prod|productions|prof|properties|property|ps|pt|pub|pw|py|qa|qpon|quebec|re|realtor|recipes|red|rehab|reise|reisen|reit|ren|rentals|repair|report|republican|rest|restaurant|reviews|rich|rio|rip|ro|rocks|rodeo|rs|rsvp|ru|ruhr|rw|ryukyu|sa|saarland|sarl|sb|sc|sca|scb|schmidt|schule|science|scot|sd|se|services|sexy|sg|sh|shiksha|shoes|si|singles|sj|sk|sl|sm|sn|so|social|software|sohu|solar|solutions|soy|space|spiegel|sr|st|su|supplies|supply|support|surf|surgery|suzuki|sv|sx|sy|sydney|systems|sz|taipei|tatar|tattoo|tax|tc|td|technology|tel|tf|tg|th|tienda|tips|tirol|tj|tk|tl|tm|tn|to|today|tokyo|tools|top|town|toys|tp|tr|trade|training|travel|trust|tt|tui|tv|tw|tz|ua|ug|uk|university|uno|uol|us|uy|uz|va|vacations|vc|ve|vegas|ventures|versicherung|vet|vg|vi|viajes|villas|vision|vlaanderen|vn|vodka|vote|voting|voto|voyage|vu|wales|wang|watch|webcam|website|wed|wedding|wf|whoswho|wien|wiki|williamhill|wme|work|works|world|ws|wtc|wtf|xxx|xyz|yachts|yandex|ye|yoga|yokohama|youtube|yt|za|zip|zm|zone|zw'.split('|');
});
define('linkify/core/scanner', [
    'exports',
    './tokens',
    './state',
    './tlds'
], function (exports, _tokens, _state, _tlds) {
    'use strict';
    var _interopRequire = function (obj) {
        return obj && (obj['default'] || obj);
    };
    var TOKENS = _tokens.text;
    var State = _state.CharacterState;
    var stateify = _state.stateify;
    var tlds = _interopRequire(_tlds);
    var REGEXP_NUM = /[0-9]/, REGEXP_ALPHANUM = /[a-z0-9]/, COLON = ':';
    var domainStates = [], makeState = function (tokenClass) {
            return new State(tokenClass);
        };
    var T_DOMAIN = TOKENS.DOMAIN, T_LOCALHOST = TOKENS.LOCALHOST, T_NUM = TOKENS.NUM, T_PROTOCOL = TOKENS.PROTOCOL, T_TLD = TOKENS.TLD, T_WS = TOKENS.WS;
    var S_START = makeState(), S_NUM = makeState(T_NUM), S_DOMAIN = makeState(T_DOMAIN), S_DOMAIN_HYPHEN = makeState(), S_WS = makeState(T_WS);
    S_START.on('@', makeState(TOKENS.AT));
    S_START.on('.', makeState(TOKENS.DOT));
    S_START.on('+', makeState(TOKENS.PLUS));
    S_START.on('#', makeState(TOKENS.POUND));
    S_START.on('?', makeState(TOKENS.QUERY));
    S_START.on('/', makeState(TOKENS.SLASH));
    S_START.on(COLON, makeState(TOKENS.COLON));
    S_START.on(/\n/, makeState(TOKENS.NL));
    S_START.on(/\s/, S_WS);
    S_WS.on(/[^\S\n]/, S_WS);
    for (var i = 0; i < tlds.length; i++) {
        var newStates = stateify(tlds[i], S_START, T_TLD, T_DOMAIN);
        domainStates.push.apply(domainStates, newStates);
    }
    var partialProtocolFileStates = stateify('file', S_START, T_DOMAIN, T_DOMAIN), partialProtocolFtpStates = stateify('ftp', S_START, T_DOMAIN, T_DOMAIN), partialProtocolHttpStates = stateify('http', S_START, T_DOMAIN, T_DOMAIN);
    domainStates.push.apply(domainStates, partialProtocolFileStates);
    domainStates.push.apply(domainStates, partialProtocolFtpStates);
    domainStates.push.apply(domainStates, partialProtocolHttpStates);
    var S_PROTOCOL_FILE = partialProtocolFileStates.pop(), S_PROTOCOL_FTP = partialProtocolFtpStates.pop(), S_PROTOCOL_HTTP = partialProtocolHttpStates.pop(), S_PROTOCOL_SECURE = makeState(T_DOMAIN), S_FULL_PROTOCOL = makeState(T_PROTOCOL);
    S_PROTOCOL_FTP.on('s', S_PROTOCOL_SECURE);
    S_PROTOCOL_HTTP.on('s', S_PROTOCOL_SECURE);
    domainStates.push(S_PROTOCOL_SECURE);
    S_PROTOCOL_FILE.on(COLON, S_FULL_PROTOCOL);
    S_PROTOCOL_FTP.on(COLON, S_FULL_PROTOCOL);
    S_PROTOCOL_HTTP.on(COLON, S_FULL_PROTOCOL);
    S_PROTOCOL_SECURE.on(COLON, S_FULL_PROTOCOL);
    var partialLocalhostStates = stateify('localhost', S_START, T_LOCALHOST, T_DOMAIN);
    domainStates.push.apply(domainStates, partialLocalhostStates);
    S_START.on(REGEXP_NUM, S_NUM);
    S_NUM.on('-', S_DOMAIN_HYPHEN);
    S_NUM.on(REGEXP_NUM, S_NUM);
    S_NUM.on(REGEXP_ALPHANUM, S_DOMAIN);
    S_DOMAIN.on('-', S_DOMAIN_HYPHEN);
    S_DOMAIN.on(REGEXP_ALPHANUM, S_DOMAIN);
    for (var i = 0; i < domainStates.length; i++) {
        domainStates[i].on('-', S_DOMAIN_HYPHEN);
        domainStates[i].on(REGEXP_ALPHANUM, S_DOMAIN);
    }
    S_DOMAIN_HYPHEN.on('-', S_DOMAIN_HYPHEN);
    S_DOMAIN_HYPHEN.on(REGEXP_NUM, S_DOMAIN);
    S_DOMAIN_HYPHEN.on(REGEXP_ALPHANUM, S_DOMAIN);
    S_START.on(/./, makeState(TOKENS.SYM));
    var run = function (str) {
        var lowerStr = str.toLowerCase(), len = str.length, cursor = 0, tokens = [];
        while (cursor < len) {
            var state = S_START, secondState = null, nextState = null, tokenLength = 0, latestAccepting = null, sinceAccepts = -1;
            while (cursor < len && (nextState = state.next(lowerStr[cursor]))) {
                secondState = null;
                state = nextState;
                if (state.accepts()) {
                    sinceAccepts = 0;
                    latestAccepting = state;
                } else if (sinceAccepts >= 0) {
                    sinceAccepts++;
                }
                tokenLength++;
                cursor++;
            }
            if (sinceAccepts < 0)
                continue;
            cursor -= sinceAccepts;
            tokenLength -= sinceAccepts;
            var TOKEN = latestAccepting.emit();
            tokens.push(new TOKEN(str.substr(cursor - tokenLength, tokenLength)));
        }
        return tokens;
    };
    var start = S_START;
    exports.State = State;
    exports.TOKENS = TOKENS;
    exports.run = run;
    exports.start = start;
});
define('linkify/core/parser', [
    'exports',
    'module',
    './tokens',
    './state'
], function (exports, module, _tokens, _state) {
    'use strict';
    var TEXT_TOKENS = _tokens.text;
    var MULTI_TOKENS = _tokens.multi;
    var State = _state.TokenState;
    var makeState = function (tokenClass) {
        return new State(tokenClass);
    };
    var TT_DOMAIN = TEXT_TOKENS.DOMAIN, TT_AT = TEXT_TOKENS.AT, TT_COLON = TEXT_TOKENS.COLON, TT_DOT = TEXT_TOKENS.DOT, TT_LOCALHOST = TEXT_TOKENS.LOCALHOST, TT_NL = TEXT_TOKENS.NL, TT_NUM = TEXT_TOKENS.NUM, TT_PLUS = TEXT_TOKENS.PLUS, TT_POUND = TEXT_TOKENS.POUND, TT_PROTOCOL = TEXT_TOKENS.PROTOCOL, TT_QUERY = TEXT_TOKENS.QUERY, TT_SLASH = TEXT_TOKENS.SLASH, TT_SYM = TEXT_TOKENS.SYM, TT_TLD = TEXT_TOKENS.TLD;
    var T_EMAIL = MULTI_TOKENS.EMAIL, T_NL = MULTI_TOKENS.NL, T_TEXT = MULTI_TOKENS.TEXT, T_URL = MULTI_TOKENS.URL;
    var S_START = makeState();
    var S_PROTOCOL = makeState(), S_PROTOCOL_SLASH = makeState(), S_PROTOCOL_SLASH_SLASH = makeState(), S_DOMAIN = makeState(), S_DOMAIN_DOT = makeState(), S_TLD = makeState(T_URL), S_TLD_COLON = makeState(), S_TLD_PORT = makeState(T_URL), S_PSS_DOMAIN = makeState(), S_PSS_DOMAIN_DOT = makeState(), S_PSS_TLD = makeState(T_URL), S_PSS_TLD_COLON = makeState(), S_PSS_TLD_PORT = makeState(T_URL), S_URL = makeState(T_URL), S_URL_SYMS = makeState(), S_EMAIL_DOMAIN = makeState(), S_EMAIL_DOMAIN_DOT = makeState(), S_EMAIL = makeState(T_EMAIL), S_EMAIL_COLON = makeState(), S_EMAIL_PORT = makeState(T_EMAIL), S_LOCALPART = makeState(), S_LOCALPART_AT = makeState(), S_LOCALPART_DOT = makeState(), S_NL = makeState(T_NL);
    S_START.on(TT_NL, S_NL);
    S_START.on(TT_PROTOCOL, S_PROTOCOL);
    S_START.on(TT_SLASH, S_PROTOCOL_SLASH);
    S_PROTOCOL.on(TT_SLASH, S_PROTOCOL_SLASH);
    S_PROTOCOL_SLASH.on(TT_SLASH, S_PROTOCOL_SLASH_SLASH);
    S_START.on(TT_TLD, S_DOMAIN);
    S_START.on(TT_DOMAIN, S_DOMAIN);
    S_START.on(TT_LOCALHOST, S_TLD);
    S_START.on(TT_NUM, S_LOCALPART);
    S_PROTOCOL_SLASH_SLASH.on(TT_TLD, S_PSS_DOMAIN);
    S_PROTOCOL_SLASH_SLASH.on(TT_DOMAIN, S_PSS_DOMAIN);
    S_PROTOCOL_SLASH_SLASH.on(TT_LOCALHOST, S_PSS_TLD);
    S_DOMAIN.on(TT_DOT, S_DOMAIN_DOT);
    S_PSS_DOMAIN.on(TT_DOT, S_PSS_DOMAIN_DOT);
    S_EMAIL_DOMAIN.on(TT_DOT, S_EMAIL_DOMAIN_DOT);
    S_DOMAIN_DOT.on(TT_TLD, S_TLD);
    S_DOMAIN_DOT.on(TT_DOMAIN, S_DOMAIN);
    S_DOMAIN_DOT.on(TT_LOCALHOST, S_DOMAIN);
    S_PSS_DOMAIN_DOT.on(TT_TLD, S_PSS_TLD);
    S_PSS_DOMAIN_DOT.on(TT_DOMAIN, S_PSS_DOMAIN);
    S_PSS_DOMAIN_DOT.on(TT_LOCALHOST, S_PSS_DOMAIN);
    S_EMAIL_DOMAIN_DOT.on(TT_TLD, S_EMAIL);
    S_EMAIL_DOMAIN_DOT.on(TT_DOMAIN, S_EMAIL_DOMAIN);
    S_EMAIL_DOMAIN_DOT.on(TT_LOCALHOST, S_EMAIL_DOMAIN);
    S_TLD.on(TT_DOT, S_DOMAIN_DOT);
    S_PSS_TLD.on(TT_DOT, S_PSS_DOMAIN_DOT);
    S_EMAIL.on(TT_DOT, S_EMAIL_DOMAIN_DOT);
    S_TLD.on(TT_COLON, S_TLD_COLON);
    S_TLD.on(TT_SLASH, S_URL);
    S_TLD_COLON.on(TT_NUM, S_TLD_PORT);
    S_TLD_PORT.on(TT_SLASH, S_URL);
    S_PSS_TLD.on(TT_COLON, S_PSS_TLD_COLON);
    S_PSS_TLD.on(TT_SLASH, S_URL);
    S_PSS_TLD_COLON.on(TT_NUM, S_PSS_TLD_PORT);
    S_PSS_TLD_PORT.on(TT_SLASH, S_URL);
    S_EMAIL.on(TT_COLON, S_EMAIL_COLON);
    S_EMAIL_COLON.on(TT_NUM, S_EMAIL_PORT);
    var qsAccepting = [
        TT_DOMAIN,
        TT_AT,
        TT_LOCALHOST,
        TT_NUM,
        TT_PLUS,
        TT_POUND,
        TT_PROTOCOL,
        TT_SLASH,
        TT_TLD
    ];
    var qsNonAccepting = [
        TT_COLON,
        TT_DOT,
        TT_QUERY,
        TT_SYM
    ];
    S_URL.on(qsAccepting, S_URL);
    S_URL_SYMS.on(qsAccepting, S_URL);
    S_URL.on(qsNonAccepting, S_URL_SYMS);
    S_URL_SYMS.on(qsNonAccepting, S_URL_SYMS);
    var localpartAccepting = [
        TT_DOMAIN,
        TT_COLON,
        TT_NUM,
        TT_PLUS,
        TT_POUND,
        TT_QUERY,
        TT_SYM,
        TT_TLD
    ];
    S_DOMAIN.on(localpartAccepting, S_LOCALPART);
    S_DOMAIN.on(TT_AT, S_LOCALPART_AT);
    S_DOMAIN_DOT.on(localpartAccepting, S_LOCALPART);
    S_TLD.on(localpartAccepting, S_LOCALPART);
    S_TLD.on(TT_AT, S_LOCALPART_AT);
    S_TLD_COLON.on(localpartAccepting, S_LOCALPART);
    S_TLD_COLON.on(TT_DOT, S_LOCALPART);
    S_TLD_COLON.on(TT_AT, S_LOCALPART_AT);
    S_TLD_PORT.on(localpartAccepting, S_LOCALPART);
    S_TLD_PORT.on(TT_DOT, S_LOCALPART_DOT);
    S_TLD_PORT.on(TT_AT, S_LOCALPART_AT);
    S_LOCALPART.on(localpartAccepting, S_LOCALPART);
    S_LOCALPART.on(TT_AT, S_LOCALPART_AT);
    S_LOCALPART.on(TT_DOT, S_LOCALPART_DOT);
    S_LOCALPART_DOT.on(localpartAccepting, S_LOCALPART);
    S_LOCALPART_AT.on(TT_TLD, S_EMAIL_DOMAIN);
    S_LOCALPART_AT.on(TT_DOMAIN, S_EMAIL_DOMAIN);
    S_LOCALPART_AT.on(TT_LOCALHOST, S_EMAIL);
    var run = function (tokens) {
        var len = tokens.length, cursor = 0, multis = [], textTokens = [];
        while (cursor < len) {
            var state = S_START, secondState = null, nextState = null, multiLength = 0, latestAccepting = null, sinceAccepts = -1;
            while (cursor < len && !(secondState = state.next(tokens[cursor]))) {
                textTokens.push(tokens[cursor++]);
            }
            while (cursor < len && (nextState = secondState || state.next(tokens[cursor]))) {
                secondState = null;
                state = nextState;
                if (state.accepts()) {
                    sinceAccepts = 0;
                    latestAccepting = state;
                } else if (sinceAccepts >= 0) {
                    sinceAccepts++;
                }
                cursor++;
                multiLength++;
            }
            if (sinceAccepts < 0) {
                for (var i = cursor - multiLength; i < cursor; i++) {
                    textTokens.push(tokens[i]);
                }
            } else {
                if (textTokens.length > 0) {
                    multis.push(new T_TEXT(textTokens));
                    textTokens = [];
                }
                cursor -= sinceAccepts;
                multiLength -= sinceAccepts;
                var MULTI = latestAccepting.emit();
                multis.push(new MULTI(tokens.slice(cursor - multiLength, cursor)));
            }
        }
        if (textTokens.length > 0) {
            multis.push(new T_TEXT(textTokens));
        }
        return multis;
    };
    module.exports = {
        State: State,
        TOKENS: MULTI_TOKENS,
        run: run,
        start: S_START
    };
});
define('linkify', [
    'exports',
    './linkify/core/scanner',
    './linkify/core/parser'
], function (exports, _linkifyCoreScanner, _linkifyCoreParser) {
    'use strict';
    var scanner = _linkifyCoreScanner;
    var parser = _linkifyCoreParser;
    var tokenize = function (str) {
        return parser.run(scanner.run(str));
    };
    var find = function (str) {
        var tokens = tokenize(str), filtered = [];
        for (var i = 0; i < tokens.length; i++) {
            if (tokens[i].isLink) {
                filtered.push(tokens[i].toObject());
            }
        }
        return filtered;
    };
    var test = function (str) {
        var type = arguments[1] === undefined ? null : arguments[1];
        var tokens = tokenize(str);
        return tokens.length === 1 && tokens[0].isLink && (!type || tokens[0].type === type);
    };
    exports.find = find;
    exports.parser = parser;
    exports.scanner = scanner;
    exports.test = test;
    exports.tokenize = tokenize;
});