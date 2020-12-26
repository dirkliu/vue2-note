class VNode {
  uid = 0
  tagName = ''
  children = []
  nodeValue = ''

  constructor (options) {
    this.uid++
    this.type = options.type || 'element'
    this.tagName = options.tagName
    this.text = options.text
    if (options.children) {
      options.children.forEach(item => {
        this.children.push(new VNode(item))
      })
    }
  }
}

class App {
  vNode = ''
  container = null

  constructor (vNode) {
    this.vNode = vNode
  }

  mount (container) {
    this.container = container
    patch(this.vNode, container)
  }
}

function patch (vNode, container) {
  switch (vNode.type) {
    case 'element':
      let element = document.createElement(vNode.tagName)
      container.appendChild(element)
      if (vNode.children) {
        vNode.children.forEach(_vNode => {
          patch(_vNode, element)
        })
      }
      break
    case 'text':
      let text = document.createTextNode(vNode.text)
      container.appendChild(text)
  }
}

var VNodes = new VNode({
  tagName: 'div',
  type: 'element',
  children: [{
    type: 'text',
    text: 'test text ok'
  }]
})

var app = new App(VNodes)
app.mount(document.querySelector("#app"))
