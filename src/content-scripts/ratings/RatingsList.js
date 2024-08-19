import './RatingsList.css';

const createRatingsListElement = (ratings) => {
  const element = document.createElement('div');

  element.className = 'more-ratings__ratings-list';
  element.append(...ratings.map((rating) => createRatingElement(rating)));

  return element;
};

const createRatingElement = ({ source, value }) => {
  const ratingElement = document.createElement('div');

  const ratingValueLabel = document.createElement('div');
  ratingValueLabel.className = 'more-ratings__ratings-list-item-value';
  ratingValueLabel.innerText = value;

  const ratingSourceLabel = document.createElement('div');
  ratingSourceLabel.className = 'more-ratings__ratings-list-item-source';
  ratingSourceLabel.innerText = getRatingName(source);

  ratingElement.append(ratingValueLabel, ratingSourceLabel);

  return ratingElement;
};

const getRatingName = (source) => {
  switch (source) {
    case 'Internet Movie Database': {
      return 'IMDB';
    }
    default: {
      return source;
    }
  }
};

export default createRatingsListElement;
