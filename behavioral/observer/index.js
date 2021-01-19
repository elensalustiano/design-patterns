(function () {
  const Subject = require('./observer')

  const observer1 = {
    id: 'observer1',
    update: () => console.log('update observer1!')
  }

  const observer2 = {
    id: 'observer2',
    update: () => console.log('update observer2!')
  }

  Subject.subscribe(observer1)
  Subject.subscribe(observer2)
  Subject.notify()

  Subject.unsubscribe(observer2)
  Subject.notify()
})()