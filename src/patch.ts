import {VNode} from './vnode'

function patch (vnode: VNode, container) {
  switch (vnode.type) {
    case 'text':
      let text = document.createTextNode(vnode.children as string)
      container.appendChild(text)
      break
    case 'element':
      let ele = document.createElement(vnode.tagName)
      container.appendChild(ele)
      break
  }
}

export {
  patch
}