import {Dep} from './dep'

function defineReactive (obj, key) {
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    get () {
      return obj[key]
    }, 
    set () {
      obj[key] = value
      dep.notify()
    }
  })
}

export {
  defineReactive
}