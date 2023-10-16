"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTabsUtilityClass = getTabsUtilityClass;
var _utils = require("@mui/utils");
var _generateUtilityClass = _interopRequireDefault(require("../generateUtilityClass"));
function getTabsUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiTabs', slot);
}
const tabsClasses = (0, _utils.unstable_generateUtilityClasses)('MuiTabs', ['root', 'vertical', 'flexContainer', 'flexContainerVertical', 'centered', 'scroller', 'fixed', 'scrollableX', 'scrollableY', 'hideScrollbar', 'scrollButtons', 'scrollButtonsHideMobile', 'indicator']);
var _default = exports.default = tabsClasses;