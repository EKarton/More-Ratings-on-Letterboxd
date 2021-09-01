import 'arrive';
import { getOption } from '../storage';
import { LOCAL_STORAGE_KEYS, REQUEST_TYPES } from '../common/constants';
import { addRatingsToWebpage, removeRatingsFromWebpage } from './ratings';

window.onload = async () => {
  if (await getOption(LOCAL_STORAGE_KEYS.SHOW_RATINGS)) {
    await addRatingsToWebpage();
  }
};

chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  switch (request.type) {
    case REQUEST_TYPES.ADD_RATINGS: {
      console.log('Adding ratings to the web page');
      addRatingsToWebpage();
      break;
    }
    case REQUEST_TYPES.REMOVE_RATINGS: {
      console.log('Removing ratings from the webpage');
      removeRatingsFromWebpage();
      break;
    }
    default: {
      throw new Error(`Unhandled request type ${request.type}`);
    }
  }

  sendResponse({});
});
