/**
 * A promisable wrapper around the chrome.storage.sync.set() api
 * that sets the value of a key in the chrome extension's storage
 * @param {string} key the key
 * @param {any} value its value
 * @returns {Promise} whether it is resolved or not
 */
export const setOption = (key, value) => {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.set({ [key]: value }, () => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError.message);
      }

      resolve();
    });
  });
};

/**
 * A promisable wrapper around the chrome.storage.sync.get() api
 * that gets the value of a key in the chrome extension's storage
 * @param {string} key the key
 * @returns {Promise<any>} the value of the key
 */
export const getOption = (key) => {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(key, (result) => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError.message);
      }

      resolve(result[key]);
    });
  });
};
