"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Connector = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactInstantsearchDom = require("react-instantsearch-dom");

var _propTypes2 = require("./propTypes");

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
  (0, _inherits2.default)(Connector, _Component);

  function Connector() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Connector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Connector)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isRefineOnMapMove: _this.props.enableRefineOnMapMove,
      hasMapMoveSinceLastRefine: false,
      previousPosition: _this.props.position,
      previousCurrentRefinement: _this.props.currentRefinement
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "toggleRefineOnMapMove", function () {
      return _this.setState(function (_ref) {
        var isRefineOnMapMove = _ref.isRefineOnMapMove;
        return {
          isRefineOnMapMove: !isRefineOnMapMove
        };
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setMapMoveSinceLastRefine", function (next) {
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

  (0, _createClass2.default)(Connector, [{
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
        return (0, _objectSpread2.default)({}, sliceNextState, {
          hasMapMoveSinceLastRefine: false
        });
      }

      return sliceNextState;
    }
  }]);
  return Connector;
}(_react.Component);

exports.Connector = Connector;
(0, _defineProperty2.default)(Connector, "propTypes", {
  hits: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  isRefinedWithMap: _propTypes.default.bool.isRequired,
  enableRefineOnMapMove: _propTypes.default.bool.isRequired,
  refine: _propTypes.default.func.isRequired,
  children: _propTypes.default.func.isRequired,
  position: _propTypes2.LatLngPropType,
  currentRefinement: _propTypes2.BoundingBoxPropType
});

var _default = (0, _reactInstantsearchDom.connectGeoSearch)(Connector);

exports.default = _default;