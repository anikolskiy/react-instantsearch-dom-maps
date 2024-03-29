/*! React InstantSearchDOMMaps UNRELEASED | © Algolia, inc. | https://github.com/algolia/react-instantsearch */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-instantsearch-dom'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-instantsearch-dom', 'react-dom'], factory) :
  (global = global || self, factory(global.ReactInstantSearchDOMMaps = {}, global.React, global.ReactInstantSearchDOM, global.ReactDOM));
}(this, function (exports, React, reactInstantsearchDom, ReactDOM) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var global$1 = (typeof global !== "undefined" ? global :
              typeof self !== "undefined" ? self :
              typeof window !== "undefined" ? window : {});

  if (typeof global$1.setTimeout === 'function') ;
  if (typeof global$1.clearTimeout === 'function') ;

  // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
  var performance = global$1.performance || {};
  var performanceNow =
    performance.now        ||
    performance.mozNow     ||
    performance.msNow      ||
    performance.oNow       ||
    performance.webkitNow  ||
    function(){ return (new Date()).getTime() };

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  function emptyFunction() {}

  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
      err.name = 'Invariant Violation';
      throw err;
    }  shim.isRequired = shim;
    function getShim() {
      return shim;
    }  // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim
    };

    ReactPropTypes.checkPropTypes = emptyFunction;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
  });

  var GoogleMapsLoader =
  /*#__PURE__*/
  function (_Component) {
    _inherits(GoogleMapsLoader, _Component);

    function GoogleMapsLoader() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, GoogleMapsLoader);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GoogleMapsLoader)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        google: null
      });

      _defineProperty(_assertThisInitialized(_this), "isUnmounting", false);

      return _this;
    }

    _createClass(GoogleMapsLoader, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        // Inline the import to avoid to run the module on the server (rely on `document`)
        // Under the hood we use `dynamic-import-node` to transpile the `import` to `require`
        // see: https://github.com/algolia/react-instantsearch/issues/1425
        return Promise.resolve().then(function () { return script$1; }).then(function (_ref) {
          var injectScript = _ref.default;
          var _this2$props = _this2.props,
              apiKey = _this2$props.apiKey,
              endpoint = _this2$props.endpoint;
          var operator = endpoint.indexOf('?') !== -1 ? '&' : '?';
          var endpointWithCredentials = "".concat(endpoint).concat(operator, "key=").concat(apiKey);
          injectScript(endpointWithCredentials, function () {
            if (!_this2.isUnmounting) {
              _this2.setState(function () {
                return {
                  google: window.google
                };
              });
            }
          });
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.isUnmounting = true;
      }
    }, {
      key: "render",
      value: function render() {
        if (!this.state.google) {
          return null;
        }

        return this.props.children(this.state.google);
      }
    }]);

    return GoogleMapsLoader;
  }(React.Component);

  _defineProperty(GoogleMapsLoader, "defaultProps", {
    endpoint: 'https://maps.googleapis.com/maps/api/js?v=quarterly'
  });

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function isEqualPosition(a, b) {
    if (a === b) {
      return true;
    }

    if (a === undefined || b === undefined) {
      return false;
    }

    return a.lat === b.lat && a.lng === b.lng;
  }

  function isEqualCurrentRefinement(a, b) {
    if (a === b) {
      return true;
    }

    if (a === undefined || b === undefined) {
      return false;
    }

    return isEqualPosition(a.northEast, b.northEast) && isEqualPosition(a.southWest, b.southWest);
  }

  var Connector =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Connector, _Component);

    function Connector() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Connector);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Connector)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        isRefineOnMapMove: _this.props.enableRefineOnMapMove,
        hasMapMoveSinceLastRefine: false,
        previousPosition: _this.props.position,
        previousCurrentRefinement: _this.props.currentRefinement
      });

      _defineProperty(_assertThisInitialized(_this), "toggleRefineOnMapMove", function () {
        return _this.setState(function (_ref) {
          var isRefineOnMapMove = _ref.isRefineOnMapMove;
          return {
            isRefineOnMapMove: !isRefineOnMapMove
          };
        });
      });

      _defineProperty(_assertThisInitialized(_this), "setMapMoveSinceLastRefine", function (next) {
        var hasMapMoveSinceLastRefine = _this.state.hasMapMoveSinceLastRefine;

        if (hasMapMoveSinceLastRefine === next) {
          return;
        }

        _this.setState(function () {
          return {
            hasMapMoveSinceLastRefine: next
          };
        });
      });

      return _this;
    }

    _createClass(Connector, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            hits = _this$props.hits,
            isRefinedWithMap = _this$props.isRefinedWithMap,
            position = _this$props.position,
            currentRefinement = _this$props.currentRefinement,
            refine = _this$props.refine,
            children = _this$props.children;
        var _this$state = this.state,
            isRefineOnMapMove = _this$state.isRefineOnMapMove,
            hasMapMoveSinceLastRefine = _this$state.hasMapMoveSinceLastRefine;
        return children({
          toggleRefineOnMapMove: this.toggleRefineOnMapMove,
          setMapMoveSinceLastRefine: this.setMapMoveSinceLastRefine,
          hits: hits,
          isRefinedWithMap: isRefinedWithMap,
          isRefineOnMapMove: isRefineOnMapMove,
          // @MAJOR hasMapMoveSinceLastRefine -> hasMapMovedSinceLastRefine
          hasMapMoveSinceLastRefine: hasMapMoveSinceLastRefine,
          position: position,
          currentRefinement: currentRefinement,
          refine: refine
        });
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        var position = props.position,
            currentRefinement = props.currentRefinement;
        var previousPosition = state.previousPosition,
            previousCurrentRefinement = state.previousCurrentRefinement;
        var positionChanged = !isEqualPosition(previousPosition, position);
        var currentRefinementChanged = !isEqualCurrentRefinement(previousCurrentRefinement, currentRefinement);
        var sliceNextState = {
          previousPosition: position,
          previousCurrentRefinement: currentRefinement
        };

        if (positionChanged || currentRefinementChanged) {
          return _objectSpread({}, sliceNextState, {
            hasMapMoveSinceLastRefine: false
          });
        }

        return sliceNextState;
      }
    }]);

    return Connector;
  }(React.Component);
  var Connector$1 = reactInstantsearchDom.connectGeoSearch(Connector);

  var GeoSearchContext = React__default.createContext({
    // The actual default value comes from the prop of the component
    // wrapping the `Provider`.
    isRefineOnMapMove: true,
    hasMapMoveSinceLastRefine: false,
    toggleRefineOnMapMove: function toggleRefineOnMapMove() {},
    setMapMoveSinceLastRefine: function setMapMoveSinceLastRefine() {},
    refineWithInstance: function refineWithInstance() {}
  });

  var Provider =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Provider)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "isPendingRefine", false);

      _defineProperty(_assertThisInitialized(_this), "boundingBox", null);

      _defineProperty(_assertThisInitialized(_this), "previousBoundingBox", null);

      _defineProperty(_assertThisInitialized(_this), "refineWithInstance", function (instance) {
        var refine = _this.props.refine;
        var bounds = instance.getBounds();
        refine({
          northEast: bounds.getNorthEast().toJSON(),
          southWest: bounds.getSouthWest().toJSON()
        });
      });

      _defineProperty(_assertThisInitialized(_this), "mapValue", {
        isRefineOnMapMove: _this.props.isRefineOnMapMove,
        hasMapMoveSinceLastRefine: _this.props.hasMapMoveSinceLastRefine,
        toggleRefineOnMapMove: _this.props.toggleRefineOnMapMove,
        setMapMoveSinceLastRefine: _this.props.setMapMoveSinceLastRefine,
        refineWithInstance: _this.refineWithInstance
      });

      _defineProperty(_assertThisInitialized(_this), "getMapValue", function () {
        var haveContextValuesChanges = _this.mapValue.isRefineOnMapMove !== _this.props.isRefineOnMapMove || _this.mapValue.hasMapMoveSinceLastRefine !== _this.props.hasMapMoveSinceLastRefine;

        if (haveContextValuesChanges) {
          _this.mapValue = _objectSpread({}, _this.mapValue, {
            isRefineOnMapMove: _this.props.isRefineOnMapMove,
            hasMapMoveSinceLastRefine: _this.props.hasMapMoveSinceLastRefine
          });
        }

        return _this.mapValue;
      });

      _defineProperty(_assertThisInitialized(_this), "onChange", function () {
        var _this$props = _this.props,
            isRefineOnMapMove = _this$props.isRefineOnMapMove,
            isRefineEnable = _this$props.isRefineEnable,
            setMapMoveSinceLastRefine = _this$props.setMapMoveSinceLastRefine;

        if (isRefineEnable) {
          setMapMoveSinceLastRefine(true);

          if (isRefineOnMapMove) {
            _this.isPendingRefine = true;
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onIdle", function (_ref) {
        var instance = _ref.instance;

        if (_this.isPendingRefine) {
          _this.isPendingRefine = false;

          _this.refineWithInstance(instance);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "shouldUpdate", function () {
        var hasMapMoveSinceLastRefine = _this.props.hasMapMoveSinceLastRefine;
        return !_this.isPendingRefine && !hasMapMoveSinceLastRefine;
      });

      return _this;
    }

    _createClass(Provider, [{
      key: "createBoundingBoxFromHits",
      value: function createBoundingBoxFromHits(hits) {
        var google = this.props.google;
        var latLngBounds = hits.reduce(function (acc, hit) {
          return acc.extend(hit._geoloc);
        }, new google.maps.LatLngBounds());
        return {
          northEast: latLngBounds.getNorthEast().toJSON(),
          southWest: latLngBounds.getSouthWest().toJSON()
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            hits = _this$props2.hits,
            currentRefinement = _this$props2.currentRefinement,
            children = _this$props2.children; // We use this value for differentiate the padding to apply during
        // fitBounds. When we don't have a currenRefinement (boundingBox)
        // we let GoogleMaps compute the automatic padding. But when we
        // provide the currentRefinement we explicitly set the padding
        // to `0` otherwise the map will decrease the zoom on each refine.

        var boundingBoxPadding = !currentRefinement ? undefined : 0;
        var boundingBox = !currentRefinement && Boolean(hits.length) ? this.createBoundingBoxFromHits(hits) : currentRefinement;
        return React__default.createElement(GeoSearchContext.Provider, {
          value: this.getMapValue()
        }, children({
          onChange: this.onChange,
          onIdle: this.onIdle,
          shouldUpdate: this.shouldUpdate,
          boundingBox: boundingBox,
          boundingBoxPadding: boundingBoxPadding
        }));
      }
    }]);

    return Provider;
  }(React.Component);

  var GoogleMapsContext = React__default.createContext({
    // We mount the context only once the map is created. Thus, we can assume
    // that the value provided through the context is never `undefined`. We can't
    // create an instance at that point, hence the cast.
    google: {},
    instance: {}
  });

  var cx = reactInstantsearchDom.createClassNames('GeoSearch');

  var GoogleMaps =
  /*#__PURE__*/
  function (_Component) {
    _inherits(GoogleMaps, _Component);

    function GoogleMaps() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, GoogleMaps);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GoogleMaps)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "isUserInteraction", true);

      _defineProperty(_assertThisInitialized(_this), "isPendingRefine", false);

      _defineProperty(_assertThisInitialized(_this), "listeners", []);

      _defineProperty(_assertThisInitialized(_this), "mapRef", React.createRef());

      _defineProperty(_assertThisInitialized(_this), "state", {
        isMapReady: false
      });

      _defineProperty(_assertThisInitialized(_this), "setupListenersWhenMapIsReady", function () {
        _this.listeners = [];

        _this.setState({
          isMapReady: true,
          value: {
            google: _this.props.google,
            instance: _this.instance
          }
        });

        var onChange = function onChange() {
          if (_this.isUserInteraction) {
            _this.props.onChange();
          }
        };

        _this.listeners.push(_this.instance.addListener('center_changed', onChange));

        _this.listeners.push(_this.instance.addListener('zoom_changed', onChange));

        _this.listeners.push(_this.instance.addListener('dragstart', onChange));

        _this.listeners.push(_this.instance.addListener('idle', function () {
          if (_this.isUserInteraction) {
            _this.props.onIdle({
              instance: _this.instance
            });
          }
        }));
      });

      return _this;
    }

    _createClass(GoogleMaps, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props = this.props,
            google = _this$props.google,
            mapOptions = _this$props.mapOptions;
        this.instance = new google.maps.Map(this.mapRef.current, _objectSpread({
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
          clickableIcons: false,
          zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
          }
        }, mapOptions));
        this.listeners.push(google.maps.event.addListenerOnce(this.instance, 'idle', this.setupListenersWhenMapIsReady));
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var _this2 = this;

        var _this$props2 = this.props,
            google = _this$props2.google,
            initialZoom = _this$props2.initialZoom,
            initialPosition = _this$props2.initialPosition,
            boundingBox = _this$props2.boundingBox,
            boundingBoxPadding = _this$props2.boundingBoxPadding,
            shouldUpdate = _this$props2.shouldUpdate;

        if (!shouldUpdate()) {
          return;
        }

        if (boundingBox) {
          this.lockUserInteration(function () {
            var oldBounds = _this2.instance.getBounds();

            var newBounds = new google.maps.LatLngBounds(boundingBox.southWest, boundingBox.northEast);

            if (!newBounds.equals(oldBounds)) {
              _this2.instance.fitBounds(newBounds, boundingBoxPadding);
            }
          });
        } else {
          this.lockUserInteration(function () {
            _this2.instance.setZoom(initialZoom);

            _this2.instance.setCenter(initialPosition);
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.listeners.forEach(function (listener) {
          listener.remove();
        });
        this.listeners = [];
      }
    }, {
      key: "lockUserInteration",
      value: function lockUserInteration(functionThatAltersTheMapPosition) {
        this.isUserInteraction = false;
        functionThatAltersTheMapPosition();
        this.isUserInteraction = true;
      }
    }, {
      key: "render",
      value: function render() {
        var children = this.props.children;
        var isMapReady = this.state.isMapReady;
        return React__default.createElement("div", {
          className: cx('')
        }, React__default.createElement("div", {
          ref: this.mapRef,
          className: cx('map')
        }), isMapReady && React__default.createElement(GoogleMapsContext.Provider, {
          value: this.state.value
        }, children));
      }
    }]);

    return GoogleMaps;
  }(React.Component);

  var GeoSearch =
  /*#__PURE__*/
  function (_Component) {
    _inherits(GeoSearch, _Component);

    function GeoSearch() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, GeoSearch);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GeoSearch)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "renderChildrenWithBoundFunction", function (_ref) {
        var hits = _ref.hits,
            position = _ref.position,
            rest = _objectWithoutProperties(_ref, ["hits", "position"]);

        var _this$props = _this.props,
            google = _this$props.google,
            children = _this$props.children,
            initialZoom = _this$props.initialZoom,
            initialPosition = _this$props.initialPosition,
            enableRefine = _this$props.enableRefine,
            enableRefineOnMapMove = _this$props.enableRefineOnMapMove,
            defaultRefinement = _this$props.defaultRefinement,
            mapOptions = _objectWithoutProperties(_this$props, ["google", "children", "initialZoom", "initialPosition", "enableRefine", "enableRefineOnMapMove", "defaultRefinement"]);

        return React__default.createElement(Provider, _extends({}, rest, {
          testID: "Provider",
          google: google,
          hits: hits,
          position: position,
          isRefineEnable: enableRefine
        }), function (_ref2) {
          var boundingBox = _ref2.boundingBox,
              boundingBoxPadding = _ref2.boundingBoxPadding,
              onChange = _ref2.onChange,
              onIdle = _ref2.onIdle,
              shouldUpdate = _ref2.shouldUpdate;
          return React__default.createElement(GoogleMaps, {
            testID: "GoogleMaps",
            google: google,
            initialZoom: initialZoom,
            initialPosition: position || initialPosition,
            mapOptions: mapOptions,
            boundingBox: boundingBox,
            boundingBoxPadding: boundingBoxPadding,
            onChange: onChange,
            onIdle: onIdle,
            shouldUpdate: shouldUpdate
          }, children({
            hits: hits
          }));
        });
      });

      return _this;
    }

    _createClass(GeoSearch, [{
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            enableRefineOnMapMove = _this$props2.enableRefineOnMapMove,
            defaultRefinement = _this$props2.defaultRefinement;
        return React__default.createElement(Connector$1, {
          testID: "Connector",
          enableRefineOnMapMove: enableRefineOnMapMove,
          defaultRefinement: defaultRefinement
        }, this.renderChildrenWithBoundFunction);
      }
    }]);

    return GeoSearch;
  }(React.Component);

  _defineProperty(GeoSearch, "defaultProps", {
    initialZoom: 1,
    initialPosition: {
      lat: 0,
      lng: 0
    },
    enableRefine: true,
    enableRefineOnMapMove: true,
    defaultRefinement: null
  });

  var registerEvents = function registerEvents(events, props, instance) {
    var eventsAvailable = Object.keys(events);
    var listeners = Object.keys(props).filter(function (key) {
      return eventsAvailable.indexOf(key) !== -1;
    }).map(function (name) {
      return instance.addListener(events[name], function (event) {
        props[name]({
          event: event,
          marker: instance
        });
      });
    });
    return function () {
      listeners.forEach(function (listener) {
        return listener.remove();
      });
    };
  };
  var createFilterProps = function createFilterProps(excludes) {
    return function (props) {
      return Object.keys(props).filter(function (name) {
        return excludes.indexOf(name) === -1;
      }).reduce(function (acc, name) {
        return _objectSpread({}, acc, _defineProperty({}, name, props[name]));
      }, {});
    };
  };

  var withGoogleMaps = function withGoogleMaps(Wrapped) {
    var WithGoogleMaps = function WithGoogleMaps(props) {
      return React__default.createElement(GoogleMapsContext.Consumer, null, function (_ref) {
        var google = _ref.google,
            instance = _ref.instance;
        return React__default.createElement(Wrapped // @TODO: remove the cast once TypeScript fixes the issue
        // https://github.com/Microsoft/TypeScript/issues/28938
        , _extends({}, props, {
          google: google,
          googleMapsInstance: instance
        }));
      });
    };

    return WithGoogleMaps;
  };

  var eventTypes = {
    onClick: 'click',
    onDoubleClick: 'dblclick',
    onMouseDown: 'mousedown',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseUp: 'mouseup'
  };
  var excludes = ['children'].concat(Object.keys(eventTypes));
  var filterProps = createFilterProps(excludes);
  var Marker =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Marker, _Component);

    function Marker() {
      _classCallCheck(this, Marker);

      return _possibleConstructorReturn(this, _getPrototypeOf(Marker).apply(this, arguments));
    }

    _createClass(Marker, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props = this.props,
            google = _this$props.google,
            googleMapsInstance = _this$props.googleMapsInstance,
            hit = _this$props.hit,
            props = _objectWithoutProperties(_this$props, ["google", "googleMapsInstance", "hit"]);

        this.instance = new google.maps.Marker(_objectSpread({}, filterProps(props), {
          map: googleMapsInstance,
          position: hit._geoloc
        }));
        this.removeEventsListeners = registerEvents(eventTypes, this.props, this.instance);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.removeEventsListeners();
        this.removeEventsListeners = registerEvents(eventTypes, this.props, this.instance);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.instance.setMap(null);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return Marker;
  }(React.Component);
  var Marker$1 = withGoogleMaps(Marker);

  var createHTMLMarker = function createHTMLMarker(google) {
    var HTMLMarker =
    /*#__PURE__*/
    function (_google$maps$OverlayV) {
      _inherits(HTMLMarker, _google$maps$OverlayV);

      function HTMLMarker(_ref) {
        var _this;

        var position = _ref.position,
            map = _ref.map,
            className = _ref.className,
            _ref$anchor = _ref.anchor,
            anchor = _ref$anchor === void 0 ? {
          x: 0,
          y: 0
        } : _ref$anchor;

        _classCallCheck(this, HTMLMarker);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(HTMLMarker).call(this));
        _this.anchor = anchor;
        _this.subscriptions = [];
        _this.latLng = new google.maps.LatLng(position);
        _this.element = document.createElement('div');
        _this.element.className = className;
        _this.element.style.position = 'absolute'; // Force the "white-space" of the element will avoid the
        // content to collapse when we move the map from center

        _this.element.style.whiteSpace = 'nowrap';

        _this.setMap(map);

        return _this;
      }

      _createClass(HTMLMarker, [{
        key: "onAdd",
        value: function onAdd() {
          if (this.getPanes()) {
            this.getPanes().overlayMouseTarget.appendChild(this.element);
          }
        }
      }, {
        key: "draw",
        value: function draw() {
          if (this.getProjection()) {
            var position = this.getProjection().fromLatLngToDivPixel(this.latLng);
            var offsetX = this.anchor.x + this.element.offsetWidth / 2;
            var offsetY = this.anchor.y + this.element.offsetHeight;
            this.element.style.left = "".concat(Math.round(position.x - offsetX), "px");
            this.element.style.top = "".concat(Math.round(position.y - offsetY), "px"); // Markers to the south are in front of markers to the north
            // This is the default behaviour of Google Maps

            this.element.style.zIndex = parseInt(this.element.style.top, 10);
          }
        }
      }, {
        key: "onRemove",
        value: function onRemove() {
          if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
            this.subscriptions.forEach(function (subscription) {
              return subscription.remove();
            });
            delete this.element;
            this.subscriptions = [];
          }
        }
      }, {
        key: "addListener",
        value: function addListener(eventName, listener) {
          var _this2 = this;

          var subscription = {
            remove: function remove() {
              _this2.element.removeEventListener(eventName, listener);

              _this2.subscriptions = _this2.subscriptions.filter(function (_) {
                return _ !== subscription;
              });
            }
          };
          this.element.addEventListener(eventName, listener);
          this.subscriptions = this.subscriptions.concat(subscription);
          return subscription;
        }
      }, {
        key: "getPosition",
        value: function getPosition() {
          return this.latLng;
        }
      }]);

      return HTMLMarker;
    }(google.maps.OverlayView);

    return HTMLMarker;
  };

  var eventTypes$1 = {
    onClick: 'click',
    onDoubleClick: 'dblclick',
    onMouseDown: 'mousedown',
    onMouseEnter: 'mouseenter',
    onMouseLeave: 'mouseleave',
    onMouseMove: 'mousemove',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseUp: 'mouseup'
  };
  var CustomMarker =
  /*#__PURE__*/
  function (_Component) {
    _inherits(CustomMarker, _Component);

    function CustomMarker() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, CustomMarker);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CustomMarker)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        marker: null
      });

      return _this;
    }

    _createClass(CustomMarker, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props = this.props,
            hit = _this$props.hit,
            google = _this$props.google,
            googleMapsInstance = _this$props.googleMapsInstance,
            className = _this$props.className,
            anchor = _this$props.anchor; // Not the best way to create the reference of the CustomMarker
        // but since the Google object is required didn't find another
        // solution. Ideas?

        var Marker = createHTMLMarker(google);
        var marker = new Marker({
          map: googleMapsInstance,
          position: hit._geoloc,
          className: className,
          anchor: anchor
        });
        this.removeListeners = registerEvents(eventTypes$1, this.props, marker);
        this.setState(function () {
          return {
            marker: marker
          };
        });
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var children = this.props.children;
        var marker = this.state.marker;
        this.removeListeners();
        this.removeListeners = registerEvents(eventTypes$1, this.props, marker);

        if (!CustomMarker.isReact16()) {
          ReactDOM.unstable_renderSubtreeIntoContainer(this, children, marker.element);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var marker = this.state.marker;

        if (!CustomMarker.isReact16()) {
          ReactDOM.unmountComponentAtNode(marker.element);
        }

        marker.setMap(null);
      }
    }, {
      key: "render",
      value: function render() {
        var children = this.props.children;
        var marker = this.state.marker;

        if (!marker || !CustomMarker.isReact16()) {
          return null;
        }

        return ReactDOM.createPortal(children, marker.element);
      }
    }], [{
      key: "isReact16",
      value: function isReact16() {
        return typeof ReactDOM.createPortal === 'function';
      }
    }]);

    return CustomMarker;
  }(React.Component);

  _defineProperty(CustomMarker, "defaultProps", {
    className: '',
    anchor: {
      x: 0,
      y: 0
    }
  });

  var CustomMarker$1 = withGoogleMaps(CustomMarker);

  var cx$1 = reactInstantsearchDom.createClassNames('GeoSearch');
  var Redo = function Redo(_ref) {
    var googleMapsInstance = _ref.googleMapsInstance,
        translate = _ref.translate,
        hasMapMoveSinceLastRefine = _ref.hasMapMoveSinceLastRefine,
        refineWithInstance = _ref.refineWithInstance;
    return React__default.createElement("div", {
      className: cx$1('control')
    }, React__default.createElement("button", {
      className: cx$1('redo', !hasMapMoveSinceLastRefine && 'redo--disabled'),
      disabled: !hasMapMoveSinceLastRefine,
      onClick: function onClick() {
        return refineWithInstance(googleMapsInstance);
      }
    }, translate('redo')));
  };

  var RedoWrapper = function RedoWrapper(props) {
    return React__default.createElement(GeoSearchContext.Consumer, null, function (_ref2) {
      var hasMapMoveSinceLastRefine = _ref2.hasMapMoveSinceLastRefine,
          refineWithInstance = _ref2.refineWithInstance;
      return React__default.createElement(Redo, _extends({}, props, {
        hasMapMoveSinceLastRefine: hasMapMoveSinceLastRefine,
        refineWithInstance: refineWithInstance
      }));
    });
  };

  var Redo$1 = reactInstantsearchDom.translatable({
    redo: 'Redo search here'
  })(withGoogleMaps(RedoWrapper));

  var cx$2 = reactInstantsearchDom.createClassNames('GeoSearch');
  var Control = function Control(_ref) {
    var googleMapsInstance = _ref.googleMapsInstance,
        translate = _ref.translate,
        isRefineOnMapMove = _ref.isRefineOnMapMove,
        hasMapMoveSinceLastRefine = _ref.hasMapMoveSinceLastRefine,
        toggleRefineOnMapMove = _ref.toggleRefineOnMapMove,
        refineWithInstance = _ref.refineWithInstance;
    return React__default.createElement("div", {
      className: cx$2('control')
    }, isRefineOnMapMove || !hasMapMoveSinceLastRefine ? React__default.createElement("label", {
      className: cx$2('label')
    }, React__default.createElement("input", {
      className: cx$2('input'),
      type: "checkbox",
      checked: isRefineOnMapMove,
      onChange: toggleRefineOnMapMove
    }), translate('control')) : React__default.createElement("button", {
      className: cx$2('redo'),
      onClick: function onClick() {
        return refineWithInstance(googleMapsInstance);
      }
    }, translate('redo')));
  };

  var ControlWrapper = function ControlWrapper(props) {
    return React__default.createElement(GeoSearchContext.Consumer, null, function (_ref2) {
      var isRefineOnMapMove = _ref2.isRefineOnMapMove,
          hasMapMoveSinceLastRefine = _ref2.hasMapMoveSinceLastRefine,
          toggleRefineOnMapMove = _ref2.toggleRefineOnMapMove,
          refineWithInstance = _ref2.refineWithInstance;
      return React__default.createElement(Control, _extends({}, props, {
        isRefineOnMapMove: isRefineOnMapMove,
        hasMapMoveSinceLastRefine: hasMapMoveSinceLastRefine,
        toggleRefineOnMapMove: toggleRefineOnMapMove,
        refineWithInstance: refineWithInstance
      }));
    });
  };

  var Control$1 = reactInstantsearchDom.translatable({
    control: 'Search as I move the map',
    redo: 'Redo search here'
  })(withGoogleMaps(ControlWrapper));

  var script = createCommonjsModule(function (module) {
  /*!
    * $script.js JS loader & dependency manager
    * https://github.com/ded/script.js
    * (c) Dustin Diaz 2014 | License MIT
    */

  (function (name, definition) {
    if ( module.exports) module.exports = definition();
    else this[name] = definition();
  })('$script', function () {
    var doc = document
      , head = doc.getElementsByTagName('head')[0]
      , f = false
      , push = 'push'
      , readyState = 'readyState'
      , onreadystatechange = 'onreadystatechange'
      , list = {}
      , delay = {}
      , scripts = {}
      , scriptpath
      , urlArgs;

    function every(ar, fn) {
      for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
      return 1
    }
    function each(ar, fn) {
      every(ar, function (el) {
        return !fn(el)
      });
    }

    function $script(paths, idOrDone, optDone) {
      paths = paths[push] ? paths : [paths];
      var idOrDoneIsDone = idOrDone && idOrDone.call
        , done = idOrDoneIsDone ? idOrDone : optDone
        , id = idOrDoneIsDone ? paths.join('') : idOrDone
        , queue = paths.length;
      function loopFn(item) {
        return item.call ? item() : list[item]
      }
      function callback() {
        if (!--queue) {
          list[id] = 1;
          done && done();
          for (var dset in delay) {
            every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = []);
          }
        }
      }
      setTimeout(function () {
        each(paths, function loading(path, force) {
          if (path === null) return callback()
          
          if (!force && !/^https?:\/\//.test(path) && scriptpath) {
            path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
          }
          
          if (scripts[path]) {
            return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true); }, 0)
          }

          scripts[path] = 1;
          create(path, callback);
        });
      }, 0);
      return $script
    }

    function create(path, fn) {
      var el = doc.createElement('script'), loaded;
      el.onload = el.onerror = el[onreadystatechange] = function () {
        if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
        el.onload = el[onreadystatechange] = null;
        loaded = 1;
        scripts[path] = 2;
        fn();
      };
      el.async = 1;
      el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
      head.insertBefore(el, head.lastChild);
    }

    $script.get = create;

    $script.order = function (scripts, id, done) {
      (function callback(s) {
        s = scripts.shift();
        !scripts.length ? $script(s, id, done) : $script(s, callback);
      }());
    };

    $script.path = function (p) {
      scriptpath = p;
    };
    $script.urlArgs = function (str) {
      urlArgs = str;
    };
    $script.ready = function (deps, ready, req) {
      deps = deps[push] ? deps : [deps];
      var missing = [];
      !each(deps, function (dep) {
        list[dep] || missing[push](dep);
      }) && every(deps, function (dep) {return list[dep]}) ?
        ready() : !function (key) {
        delay[key] = delay[key] || [];
        delay[key][push](ready);
        req && req(missing);
      }(deps.join('|'));
      return $script
    };

    $script.done = function (idOrDone) {
      $script([null], idOrDone);
    };

    return $script
  });
  });

  var script$1 = /*#__PURE__*/Object.freeze({
    'default': script,
    __moduleExports: script
  });

  exports.Control = Control$1;
  exports.CustomMarker = CustomMarker$1;
  exports.GeoSearch = GeoSearch;
  exports.GoogleMapsLoader = GoogleMapsLoader;
  exports.Marker = Marker$1;
  exports.Redo = Redo$1;
  exports.withGoogleMaps = withGoogleMaps;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ReactInstantSearchDOMMaps.js.map
