import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { createClassNames } from 'react-instantsearch-dom';
import { LatLngPropType, BoundingBoxPropType } from './propTypes';
import GoogleMapsContext from './GoogleMapsContext';
var cx = createClassNames('GeoSearch');

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

    _defineProperty(_assertThisInitialized(_this), "mapRef", createRef());

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
      return React.createElement("div", {
        className: cx('')
      }, React.createElement("div", {
        ref: this.mapRef,
        className: cx('map')
      }), isMapReady && React.createElement(GoogleMapsContext.Provider, {
        value: this.state.value
      }, children));
    }
  }]);

  return GoogleMaps;
}(Component);

_defineProperty(GoogleMaps, "propTypes", {
  google: PropTypes.object.isRequired,
  initialZoom: PropTypes.number.isRequired,
  initialPosition: LatLngPropType.isRequired,
  mapOptions: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onIdle: PropTypes.func.isRequired,
  shouldUpdate: PropTypes.func.isRequired,
  boundingBox: BoundingBoxPropType,
  boundingBoxPadding: PropTypes.number,
  children: PropTypes.node
});

export default GoogleMaps;