import 'bootstrap/dist/css/bootstrap.min.css';
import { getOption } from '../utils/storage';
import { LOCAL_STORAGE_KEYS } from '../utils/constants';
import { handleAddRatings, handleRemoveRatings } from './ratings';
import './styles.css';

const handleShowHideRatingsChecked = async (e) => {
  try {
    const isChecked = e.target.checked;

    if (isChecked) {
      await handleAddRatings();
    } else {
      await handleRemoveRatings();
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

window.onload = async () => {
  const showHideRatingsSwitch = document.getElementById('show-hide-ratings');
  console.log('window.onload():', await getOption(LOCAL_STORAGE_KEYS.SHOW_RATINGS));

  if (await getOption(LOCAL_STORAGE_KEYS.SHOW_RATINGS)) {
    showHideRatingsSwitch.checked = 'true';
  }

  showHideRatingsSwitch.addEventListener('change', handleShowHideRatingsChecked);
};
