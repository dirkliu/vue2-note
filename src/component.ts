import {VNode} from './vnode'
import {patch} from './patch'

interface ComponentOptions {
  vnode: VNode
}

class Component {
  static uid:number = 0

  _uid:number = 0

  _vnode:VNode = null

  constructor (compOptions: ComponentOptions) {
    this._uid = ++Component.uid
    this._vnode = compOptions.vnode
  }

  mount (container) {
    patch(this._vnode, container)
  }
}

export {
  ComponentOptions,
  Component
}