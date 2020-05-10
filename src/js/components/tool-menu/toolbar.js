import { Button } from './button';
import updateBackgroundFor from '../../helpers/update-background-for';
import { createElement } from '../../unused/utils';
import append from '../../utils/append';

export const toolbar = {
  button: new Button({ title: 'loop', onClick: () => updateBackgroundFor('') }),
  dropdown: null,
  switchBox: null,
  getNode() {
    const toolWrapper = createElement({ className: 'tool-wrapper' });
    append(toolWrapper, this.button.getNode());

    return toolWrapper;
  },
};
