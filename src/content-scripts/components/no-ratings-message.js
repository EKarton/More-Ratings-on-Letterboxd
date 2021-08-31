import './no-ratings-message.css';

const createNoRatingsMessageElement = () => {
  const element = document.createElement('div');
  element.className = 'section more-ratings__no-ratings-message';
  element.innerText = 'No ratings for this movie yet.';

  return element;
};

export default createNoRatingsMessageElement;
