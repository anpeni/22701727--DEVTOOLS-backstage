"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getStackUtilityClass = getStackUtilityClass;
var _utils = require("@mui/utils");
var _generateUtilityClass = _interopRequireDefault(require("../generateUtilityClass"));
function getStackUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiStack', slot);
}
const stackClasses = (0, _utils.unstable_generateUtilityClasses)('MuiStack', ['root']);
var _default = exports.default = stackClasses;