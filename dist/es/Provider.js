import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LatLngPropType, BoundingBoxPropType } from './propTypes';
import GeoSearchContext from './GeoSearchContext';

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
      return React.createElement(GeoSearchContext.Provider, {
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
}(Component);

_defineProperty(Provider, "propTypes", {
  google: PropTypes.object.isRequired,
  hits: PropTypes.arrayOf(PropTypes.object).isRequired,
  isRefineOnMapMove: PropTypes.bool.isRequired,
  hasMapMoveSinceLastRefine: PropTypes.bool.isRequired,
  isRefineEnable: PropTypes.bool.isRequired,
  refine: PropTypes.func.isRequired,
  toggleRefineOnMapMove: PropTypes.func.isRequired,
  setMapMoveSinceLastRefine: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  position: LatLngPropType,
  currentRefinement: BoundingBoxPropType
});

export default Provider;