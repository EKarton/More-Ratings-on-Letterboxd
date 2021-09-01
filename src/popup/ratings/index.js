import { setOption } from '../../utils/storage';
import { dispatchEventToContentScript } from '../dispatch';
import { REQUEST_TYPES, LOCAL_STORAGE_KEYS } from '../../utils/constants';

export const handleRemoveRatings = async () => {
  await Promise.all([
    dispatchEventToContentScript({ type: REQUEST_TYPES.REMOVE_RATINGS }),
    setOption(LOCAL_STORAGE_KEYS.SHOW_RATINGS, false),
  ]);
};

export const handleAddRatings = async () => {
  await Promise.all([
    dispatchEventToContentScript({ type: REQUEST_TYPES.ADD_RATINGS }),
    setOption(LOCAL_STORAGE_KEYS.SHOW_RATINGS, true),
  ]);
};
