// import {VNode} from './vnode'
import {Component, ComponentOptions} from './component'
class App {
  uid:number = 0
  el:HTMLElement = null
  _component = null

  constructor (compOptions: ComponentOptions) {
    this.uid++
    this._component = new Component(compOptions)
  }

  mount (queryOrDom: string | HTMLElement) {
    this.el = typeof queryOrDom === 'string' ? document.querySelector(queryOrDom as string) : queryOrDom
    this._component.mount(this.el)
  }
}

export default App