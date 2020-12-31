interface VNode {
  type: string,
  tagName?: string,
  children?: VNode[] | string
}

export {
  VNode
}