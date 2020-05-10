import { createElement } from '../../unused/utils';
import { toolbar } from './toolbar';
import append from '../../utils/append';


export default {
  getNode() {
    const menu = createElement({ className: 'menu' });
    append(menu, toolbar.getNode());

    return menu;
  },
};
