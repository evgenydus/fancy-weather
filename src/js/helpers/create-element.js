export default ({ tag = 'div', className, attributes = {} }) => {
  const element = document.createElement(tag);

  if (Array.isArray(className)) {
    className.forEach((cls) => {
      element.classList.add(cls);
    });
  } else {
    element.classList.add(className);
  }

  Object.assign(element, attributes);

  return element;
};
