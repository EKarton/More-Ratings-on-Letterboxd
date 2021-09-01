import { fetchRatings } from '../fetch';
import createRatingsListElement from './RatingsList';
import createErrorMessageElement from './ErrorMessage';
import createNoRatingsMessageElement from './NoRatingsMessage';

export const addRatingsToWebpage = async () => {
  const sidebar = document.getElementsByClassName('sidebar')[0];

  const ratingsWrapper = document.createElement('div');
  ratingsWrapper.id = 'more-ratings-extension__ratings';
  ratingsWrapper.className = 'section';

  try {
    const movieTitle = document.getElementsByClassName('headline-1')[0].innerText;
    const releaseYear = document.getElementById('featured-film-header').querySelector('.number').innerText;

    const ratings = await fetchRatings(movieTitle, releaseYear);

    if (ratings.length === 0) {
      ratingsWrapper.appendChild(createNoRatingsMessageElement());
      return;
    }

    ratingsWrapper.appendChild(createRatingsListElement(ratings));
  } catch (err) {
    console.error(`Failed to fetch and inject ratings, ${err}`);

    ratingsWrapper.appendChild(createErrorMessageElement());
  } finally {
    sidebar.appendChild(ratingsWrapper);
  }
};

export const removeRatingsFromWebpage = () => {
  document.getElementById('more-ratings-extension__ratings').remove();
};
