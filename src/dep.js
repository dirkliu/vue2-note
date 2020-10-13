let id = 0

class Dep {
  subs
  constructor () {
     this.id = ++id
  }

  notify () {
  }
}

Dep.target = null

export {
  Dep
}
 