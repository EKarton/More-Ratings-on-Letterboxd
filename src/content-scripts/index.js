import 'arrive';
import { fetchRatings } from './utils';
import createRatingsListElement from './components/ratings-list';
import createErrorMessageElement from './components/error-message';
import createNoRatingsMessageElement from './components/no-ratings-message';

window.onload = async () => {
  const sidebar = document.getElementsByClassName('sidebar')[0];

  try {
    const movieTitle = document.getElementsByClassName('headline-1')[0].innerText;
    const releaseYear = document.getElementById('featured-film-header').querySelector('.number').innerText;

    const ratings = await fetchRatings(movieTitle, releaseYear);

    if (ratings.length === 0) {
      sidebar.appendChild(createNoRatingsMessageElement());
      return;
    }

    sidebar.appendChild(createRatingsListElement(ratings));
  } catch (err) {
    console.error(`Failed to fetch and inject ratings, ${err}`);

    sidebar.appendChild(createErrorMessageElement());
  }
};
