const createNoRatingsElement = () => {
  const element = document.createElement('div');
  element.className = 'section no-ratings';
  element.innerText = 'No ratings for this movie yet.';

  return element;
};

export default createNoRatingsElement;
