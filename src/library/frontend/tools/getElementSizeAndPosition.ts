export const getElementSizeAndPosition = (elementId: string) => {
  const element = document.getElementById(elementId);

  if (!element) {
    return null;
  }

  const width = element.offsetWidth; // Gets the element's width
  const leftOffset = element.offsetLeft; // Gets the element's left offset relative to the viewport

  return { width, leftOffset };
};
