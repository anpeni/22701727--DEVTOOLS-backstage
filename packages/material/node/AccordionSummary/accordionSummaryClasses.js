"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getAccordionSummaryUtilityClass = getAccordionSummaryUtilityClass;
var _utils = require("@mui/utils");
var _generateUtilityClass = _interopRequireDefault(require("../generateUtilityClass"));
function getAccordionSummaryUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiAccordionSummary', slot);
}
const accordionSummaryClasses = (0, _utils.unstable_generateUtilityClasses)('MuiAccordionSummary', ['root', 'expanded', 'focusVisible', 'disabled', 'gutters', 'contentGutters', 'content', 'expandIconWrapper']);
var _default = exports.default = accordionSummaryClasses;