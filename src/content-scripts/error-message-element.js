const createErrorMessageElement = () => {
  const element = document.createElement('div');
  element.className = 'section error-ratings';

  const topMessage = document.createElement('div');
  topMessage.innerText = 'Failed to fetch ratings.';

  const bottomMessage = document.createElement('div');
  bottomMessage.innerText = 'Refresh the page to try again';

  element.append(topMessage, bottomMessage);

  return element;
};

export default createErrorMessageElement;
