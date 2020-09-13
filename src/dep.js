class Dep {
  // static count
  constructor () {
     this.id = ++this.constructor.count
  }
}

export {
  Dep
}
 