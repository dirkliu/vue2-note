class Watcher {
  static count = 0
  constructor () {
    this.id = ++this.constructor.count
  }
}
