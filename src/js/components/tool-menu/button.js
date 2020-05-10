import createElement from '../../utils/create-element';

export class Button {
  constructor(title, id) {
    this.title = title;
    this.id = id;
  };

  getNode() {
    const params = {
      tag: 'div',
      className: 'button',
      attributes: {
        innerText: this.title,
        id: this.id,
      },
    };

    const button = createElement(params);

    return button;
  }
}
