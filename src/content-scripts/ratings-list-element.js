import { getRatingName } from './utils';
import './styles.css';

const createRatingsListElement = (ratings) => {
  const element = document.createElement('div');

  element.className = 'section external-ratings';
  element.append(...ratings.map((rating) => createRatingElement(rating)));

  return element;
};

const createRatingElement = ({ source, value }) => {
  const ratingElementWrapper = document.createElement('div');

  const ratingElement = document.createElement('div');

  const ratingValueLabel = document.createElement('div');
  ratingValueLabel.className = 'external-ratings__value';
  ratingValueLabel.innerText = value;

  const ratingSourceLabel = document.createElement('div');
  ratingSourceLabel.className = 'external-ratings__source';
  ratingSourceLabel.innerText = getRatingName(source);

  ratingElement.append(ratingValueLabel, ratingSourceLabel);
  ratingElementWrapper.appendChild(ratingElement);

  return ratingElementWrapper;
};

export default createRatingsListElement;
