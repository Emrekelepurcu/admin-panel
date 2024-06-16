function showNotification(eventName, listener) {
  document.addEventListener(eventName, listener)
}

function removeNotification(eventName, listener) {
  document.removeEventListener(eventName, listener)
}

function dispatchEvent(eventName, data) {
  const event = new CustomEvent(eventName, { detail: data })
  document.dispatchEvent(event)
}

export { showNotification, removeNotification, dispatchEvent }
