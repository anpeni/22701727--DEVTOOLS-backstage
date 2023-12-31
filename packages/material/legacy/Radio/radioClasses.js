import { unstable_generateUtilityClasses as generateUtilityClasses } from '@mui/utils';
import generateUtilityClass from '../generateUtilityClass';
export function getRadioUtilityClass(slot) {
  return generateUtilityClass('MuiRadio', slot);
}
var radioClasses = generateUtilityClasses('MuiRadio', ['root', 'checked', 'disabled', 'colorPrimary', 'colorSecondary', 'sizeSmall']);
export default radioClasses;