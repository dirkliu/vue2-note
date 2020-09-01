/**
 * vm
 * cb: Function
 * id: Number
 * deep
 * user
 * deps: [Dep]
 */
let uid = 0
class Watcher {
  vm
  cb
  id
  deep
  user
  lazy
  constructor (){
  }

  get () {
  }

  // dep: Dep
  addDep (dep) {
    const id = dep.id
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id)
      this.newDeps.push(dep)
      if (!this.depIds.has(id)) {
        dep.addSub(this)
      }
    }
  }

  cleanupDeps () {
  }

  update () {
  }

  run () {
  }

  evaluate () {
  }

  depend () {
  }

  /**
   * Remove self from all dependencies' subscriber list.
   */
  teardown () {
  }
}