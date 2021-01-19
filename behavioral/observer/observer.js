
const observers = []

function subscribe(observer) {
  console.log('Subscribe observer:', observer.id);
  observers.push(observer)
}

function notify(observer) {
  for (observer of observers) {
    if (observer.update) {
      console.log('Notify observer: ', observer.id);
      observer.update()
    }
  }
}

function unsubscribe(observer) {
  const observerIndex = observers.indexOf(observer);

  if (observerIndex === -1) {
    return console.log('nonexistent observer');
  }

  observers.splice(observerIndex, 1)
  console.log('Unsubscribe observer: ', observer.id);
}

module.exports = {
  subscribe,
  notify,
  unsubscribe
}
