import createElement from '../../helpers/create-element';
import { toolbar } from './toolbar';
import append from '../../helpers/append';


export default {
  getNode() {
    const menu = createElement({ className: 'menu' });
    append(menu, toolbar.getNode());

    return menu;
  },
};
