import 'arrive';
import { fetchRatings } from './utils';
import createRatingsListElement from './ratings-list-element';

window.onload = async () => {
  const movieTitle = document.getElementsByClassName('headline-1')[0].innerText;
  const releaseYear = document
    .getElementById('featured-film-header')
    .querySelector('.number').innerText;

  const ratings = await fetchRatings(movieTitle, releaseYear);

  document
    .getElementsByClassName('sidebar')[0]
    .appendChild(createRatingsListElement(ratings));
};
