import { unstable_generateUtilityClasses as generateUtilityClasses } from '@mui/utils';
import generateUtilityClass from '../generateUtilityClass';
export function getSliderUtilityClass(slot) {
  return generateUtilityClass('MuiSlider', slot);
}
var sliderClasses = generateUtilityClasses('MuiSlider', ['root', 'active', 'colorPrimary', 'colorSecondary', 'colorError', 'colorInfo', 'colorSuccess', 'colorWarning', 'disabled', 'dragging', 'focusVisible', 'mark', 'markActive', 'marked', 'markLabel', 'markLabelActive', 'rail', 'sizeSmall', 'thumb', 'thumbColorPrimary', 'thumbColorSecondary', 'thumbColorError', 'thumbColorSuccess', 'thumbColorInfo', 'thumbColorWarning', 'track', 'trackInverted', 'trackFalse', 'thumbSizeSmall', 'valueLabel', 'valueLabelOpen', 'valueLabelCircle', 'valueLabelLabel', 'vertical']);
export default sliderClasses;