"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _system = require("@mui/system");
var _styled = _interopRequireDefault(require("../styles/styled"));
var _MoreHoriz = _interopRequireDefault(require("../internal/svg-icons/MoreHoriz"));
var _ButtonBase = _interopRequireDefault(require("../ButtonBase"));
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["slots", "slotProps"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const BreadcrumbCollapsedButton = (0, _styled.default)(_ButtonBase.default)(({
  theme
}) => (0, _extends2.default)({
  display: 'flex',
  marginLeft: `calc(${theme.spacing(1)} * 0.5)`,
  marginRight: `calc(${theme.spacing(1)} * 0.5)`
}, theme.palette.mode === 'light' ? {
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.grey[700]
} : {
  backgroundColor: theme.palette.grey[700],
  color: theme.palette.grey[100]
}, {
  borderRadius: 2,
  '&:hover, &:focus': (0, _extends2.default)({}, theme.palette.mode === 'light' ? {
    backgroundColor: theme.palette.grey[200]
  } : {
    backgroundColor: theme.palette.grey[600]
  }),
  '&:active': (0, _extends2.default)({
    boxShadow: theme.shadows[0]
  }, theme.palette.mode === 'light' ? {
    backgroundColor: (0, _system.emphasize)(theme.palette.grey[200], 0.12)
  } : {
    backgroundColor: (0, _system.emphasize)(theme.palette.grey[600], 0.12)
  })
}));
const BreadcrumbCollapsedIcon = (0, _styled.default)(_MoreHoriz.default)({
  width: 24,
  height: 16
});

/**
 * @ignore - internal component.
 */
function BreadcrumbCollapsed(props) {
  const {
      slots = {},
      slotProps = {}
    } = props,
    otherProps = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(BreadcrumbCollapsedButton, (0, _extends2.default)({
      focusRipple: true
    }, otherProps, {
      ownerState: ownerState,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(BreadcrumbCollapsedIcon, (0, _extends2.default)({
        as: slots.CollapsedIcon,
        ownerState: ownerState
      }, slotProps.collapsedIcon))
    }))
  });
}
process.env.NODE_ENV !== "production" ? BreadcrumbCollapsed.propTypes = {
  /**
   * The props used for the CollapsedIcon slot.
   * @default {}
   */
  slotProps: _propTypes.default.shape({
    collapsedIcon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
  }),
  /**
   * The components used for each slot inside the BreadcumbCollapsed.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: _propTypes.default.shape({
    CollapsedIcon: _propTypes.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.object
} : void 0;
var _default = exports.default = BreadcrumbCollapsed;