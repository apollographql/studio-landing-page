// https://stackoverflow.com/questions/326069/how-to-identify-if-a-webpage-is-being-loaded-inside-an-iframe-or-directly-into-t
export default () => {
  try {
    // Accessing window.top cross-origin throws; the throw is the signal.
    return window.self !== window.top;
  } catch (_e) {
    return true;
  }
};
