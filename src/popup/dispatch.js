export const dispatchEventToContentScript = async (message) => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  return new Promise((resolve, reject) => {
    chrome.tabs.sendMessage(tab.id, message, () => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }

      resolve();
    });
  });
};
