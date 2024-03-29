import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connectGeoSearch } from 'react-instantsearch-dom';
import { LatLngPropType, BoundingBoxPropType } from './propTypes';

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

export var Connector =
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
}(Component);

_defineProperty(Connector, "propTypes", {
  hits: PropTypes.arrayOf(PropTypes.object).isRequired,
  isRefinedWithMap: PropTypes.bool.isRequired,
  enableRefineOnMapMove: PropTypes.bool.isRequired,
  refine: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  position: LatLngPropType,
  currentRefinement: BoundingBoxPropType
});

export default connectGeoSearch(Connector);