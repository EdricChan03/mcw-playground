import { MDCBanner } from '@material/banner';
import { MDCRipple } from '@material/ripple';
import { MDCTooltip, YPosition } from '@material/tooltip';
import { MDCTopAppBar } from '@material/top-app-bar';

const banner = new MDCBanner(document.querySelector('.mdc-banner'));
banner.open();

const ripple = new MDCRipple(document.querySelector('.foo-button'));

// document.querySelectorAll('.mdc-tooltip').forEach(el => {
//   const tooltip = new MDCTooltip(el);
//   tooltip.setTooltipPosition({ yPos: YPosition.BELOW });
// });
const tooltip = new MDCTooltip(document.querySelector('.mdc-tooltip'));

const topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
