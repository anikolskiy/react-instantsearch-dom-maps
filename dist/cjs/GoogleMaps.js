"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactInstantsearchDom = require("react-instantsearch-dom");

var _propTypes2 = require("./propTypes");

var _GoogleMapsContext = _interopRequireDefault(require("./GoogleMapsContext"));

var cx = (0, _reactInstantsearchDom.createClassNames)('GeoSearch');

var GoogleMaps =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(GoogleMaps, _Component);

  function GoogleMaps() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, GoogleMaps);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(GoogleMaps)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isUserInteraction", true);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isPendingRefine", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "listeners", []);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "mapRef", (0, _react.createRef)());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isMapReady: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setupListenersWhenMapIsReady", function () {
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

  (0, _createClass2.default)(GoogleMaps, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          google = _this$props.google,
          mapOptions = _this$props.mapOptions;
      this.instance = new google.maps.Map(this.mapRef.current, (0, _objectSpread2.default)({
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
      return _react.default.createElement("div", {
        className: cx('')
      }, _react.default.createElement("div", {
        ref: this.mapRef,
        className: cx('map')
      }), isMapReady && _react.default.createElement(_GoogleMapsContext.default.Provider, {
        value: this.state.value
      }, children));
    }
  }]);
  return GoogleMaps;
}(_react.Component);

(0, _defineProperty2.default)(GoogleMaps, "propTypes", {
  google: _propTypes.default.object.isRequired,
  initialZoom: _propTypes.default.number.isRequired,
  initialPosition: _propTypes2.LatLngPropType.isRequired,
  mapOptions: _propTypes.default.object.isRequired,
  onChange: _propTypes.default.func.isRequired,
  onIdle: _propTypes.default.func.isRequired,
  shouldUpdate: _propTypes.default.func.isRequired,
  boundingBox: _propTypes2.BoundingBoxPropType,
  boundingBoxPadding: _propTypes.default.number,
  children: _propTypes.default.node
});
var _default = GoogleMaps;
exports.default = _default;