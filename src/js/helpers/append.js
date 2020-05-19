export default (container, children) => {
  if (Array.isArray(children)) {
    children.forEach((childItem) => {
      container.appendChild(childItem);
    });
  } else {
    container.appendChild(children);
  }
};