/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 * subs: [Watcher]
 * target: Watcher
 */
class Dep {
  static target
  constructor () {
  }

  addSub (sub) {
    this.subs.push(sub)
  }

  removeSub () {
  }

  depend () {
  }

  notify () {
  }
}

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null
const targetStack = []

export function pushTarget (target) {
  targetStack.push(target)
  Dep.target = target
}

export function popTarget () {
  targetStack.pop()
  Dep.target = targetStack[targetStack.length - 1]  
}
