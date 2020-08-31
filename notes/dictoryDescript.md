# VUE目录说明  
``` 
|-- benchmarks
|-- dist 构建后生成的代码  
|-- examles 一些示例  
|-- flow flow接口规范  
|-- packages 相关的包  
|-- scripts 构建相关的脚本  
|-- src vue源码 
  |-- compiler 模板编译器 
  |-- core vue核心代码(所有plaforms公用) 
    |-- components 核心组件  
    |-- global-api Vue的全局方法和属性  
    |-- instance vue示例  
    |-- observer 观察者  
    |-- util vue相关的工具  
    |-- vdom 虚拟dom
  |-- platforms 各平台上的vue
    |-- web web平台上的vue 
    |-- weex weex app上的vue
  |-- server 服务端渲染  
  |-- sfc 单文件组件解析  
  |-- shared 公用的常量和工具
    |-- contants 公用的常量  
    |-- utils 公用的工具
|-- test 测试用例  
|-- types TS接口规范
```