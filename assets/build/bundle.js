/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(1);
	$('#target').html('hello the world!');
	__webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*eslint-disable no-unused-vars*/
	/*!
	 * jQuery JavaScript Library v3.1.0
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-07-07T21:44Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};



		function DOMEval( code, doc ) {
			doc = doc || document;

			var script = doc.createElement( "script" );

			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.1.0",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.0
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-01-04
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true;
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
		// Known :disabled false positives:
		// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
		// not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Check form elements and option elements for explicit disabling
			return "label" in elem && elem.disabled === disabled ||
				"form" in elem && elem.disabled === disabled ||

				// Check non-disabled form elements for fieldset[disabled] ancestors
				"form" in elem && elem.disabled === false && (
					// Support: IE6-11+
					// Ancestry is covered for us
					elem.isDisabled === disabled ||

					// Otherwise, assume any non-<option> under fieldset[disabled] is disabled
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						("label" in elem || !disabledAncestor( elem )) !== disabled
				);
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnotwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? JSON.parse( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) ),
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support: IE <=9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox <=42
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				return ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

				/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;

		} else {
			opt.duration = typeof opt.duration === "number" ?
				opt.duration : opt.duration in jQuery.fx.speeds ?
					jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in uncached url if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rts, "" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win, rect, doc,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;

				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}

			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	jQuery.parseJSON = JSON.parse;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}





	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}


	return jQuery;
	} );


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "body {\n  background: url(" + __webpack_require__(5) + ");\n  color: #FFFFFF; }\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);