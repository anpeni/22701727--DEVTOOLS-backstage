import generateUtilityClasses from '@mui/utils/generateUtilityClasses';
import generateUtilityClass from '../generateUtilityClass';
export function getListSubheaderUtilityClass(slot) {
  return generateUtilityClass('MuiListSubheader', slot);
}
const listSubheaderClasses = generateUtilityClasses('MuiListSubheader', ['root', 'colorPrimary', 'colorInherit', 'gutters', 'inset', 'sticky']);
export default listSubheaderClasses;